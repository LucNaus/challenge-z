var adjective = ["Luc", "yentl", "youri", "jerbo", "joris", "nando", "dennis", "yorrick", "indy", "jerry", "KingJerboV" ] 


function generator() {
 document.getElementById("name").innerHTML = adjective[Math.floor(Math.random() * adjective.length)] ;
}   