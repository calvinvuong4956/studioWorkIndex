// find elements
const stageContainer = document.getElementById("stage-container");
let stageContainerWidth = stageContainer.offsetWidth;
let stageContainerHeight = stageContainer.offsetHeight;
console.log(stageContainerWidth);
console.log(stageContainerHeight);

const circleButton = document.getElementById("circle-button");
console.log(circleButton);

// 1. creating konva stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: stageContainerWidth,
  height: stageContainerHeight,
});

// create layer
const firstLayer = new Konva.Layer();

// create shape (circle)
// const circle = new Konva.Circle({
//   x: stage.width() / 2,
//   y: stage.height() / 2,
//   radius: 50,
//   fill: "orange",
// });

stage.add(firstLayer);

// add interaction to button
function drawNewCircle() {
  const circle = new Konva.Circle({
    x: stage.width() * Math.random(),
    y: stage.height() * Math.random(),
    radius: 65 * Math.random(),
    fill: circleColour,
  });
  firstLayer.add(circle);
}

circleButton.addEventListener("click", drawNewCircle);

// =======================================================================================

// Radio Input Colour Change Functionality
const changeOrange = document.getElementById("change-orange");
const changeRed = document.getElementById("change-red");
const changeBlue = document.getElementById("change-blue");

// set default circle colour
let circleColour = "orange";

// changing circle colour
// Used "radio" type input because it allows for a exclusive selection of colours.
// This restricts users in exploring colour variety but makes their decision-making concrete.

// To change the colour, the value of the colours must be coded.
// Then the constColour must accomodate the radio option chosen.
function changeColourRadio(clickEvent) {
  let newColour = clickEvent.target.value;
  circleColour = newColour;
}

// add EventListeners
changeOrange.addEventListener("click", changeColourRadio);
changeRed.addEventListener("click", changeColourRadio);
changeBlue.addEventListener("click", changeColourRadio);

// =======================================================================================

// Typing the Colour with CORRECT SPELLING to change its colour
const changeName = document.getElementById("change-name");

// Maybe I could use the re-use the code from the Radio Functionality to determine circle colour?
// Need a check statement that checks if the spelling of the colour is correct
// The check statement might be an if/else statement?
// if the colour spelt correctly, then circleColour will accomodate it
// else, the colour will not change from the default (orange)

// could synergise with the radio functionality?
// like instead of the correct spelling directly changing colour, rather it changes the radio selection, which then changes the colour.
// CORRECT SPELLING -> Automatically Re-selects Radio Option -> Changes Colour
// to ensure/force users to use this typing function instead of just using the radio function, I would have to lock the radio function
// obviously, it is extremely unintuitive but maybe the purpose of this function is COMEDIC SATIRE rather than productive!
