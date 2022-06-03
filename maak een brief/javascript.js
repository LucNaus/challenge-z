function createletter () {
var tekst = document.getElementById("tekst").innerHTML;


var Firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var yourfullname = document.getElementById("yourfullname").value;
var activity = document.getElementById("activity").value;
var date = document.getElementById("date").value;
var time = document.getElementById("time").value;
var yourfriend = document.getElementById("yourfriend").value;
var location = document.getElementById("location").value;
var stuff = document.getElementById("stuff").value;
var dontforget = document.getElementById("dontforget").value;
var sendername = document.getElementById("sendname").value;



var test = `test ${Firstname} ${lastname},

Met groot genoegen mag ik jou, ${yourfullname}, op de hoogte stellen dat jij uitverkoren bent om mee te dingen naar de speciale prijs voor ${activity}.
Daarom nodig ik je uit om op ${date} om ${time} uur samen met ${yourfriend} te verschijnen op de locatie: ${location}.
Wat je moet meebrengen is ${stuff}.

Vergeet niet om ${dontforget}.
We zien je graag binnenkort.

Met vriendelijke groet,
${sendername}.`

document.getElementById("output").innerHTML = test;
}