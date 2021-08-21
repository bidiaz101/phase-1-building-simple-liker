// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartSwitcher = {
  [EMPTY_HEART]: FULL_HEART,
  [FULL_HEART]: EMPTY_HEART,
}

const classSwitcher = {
  "like-glyph": "activated-heart",
  "activated-heart": "like-glyph"
}

document.getElementById("modal").className = "hidden";

const likeHearts = Array.from(document.getElementsByClassName("like-glyph"));
likeHearts.forEach(heartIcon => {
  heartIcon.addEventListener("click", () => {
    mimicServerCall()
    .then( () => {
      heartIcon.innerText = heartSwitcher[heartIcon.innerText]
      heartIcon.className = classSwitcher[heartIcon.className]
    })
    .catch( () => {
      const errorMsg = document.getElementById('modal');
      errorMsg.className = "error";
      setTimeout( () => errorMsg.className = "hidden", 3000)
    })
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
