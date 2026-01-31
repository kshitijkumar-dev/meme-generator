const btn = document.getElementById("btn");
const memeImg = document.getElementById("memeImg");
const memeTitle = document.getElementById("memeTitle");

async function getMeme() {
  try {
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();

    memeImg.src = data.url;
    memeTitle.innerText = data.title;
  } catch (error) {
    memeTitle.innerText = "Failed to load meme 😢";
  }
}

btn.addEventListener("click", getMeme);

// Load first meme as soon as website opens
getMeme();
