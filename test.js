// Run on the Console of DevTools

const userinfo_id = localStorage.getItem('userinfo_id');

const song1 = "61394731-8ac1-4afd-bc00-f299958375f8";
const song2 = "8fe2341e-cf7c-460a-9815-79a8a621a078";
const song3 = "c11585f8-2f90-4def-a6bb-0d024b1f5a52";

localStorage.setItem(`${userinfo_id}:songs`, JSON.stringify([
  {
    "name": "Shake It Off",
    "uuid": song1
  },
  {
    "name": "Blank Space",
    "uuid": song2
  },
  {
    "name": "You Belong With Me",
    "uuid": song3
  }
]));

localStorage.setItem(`${userinfo_id}:${song1}:lines`, JSON.stringify([
  {
    "value": "I stay out too late",
    "uuid": "bda7fb0e-4928-4f4a-bbed-7151c01a8053"
  },
  {
    "value": "Got nothing in my brain",
    "uuid": "2634a741-6e97-4118-885a-3afc0f648aa8"
  }
]));

localStorage.setItem(`${userinfo_id}:${song2}:lines`, JSON.stringify([
  {
    "value": "Nice to meet you, where you been?",
    "uuid": "a1829b39-3a08-43a7-a5e5-6fedd3b487ba"
  }
]));

localStorage.setItem(`${userinfo_id}:${song3}:lines`, JSON.stringify());
