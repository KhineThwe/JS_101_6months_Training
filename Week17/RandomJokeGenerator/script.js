const jokeButton = document.getElementById("getJoke");
const jokeDisplay = document.getElementById("joke");

jokeButton.addEventListener("click", getJoke);

function getJoke() {
  // Replace this URL with the joke API of your choice
  const jokeAPI = "https://api.example.com/jokes/random";

  fetch(jokeAPI)
    .then((response) => response.json())
    .then((data) => {
      const jokeText = data.joke; // Adjust this based on the API response structure
      jokeDisplay.textContent = jokeText;
    })
    .catch((error) => {
      jokeDisplay.textContent =
        "Oops! Something went wrong. Please try again later.";
    });
}
