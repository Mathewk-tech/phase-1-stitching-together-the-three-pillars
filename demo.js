// Step 1: Select all heart elements
const articleHearts = document.querySelectorAll(".like-glyph");

// Step 2: Mock server function
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Step 3: Add event listeners to hearts
articleHearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heart.textContent === "♡") {
          heart.textContent = "♥";
          heart.classList.add("activated-heart");
        } else {
          heart.textContent = "♡";
          heart.classList.remove("activated-heart");
        }
      })
      .catch(error => {
        alert(error);
      });
  });
});
