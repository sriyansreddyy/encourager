const backgroundOfPage = document.getElementById("background-of-page")
const adviceEye = document.getElementById("advice-eye")

const mainQuote = document.getElementById("quote")
const authorOfQuote = document.getElementById("author")
const encourageBtn = document.getElementById("encourage-btn")

const url = "https://api.quotable.io/random"

encourageBtn.addEventListener("click", generateQuote)

function generateQuote(){
   fetch(url)

   .then(function(data) {
      return data.json()
   })

   .then(function(data){    
      mainQuote.innerHTML = data.content
      authorOfQuote.innerHTML = `👨👩- ${data.author}`
   })

   .catch(function(err) {
      console.log(err); 
   })
}

generateQuote()

encourageBtn.addEventListener("click", generateRandomColors)

function generateRandomColors() {
   let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
   backgroundOfPage.style.backgroundColor = randomColor
}

function update(stream) {
   document.querySelector('video').src = stream.url
}

function hasGetUserMedia() {
   return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
}
if (hasGetUserMedia()) {
   
} else {
   alert("getUserMedia() is not supported by your browser")
}

const constraints = {
   video: true,
 };
 
const video = document.querySelector("video")
 
navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
   video.srcObject = stream
})
