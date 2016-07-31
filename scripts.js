var cards = ["<img src='images/pokemon1.jpeg'>","<img src='images/pokemon1.jpeg'>", "<img src='images/pokemon2.jpeg'>",
"<img src='images/pokemon3.png'>", "<img src='images/pokemon4.jpeg'>", "<img src='images/pokemon5.jpeg'>",
"<img src='images/pokemon6.png'>", "<img src='images/pokemon7.jpeg'>", "<img src='images/pokemon8.jpeg'>",
"<img src='images/pokemon9.jpeg'>", "<img src='images/pokemon10.jpeg'>", "<img src='images/pokemon11.jpeg'>",
"<img src='images/pokemon12.jpeg'>", "<img src='images/pokemon13.jpeg'>", "<img src='images/pokemon14.png'>",
"<img src='images/pokemon15.png'>", "<img src='images/pokemon16.jpeg'>", "<img src='images/pokemon17.jpeg'>",
"<img src='images/pokemon18.jpeg'>", "<img src='images/pokemon19.jpeg'>", "<img src='images/pokemon20.jpeg'>",
"<img src='images/pokemon1.jpeg'>","<img src='images/pokemon1.jpeg'>", "<img src='images/pokemon2.jpeg'>",
"<img src='images/pokemon3.png'>", "<img src='images/pokemon4.jpeg'>", "<img src='images/pokemon5.jpeg'>",
"<img src='images/pokemon6.png'>", "<img src='images/pokemon7.jpeg'>", "<img src='images/pokemon8.jpeg'>",
"<img src='images/pokemon9.jpeg'>", "<img src='images/pokemon10.jpeg'>", "<img src='images/pokemon11.jpeg'>",
"<img src='images/pokemon12.jpeg'>", "<img src='images/pokemon13.jpeg'>", "<img src='images/pokemon14.png'>",
"<img src='images/pokemon15.png'>", "<img src='images/pokemon16.jpeg'>", "<img src='images/pokemon17.jpeg'>",
"<img src='images/pokemon18.jpeg'>", "<img src='images/pokemon19.jpeg'>", "<img src='images/pokemon20.jpeg'>"
]; //the collection

var easyCards = ["<img src='images/pokemon1.jpeg'>","<img src='images/pokemon1.jpeg'>", "<img src='images/pokemon2.jpeg'>",
"<img src='images/pokemon3.png'>", "<img src='images/pokemon4.jpeg'>", "<img src='images/pokemon5.jpeg'>",
"<img src='images/pokemon6.png'>","<img src='images/pokemon1.jpeg'>","<img src='images/pokemon1.jpeg'>", "<img src='images/pokemon2.jpeg'>",
"<img src='images/pokemon3.png'>", "<img src='images/pokemon4.jpeg'>", "<img src='images/pokemon5.jpeg'>",
"<img src='images/pokemon6.png'>"] // 6 different cards
var mediumCards = ["<img src='images/pokemon1.jpeg'>","<img src='images/pokemon1.jpeg'>", "<img src='images/pokemon2.jpeg'>",
"<img src='images/pokemon3.png'>", "<img src='images/pokemon4.jpeg'>", "<img src='images/pokemon5.jpeg'>",
"<img src='images/pokemon6.png'>", "<img src='images/pokemon7.jpeg'>", "<img src='images/pokemon8.jpeg'>",
"<img src='images/pokemon9.jpeg'>", "<img src='images/pokemon10.jpeg'>", "<img src='images/pokemon11.jpeg'>",
"<img src='images/pokemon12.jpeg'>", "<img src='images/pokemon1.jpeg'>","<img src='images/pokemon1.jpeg'>", "<img src='images/pokemon2.jpeg'>",
"<img src='images/pokemon3.png'>", "<img src='images/pokemon4.jpeg'>", "<img src='images/pokemon5.jpeg'>",
"<img src='images/pokemon6.png'>", "<img src='images/pokemon7.jpeg'>", "<img src='images/pokemon8.jpeg'>",
"<img src='images/pokemon9.jpeg'>", "<img src='images/pokemon10.jpeg'>", "<img src='images/pokemon11.jpeg'>",
"<img src='images/pokemon12.jpeg'>",] //12 different cards cards
var hardCards = ["<img src='images/pokemon1.jpeg'>","<img src='images/pokemon1.jpeg'>", "<img src='images/pokemon2.jpeg'>",
"<img src='images/pokemon3.png'>", "<img src='images/pokemon4.jpeg'>", "<img src='images/pokemon5.jpeg'>",
"<img src='images/pokemon6.png'>", "<img src='images/pokemon7.jpeg'>", "<img src='images/pokemon8.jpeg'>",
"<img src='images/pokemon9.jpeg'>", "<img src='images/pokemon10.jpeg'>", "<img src='images/pokemon11.jpeg'>",
"<img src='images/pokemon12.jpeg'>", "<img src='images/pokemon13.jpeg'>", "<img src='images/pokemon14.png'>",
"<img src='images/pokemon15.png'>", "<img src='images/pokemon16.jpeg'>", "<img src='images/pokemon17.jpeg'>",
"<img src='images/pokemon18.jpeg'>", "<img src='images/pokemon1.jpeg'>","<img src='images/pokemon1.jpeg'>", "<img src='images/pokemon2.jpeg'>",
"<img src='images/pokemon3.png'>", "<img src='images/pokemon4.jpeg'>", "<img src='images/pokemon5.jpeg'>",
"<img src='images/pokemon6.png'>", "<img src='images/pokemon7.jpeg'>", "<img src='images/pokemon8.jpeg'>",
"<img src='images/pokemon9.jpeg'>", "<img src='images/pokemon10.jpeg'>", "<img src='images/pokemon11.jpeg'>",
"<img src='images/pokemon12.jpeg'>", "<img src='images/pokemon13.jpeg'>", "<img src='images/pokemon14.png'>",
"<img src='images/pokemon15.png'>", "<img src='images/pokemon16.jpeg'>", "<img src='images/pokemon17.jpeg'>",
"<img src='images/pokemon18.jpeg'>",] //18 different cards



