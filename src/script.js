function displayRecipe(response) {
  let displayedRecipe = document.querySelector("#recipe");
  displayedRecipe.innerHTML = response.data.answer;
}

function generateRecipe(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let numberOfPeople = document.querySelector("#servings");

  let textElement = document.querySelector("#recipe");
  textElement.classList.remove("hidden");
  textElement.innerHTML = `<div class="blink"> ⏳ Generating your recipe... </div>`;

  let prompt = `Generate a recipe with ${userInput.value} for ${numberOfPeople.value} people`;
  let context = `You are a cooking expert. Reply only with the recipe, in HTML (no markdown, no code fences): <h2> for the title with the number of people, <h3> for Ingredients and Instructions, <ul><li> for ingredients, <ol><li> for steps. Use metric units (with the imperial equivalent in brackets right next to it).`;
  let apiKey = "4b4301acf33210b672de34o3f362t059";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
