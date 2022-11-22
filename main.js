// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", (event) => {
  const errorModal = document.querySelector("div#modal");
  const hearts = document.getElementsByClassName("like-glyph");
  for (let i = 0; i < hearts.length; i++) {
    let element = hearts[i];
    element.addEventListener("click", (event) => {
      mimicServerCall()
        .then(() => {
          if (element.textContent === FULL_HEART) {
            element.textContent = EMPTY_HEART;
            element.classList.remove("activated-heart");
          } else {
            element.textContent = FULL_HEART;
            element.classList.add("activated-heart");
          }
        })
        .catch((error) => {
          errorModal.classList.remove("hidden");
          document.querySelector("#modal-message").textContent = error;
          setTimeout(hideModal, 3000);
        });
    });
  }
});

const hideModal = () => {
  document.querySelector("div#modal").className = "hidden";
};

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

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
