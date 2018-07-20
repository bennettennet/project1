/*
 *  JavaScript wrapper
 */

let output = document.getElementById('output');
let output2 = document.getElementById('output2');
let output3 = document.getElementById('output3');

let numbers = [0];
let suit = ["hearts","diamonds","spades","clubs"];
let picked = [];
let player = []
let dealer = []
let count = 0
let playerscore = 0
let dealerscore = 0
let cardtype = 0
let turn = 2


for (let n=1; n<14; n++) {
  if (n==11){
    numbers.push("jack");
  }
  else if (n==12){
    numbers.push("queen");
  }
  else if (n==13){
    numbers.push("king");
  }
  else{
    numbers.push(n);
  }
}

let pick_card = function() {
  let random = (Math.floor(13* Math.random()));
  let random2 = (Math.floor(4* Math.random()));
  cardtype = (numbers[random]);
  if (cardtype == 0){
      let random = (Math.floor(13* Math.random()));
      cardtype = (numbers[random]);
    }
  let cardsuit = (suit[random2]);
  let x = cardtype+" "+cardsuit;

  let is_picked = picked.includes(x);

  if (is_picked){
    x = pick_card();
    console.log('Card already picked')
  }

  return x;
}



function show_card() {
  if(picked.length <52) {
    count++;

    let card = pick_card();
    picked.push(card);

    //console.log(picked);

    output.innerHTML = "your card is the "+ card;
    if (count<3){
      player.push(cardtype);
    }
    else if (count>2 && count<5){
      dealer.push(cardtype);
    }
    console.log(player);
    console.log(dealer);
    if (player.length==2 && dealer.length==2){
      player1 = numbers.indexOf(player[0]);
      player2 = numbers.indexOf(player[1]);
      dealer1 = numbers.indexOf(dealer[0]);
      dealer2 = numbers.indexOf(dealer[1]);
      playerscore = player1 + player2;
      dealerscore = dealer1 + dealer2;

      output.innerHTML = "player is on "+ playerscore;
      output2.innerHTML = "dealer is on "+ dealerscore;
      output3.innerHTML = "player's turn";
      return;
      }

  }
  else {
console.log('You have already picked every card possible');
}
}


function stick() {

  if (turn==2){
    output.innerHTML = "player has finished on "+ playerscore;
    turn=3;
    output3.innerHTML = ("dealer's turn");

  }
  else if (turn==3) {

    output2.innerHTML =  "dealer has finished on "+ dealerscore;
    turn=2;
    output3.innerHTML = ("player's turn");
  }
}

function twist() {
  if  (turn==2){
    turn=3
    output3.innerHTML = ("dealer's turn");
    pick_card();
    console.log(cardtype);
    playerscore = playerscore + numbers.indexOf(cardtype);
    output.innerHTML = "player is on "+ playerscore;


    if (playerscore>21){
      output.innerHTML = "player has gone bust"
    }
  }

    else if  (turn==3){
      turn=2
      output3.innerHTML = ("player's turn");
      pick_card();
      console.log(cardtype);
      dealerscore = dealerscore + numbers.indexOf(cardtype);
      output2.innerHTML = "dealer is on "+ dealerscore;

      if (dealerscore>21){
        output2.innerHTML = "dealer has gone bust";
      }
      }
    }
