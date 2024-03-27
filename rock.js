//Randon Number Generator for Computer
//If Statements for results
// 1 = rock, 2 = paper, 3 = scissors 
//Button to refresh page

function game(){
	event.preventDefault();
	document.getElementById("option").style.display = "none";
	var user = parseInt(document.getElementById("option").value);
    var computer = getComputer();
	
	if((user == 1 && computer == 3) || (user == 2 && computer == 1) || (user == 3 && computer == 2)){
		alert("You have won");
	}else if((computer == 1 && user == 3) || (computer == 2 && user == 1) || (computer == 3 && user == 2)){
		alert("You have lost");
    
	}else if((computer == 1 && user == 1) || (computer == 2 && user == 2) || (computer == 3 && user == 3)){
		alert("This game was a draw");
    }
}

function getComputer(){
   return Math.floor(Math.random() * 3) + 1;
}

function playAgain() {
  location.reload();
}


