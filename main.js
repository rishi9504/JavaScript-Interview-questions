
//different variables for custom name , randomizing the story and the story 
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

//defining the varibales for the different stories

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

//

//Adds a click event listener to the randomize variable so that when the button it represents is clicked, the result() function is run.
randomize.addEventListener('click', result);

//function for the result story
function result() {
	// This is needed so we can create a new random story each time the button is pressed and the function is run.
	let newStory = storyText;

	//Creating three new variables called xItem, yItem, and zItem, and making them equal to the result of calling randomValueFromArray() 
	//on your three arrays (the result in each case will be a random item out of each array it is called on)
	let xItem = randomValueFromArray(insertX);
	let yItem = randomValueFromArray(insertY); 
	let zItem = randomValueFromArray(insertZ);

	// replacing the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: — 
	//with the strings stored in xItem, yItem, and zItem


    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    // var weight = Math.round(300);
    // var temperature =  Math.round(94);
    var weight = Math.round(300*0.0714286) + ' stone';
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
