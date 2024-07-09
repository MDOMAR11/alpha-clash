function play(){
  hideElementById('home-section');
  showElementById('play-ground');
  hideElementById('score-section')
  setTextElementValueById('current-life', 5);
  setTextElementValueById('current-score', 0);
  continueGame();
}
function manageKeboardHadndler(event){
  const playerPressed = event.key;
  console.log("playerpressed key", playerPressed);
  const currentAlphabet = document.getElementById('current-letter');
  const alphabet = currentAlphabet.innerText;
  const expectedAlphabet = alphabet.toLocaleLowerCase();
  console.log(expectedAlphabet);
  if(playerPressed === expectedAlphabet){

    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore)

    removeBackgroundColor(expectedAlphabet);
    continueGame();
    
    
   
  }
  else{
     const currentLife = getTextElementValueById('current-life');
     const decrementLife = currentLife-1;
     setTextElementValueById('current-life',decrementLife);
     if(decrementLife === 0){
      gameOver()
     }
  }

}

document.addEventListener('keyup', manageKeboardHadndler);

function continueGame(){
  const randomAlphabet = getArandomAplhabet();
  const currentAlphabet = document.getElementById('current-letter');
  currentAlphabet.innerText=randomAlphabet;
  setBackgroundcolor(randomAlphabet);

}
function gameOver (){
  hideElementById('play-ground');
  showElementById('score-section');

  const finalValue = getTextElementValueById('current-score');
  setTextElementValueById('end-score', finalValue);

  // cleaar background color 
  const currentAlphabet = document.getElementById('current-letter');
  removeBackgroundColor(currentAlphabet);

  
  
}