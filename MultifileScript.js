function changeColor(body){
    var background = document.getElementById(squareId);
    var randomColor = getRandomColor();
    background.setAttribute("style", "background-color :"+randomColor+";");

}




