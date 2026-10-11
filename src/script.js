function displayRecipe(response) {
  let displayedRecipe = document.querySelector("#recipe");
  displayedRecipe.innerHTML = response.data.answer;
}

function generateRecipe(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let numberOfPeople = document.querySelector("#servings");

  let prompt = `Generate a recipe with ${userInput.value}. for ${numberOfPeople.value} people`;
  let context =
    "You are a cooking expert and always give the best recipes giving first the required ingredients with the required quantities and then, you give the recipe with step 1, step 2 and so on. Do not reply with anyhting but the recipe directly. Indicate everything in the metric system (and put the imperial equivalent in brackets). Please, go the the next line after each sentence and within the instructions, go the the next line after each step and present each step in a paragraph.";
  let apiKey = "4b4301acf33210b672de34o3f362t059";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
