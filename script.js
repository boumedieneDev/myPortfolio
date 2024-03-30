var icon = document.getElementById("moon");
icon.onclick = function(){
    document.body.classList.toggle("dark_mode");
    if(document.body.classList.contains("dark_mode")){
        document.getElementById("logo").src="img/white orng.png";
        icon.src="img/sun.png";
    }else{
        document.getElementById("logo").src="img/black orng.png";
        icon.src="img/moon.png";
    }
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwfeMx7RIZ-pLNQ7ZmIDli7Cg0Yee5euJmsU3Raus7YEkDHLf1hdj_-sXTSM9qhck27XA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})