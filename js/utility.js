function showElementById(elementId){
   const element= document.getElementById(elementId);
   element.classList.remove('hidden');
}
function hideElementById(elementId){
   const  element = document.getElementById(elementId);
   element.classList.add('hidden')
}

// get a random Alphabet 
function getArandomAplhabet(){
   const Alphabets = "abcdefghijklmnopqrstuvwxyz";
   const AlphabetArray = Alphabets.split('');
   

   // get a random number 
   const numbers = Math.random()*25
   const number = Math.round(numbers);
   // console.log(number);

   // find the alphabets with index
   const alphabet = AlphabetArray[number];
   return alphabet;
  
}
function setBackgroundcolor(elementId){
   const background = document.getElementById(elementId);
   background.classList.add('bg-orange-600');
}
function removeBackgroundColor(elementId){
   const element = document.getElementById(elementId)
   element.classList.remove('bg-orange-600');
   
}
function getTextElementValueById(elementId){
   const element = document.getElementById(elementId);
   const elementValueText = element.innerText;
   const value = parseInt(elementValueText);
   return value;
}

function setTextElementValueById(elementId, value){
   const element = document.getElementById(elementId);
   element.innerText = value;
}

function texElement(elementId,value){
  const element = document.getElementById(elementId);
  element.innerText=value;
  


}