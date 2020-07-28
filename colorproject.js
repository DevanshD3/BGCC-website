var numofsquares = 6
var colors = generaterandomnumbers(numofsquares)
// var colors = [
//   "rgb(255, 0, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 0, 255)",
//   "rgb(20, 120, 180)",
//   "rgb(25, 200, 100)",
//   "rgb(255, 255, 255)"
// ]
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor()
var colordisplay = document.getElementById("colordisplay"); 
var message = document.getElementById("message")
var h1 = document.querySelector("h1")
var reset = document.querySelector("#reset")
var easy = document.getElementById("easy")
var hard = document.getElementById("hard")


//the EASY button
easy.addEventListener("click",function(){
  hard.classList.remove("selected")
  easy.classList.add("selected")
  numofsquares = 3
  colors = generaterandomnumbers(numofsquares)
  pickedcolor = pickcolor()
  colordisplay.textContent = pickedcolor
  for (var i = 0; i < squares.length; i++) 
  {
      //add initial colors to squares
    if (colors[i])
      squares[i].style.backgroundColor = colors[i];
    else
    squares[i].style.display = "none"
  }
  h1.style.backgroundColor = "steelblue"
})

//the hard button
hard.addEventListener("click",function(){
  hard.classList.add("selected")
  easy.classList.remove("selected")
  
  numofsquares = 6
  colors = generaterandomnumbers(numofsquares)
  pickedcolor = pickcolor()
  colordisplay.textContent = pickedcolor
  for (var i = 0; i < squares.length; i++) 
  {
      //add initial colors to squares
    
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].style.display = "block"
  }
  h1.style.backgroundColor = "steelblue"
})


//THE "RESET" button
reset.addEventListener("click", function()
{
  //generate random colors
  colors = generaterandomnumbers(numofsquares)
  //pick a new random color from array
  pickedcolor = pickcolor()
  //change colorDisplay to match the picked color
  colordisplay.textContent = pickedcolor
  message.textContent = ""
  this.textContent = "New Colors"
  //change color of square
  for (var i = 0; i < squares.length; i++) 
  {
      //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue"
})

colordisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++) 
{
    //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  
  //add click listeners to squares
  squares[i].addEventListener("click", function()
  {
    var grabcolor = this.style.backgroundColor;
    if (grabcolor === pickedcolor)
    { //if the color is the right color
        changecolor(grabcolor);
        message.textContent="Correct :)"
        h1.style.backgroundColor = grabcolor;
        reset.textContent = "Play Again"
        
    }
    else
    { //if the chosen color is wrong
        this.style.backgroundColor = "#232323"
        message.textContent="Try Again :("
    }
  })
}

function changecolor(color)
{
    //need to loop through every color
    for (var i = 0; i < squares.length; i++)
    { //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
    
}
// this function is for the actual color
function pickcolor() 
{
    var random = Math.floor(Math.random() * colors.length);
    return (colors[random]);
}
function generaterandomnumbers(num){
  var arr = []

  for (var i = 0; i <num; i++){
    arr.push(randomcolor())
  }
  return arr
}

function randomcolor(){
  //pick a red from 0 to 255
  var r = Math.floor(Math.random() * 256)
  
  
  // pick a green from 0 to 255
  var g = Math.floor(Math.random() * 256)
  // pick a blue from 0 to 255
  var b = Math.floor(Math.random() * 256)

  return "rgb(" + r + ", " + g + ", " + b + ")";
}