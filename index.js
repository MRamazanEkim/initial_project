const demons=document.getElementsByTagName("img");
const toggleButton = document.getElementById("demon-button")
console.log(demons.style)

function toggleImg(){
        demons[0].style.display= "inline-block";
        demons[1].style.display= "inline-block";
        toggleButton.style.display = "none"
    setTimeout(function(){
        demons[0].style.display= "none";
        demons[1].style.display= "none";
        toggleButton.style.display = "block"
    },4000)
}
