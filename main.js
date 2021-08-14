let btn = document.getElementById("getTimezone");

if(btn !== null){
btn.addEventListener("click",TimeZone);
}

function TimeZone(){
let time = document.getElementById("showTimezone");
time.innerHTML = Date();
}