var matched = 0;
var score = 0;
$(document).ready(function(){

 
		
	

	var gridSize = 12;
	var card = "<img src='images/pokemon1.jpeg'>";
	var mgHTML = "";
	var cardCounter = 0;
	
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
   //EASY
	$(".easy").click(function(){
		gridSize = 12;

shuffle(easyCards);
	for (var i = 0; i < gridSize; i++) {
			if (i < easyCards.length) {card = easyCards[0];}
				else {card = easyCards[1];}

			
			mgHTML += "<div class='mg-tile col-sm-3'>";
			mgHTML += "<div class='mg-tile-inner'>";
				mgHTML += "<div class='mg-front'>"+cards[i]+"</div>";
				mgHTML += "<div class='mg-back'></div>";
			mgHTML += "</div>";
		mgHTML += "</div>";
	}
	$(".mg-contents").html(mgHTML);
	pickCards();
 // END OF EASY
});

	  //MEDIUM
	$(".medium").click(function(){
		gridSize = 24;

shuffle(cards);
	for (var i = 0; i < gridSize; i++) {
			if (i < cards.length) {card = cards[0];}
				else {card = cards[1];}

	
	mgHTML += "<div class='row'>";
		mgHTML += "<div class='mg-tile col-sm-2'>";
			mgHTML += "<div class='mg-tile-inner'>";
				mgHTML += "<div class='mg-front'>"+cards[i]+"</div>";
				mgHTML += "<div class='mg-back'></div>";
			mgHTML += "</div>";
		mgHTML += "</div>";
	mgHTML += "</div>";

	mgHTML += "<div class='row'>";
		mgHTML += "<div class='mg-tile col-sm-2'>";
			mgHTML += "<div class='mg-tile-inner'>";
				mgHTML += "<div class='mg-front'>"+cards[i]+"</div>";
				mgHTML += "<div class='mg-back'></div>";
			mgHTML += "</div>";
		mgHTML += "</div>";
	mgHTML += "</div>";

	mgHTML += "<div class='row'>";
		mgHTML += "<div class='mg-tile col-sm-2'>";
			mgHTML += "<div class='mg-tile-inner'>";
				mgHTML += "<div class='mg-front'>"+cards[i]+"</div>";
				mgHTML += "<div class='mg-back'></div>";
			mgHTML += "</div>";
		mgHTML += "</div>";
	mgHTML += "</div>";
	
	}


	$(".mg-contents").html(mgHTML);
	pickCards();
 // END OF MEDIUM
});


	function pickCards() {
		$(".mg-tile-inner").click(function(){
			$(this).toggleClass("flip");
			var cardsUp = $(".mg-tile-inner.flip") //targets the div and the flip class, opt. just target .flip
			if (cardsUp.length === 2) {
				if (cardsUp.find("img")[0].src === cardsUp.find("img")[1].src) {
					//The pics are the same, it's a match
					setTimeout(function(){
					cardsUp.addClass("matched");
				}, 	1000 ) //give time to show it's matched
					
					score++;
					$("#num").html(score);

					setTimeout(function(){
					cardsUp.removeClass("flip");
				}, 2000) //Need to remove flip to reset the flip counter AFTER the card
				console.log(score);
					
				}
				else {
					// The user has flipped 2 cards and they don't match
					setTimeout(function(){
					cardsUp.removeClass("flip");

				}, 1000)
				}
			}
					});
	}; //end of pickCards
	 


}); //end of doc ready
