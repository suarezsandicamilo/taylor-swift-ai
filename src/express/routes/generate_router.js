//

const express = require('express');
const path = require('path');
const tf = require('@tensorflow/tfjs-node');

const router = express.Router();

let model;

async function loadModel() {
  try {
    model = await tf.loadLayersModel('file:///home/usr/taylor-swift-ai/src/Outputs/taylor_swift_js_v2/model.json'); // Only Total Paths
  } catch (error) {
    console.error('Error loading model:', error);
  }
}

loadModel();

router.post('/', (req, res) => {
  // Check if the model is loaded
  if (!model) {
    return res.status(500).send('Model not loaded yet');
  }

  const inputData = req.body.data;
  console.log(req.body);
  if (!Array.isArray(inputData)) {
    return res.status(400).send('Input data must be an array');
  }
  const tensor = tf.tensor(inputData);
  console.log('Input Data:', inputData);
  const fs = require('fs');

  const text = fs.readFileSync('/home/usr/taylor-swift-ai/src/Outputs/choruses.txt', 'utf-8');

  const vocabSet = new Set(text);
  const vocab = Array.from(vocabSet).sort();

  const char2idx = {};
  vocab.forEach((char, idx) => {
    char2idx[char] = idx;
  });

  const idx2char = vocab;

  generateText(model, inputData[0], 0.5, char2idx, idx2char).then(result => res.json(result));
});

async function generateText(model, startString, t, char2idx, idx2char) {

  const numGenerate = 300;

  let inputEval = startString.split('').map(s => char2idx[s]);
  inputEval = tf.tensor2d([inputEval]);

  const textGenerated = [];

  const temperature = t;

  model.resetStates();
  for (let i = 0; i < numGenerate; i++) {
    const predictions = model.predict(inputEval);

    const predictionsSqueezed = predictions.squeeze();

    const predictionsScaled = predictionsSqueezed.div(temperature);
    const predictedId = tf.multinomial(predictionsScaled, 1).dataSync()[0];

    inputEval = tf.tensor2d([[predictedId]]);

    textGenerated.push(idx2char[predictedId]);
  }

  return startString + textGenerated.join('');
}

module.exports = router;
