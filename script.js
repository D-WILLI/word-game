var hintButton = document.getElementById('hint-button'); 
var startButton = document.getElementById('start-game');
var newWord=""; 
var gameWord = []; 
var letterGuess = document.getElementById('letter-guesser')
var submitButton = document.getElementById('guess-button') 
// var guessValue = document.getElementById("letter-guess").value;




// EVENT LISTENERS 
startButton.addEventListener("click", () => {
    getWord();
})


hintButton.addEventListener("click", () => {
    getHint();
})





var dictonaryApi = 'c55c560c-197c-4962-b9ad-d78300ec86b1'



function getWord(data,gameWord){

    fetch("https://random-word-api.herokuapp.com/word?number=1").then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data[0]);
        newWord=data[0];
        gameWord = Array.from(newWord)
        playGame()
        // console.log(gameWord);  
      })


    function playGame(){
        console.log('play game');
        console.log(gameWord.length); 
        console.log(guessValue); 


        var guessValue= document.getElementById("letter-guess")

    function getAnswer(event){
        event.preventDefault(); 
        guessValue.addEventListener("submit", getAnswer); 
        console.log(guessValue); 
}

        for (i=0; i<gameWord.length; i++){
            if (letterGuess === gameWord[i]){
                console.log(gameWord[i]); 
            }
        
    }
}


    
}


    // var form = document.getElementById("myForm");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);

// }

   
// }





    // console.log (newWord)
// this function gets the api for a definition of the word for a hint
function getHint(){
    var requestWord = `https://dictionaryapi.com/api/v3/references/collegiate/json/${newWord}?key=${dictonaryApi}`
    fetch(requestWord)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            console.log ("Gettting Hint")
            console.log (data[0].shortdef[0]); 
            // console.log (newWord)
            // var imgCard = document.getElementById('img-card');
            // imgCard.innerHTML = '';

            // var giphyImg = document.createElement('img');
            // var randomizer = Math.floor(Math.random() * 40);

            // giphyImg.setAttribute('src', data.data[randomizer].images.original.url)
            // imgCard.appendChild(giphyImg);
        })

        // console.log (newWord)
}




// $('guess-button"').on('click', function(event){
//     event.preventDefault();
//     letterGuess = $("letter-guess").val();
//     console.log(letterGuess); 
//     // document.getElementById('display').style.display = 'block';

//     getWord(letterGuess); 
    
    
// });