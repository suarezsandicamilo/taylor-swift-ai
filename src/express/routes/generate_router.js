const express = require('express');
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
const path = require('path');

const router = express.Router();

/**
 * Loads the pre-trained neural network model.
 */
async function loadNeuralNetworkModel() {
  try {
    return await tf.loadLayersModel('file:///home/usr/taylor-swift-ai/src/Outputs/taylor_swift_js_v2/model.json');
  } catch (error) {
    console.error('Error loading neural network model:', error);
  }
}

/**
 * Handles the POST request to generate text using the loaded neural network model.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.post('/', async (req, res) => {
  let neuralNetworkModel = await loadNeuralNetworkModel();

  if (!neuralNetworkModel) {
    return res.status(500).send('Neural network model not loaded yet');
  }

  const inputSequence = req.body.data;

  if (!Array.isArray(inputSequence)) {
    return res.status(400).send('Input data must be an array');
  }

  try {
    const textCorpusPath = path.join(path.resolve(), '/src/Outputs/choruses.txt');
    const textCorpus = fs.readFileSync(textCorpusPath, 'utf-8');
    const vocabularySet = new Set(textCorpus);
    const vocabulary = Array.from(vocabularySet).sort();

    const characterToIndexMap = {};
    vocabulary.forEach((char, idx) => {
      characterToIndexMap[char] = idx;
    });

    const indexToCharacterArray = vocabulary;

    const generatedText = await generateText(neuralNetworkModel, inputSequence[0], 0.5, characterToIndexMap, indexToCharacterArray);

    res.json(generatedText);
  } catch (error) {
    console.error('Error reading file or generating text:', error);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * Generates text using the provided neural network model.
 * @param {Object} model - TensorFlow neural network model.
 * @param {string} startSequence - Initial input sequence for text generation.
 * @param {number} temperature - Controls the randomness of the generated text.
 * @param {Object} charToIdx - Mapping of characters to their corresponding indices.
 * @param {Array} idxToChar - Array representing the vocabulary with indices.
 * @returns {string} - Generated text.
 */
async function generateText(model, startSequence, temperature, charToIdx, idxToChar) {
  const numGenerate = 300;

  let inputEval = startSequence.split('').map(s => charToIdx[s]);

  inputEval = tf.tensor2d([inputEval]);

  const generatedText = [];

  model.resetStates();

  for (let i = 0; i < numGenerate; i++) {
    const predictions = model.predict(inputEval);
    const predictionsSqueezed = predictions.squeeze();
    const predictionsScaled = predictionsSqueezed.div(temperature);
    const predictedId = tf.multinomial(predictionsScaled, 1).dataSync()[0];

    inputEval = tf.tensor2d([[predictedId]]);
    generatedText.push(idxToChar[predictedId]);
  }

  return startSequence + generatedText.join('');
}

module.exports = router;
