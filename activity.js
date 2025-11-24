
var activitiesPrompt = prompt("What activities do you like to do? Sports? Arts? Jobs? Going outside? Tell me about them");
if (activitiesPrompt == "Martial arts" || activitiesPrompt == "coding" || activitiesPrompt == "chess" || activitiesPrompt == "reading"  || activitiesPrompt == "robotics stuff" || activitiesPrompt == "cubing"){
    alert("I like doing those too!")
}else{
    alert("Those activites sound interesting!");
}
var yourActivitiesText = document.createElement("h2");
yourActivitiesText.textContent = "You like " + activitiesPrompt;
document.body.appendChild(yourActivitiesText);