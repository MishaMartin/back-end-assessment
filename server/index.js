const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune/", (req, res) => {
  const fortune = ["A person of words and not deeds is like a garden full of weeds.", "A short pencil is usually better than a long memore any day.", "All your hard work will soon pay OfflineAudioCompletionEvent.", "All will go well with your new project.", "An inch of time is an inch of gold."];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];
  res.status(200).send(randomFortune)
})

app.get("/api/character/", (req, res) => {
  const character = ["Aang", "Katara", "Iroh", "Sokka", "Suki"];

  let randomIndex = Math.floor(Math.random() * character.length);
  let randomCharacter = character[randomIndex];
  res.status(200).send(randomCharacter)
})

app.get("/api/soulmate/", (req, res) => {
  const soulmate = ["Running near a pool.", "Sleeping in their parent's basement.", "Enjoying macaroni with ketchup.", "putting a fork in the microwave.", "Telling a child that Santa isn't real."];

  let randomIndex = Math.floor(Math.random() * soulmate.length);
  let randomSoulmate = soulmate[randomIndex];
  res.status(200).send(randomSoulmate)
})

app.get("/api/animal-facts/", (req, res) => {
  const animalFact = ["A shrimp's heart is located in its head.", "A snail can sleep for three years.", "Koalas and humans have almost identical fingerprints.", "Slugs have 4 noses.", "Elephants are the only animal that can't jump.", "A rhinoceros' horn is made of hair.", "It is possible to hypnotize a frog by placing it on its back and gently stroking its stomach."];

  let randomIndex = Math.floor(Math.random() * animalFact.length);
  let randomAnimalFact = animalFact[randomIndex];
  res.status(200).send(randomAnimalFact)
})

//animal facts were retrieved from thedodo.com/16-amazing-animal-facts-1094218100.html


app.listen(4000, () => console.log("Server running on 4000"));
