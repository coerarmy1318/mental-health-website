function unlockBadges(){

if(xp >= 10){
document.getElementById("badge1").innerText =
"🏆 First Quest Completed";
}

if(level >= 3){
document.getElementById("badge2").innerText =
"🏆 Level 3 Player";
}

}
let xp = 0;
let level = 1;

function completeQuest(points){

xp += points;

if(xp >= 100){
level++;
xp = 0;
alert("🎉 Level Up!");
}

updateUI();

unlockBadges();

}

function updateUI(){

document.getElementById("xp").innerText = xp;

document.getElementById("level").innerText = level;

updateBar();

}
function unlockBadges(){

if(xp >= 10){
document.getElementById("badge1").innerText =
"🏆 First Quest Completed";
}

if(level >= 3){
document.getElementById("badge2").innerText =
"🏆 Level 3 Player";
}

}
let moodHistory = [];

function logMood(mood){

moodHistory.push(mood);

drawChart();

}

function drawChart(){

let ctx = document.getElementById("moodChart");

new Chart(ctx,{
type:"line",
data:{
labels:moodHistory.map((_,i)=>"Day "+(i+1)),
datasets:[{
label:"Mood",
data:moodHistory
}]
}
});

}