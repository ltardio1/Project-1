

$(function() {



// var board = not sure
// ? maybe this is the same thing as when I create the board in the loop







				// GLOBAL VARIABLES


// Get HTML elements




// i can use this later to append my divs/game board because they will be inside this container
$container = $('#container');


// 	-grab the add button for player 1
	var $addFirst = $('#submit1');
	// console.log($addButton);

	// grab the button for player 2
	var $addSecond = $('#submit2');




	// So I can control the box where player 1's name will be 
	var $value1 = $('#input-box1');
	// console.log($inputValue);

	var $value2 = $('#input-box2');

  

	var $player1 = $('#player1');
	// console.log($todoListDiv);

	var $player2 = $('#player2');



// making a click function for player 1's add button so I can actually click it 
	// and add their name to the player 1 list
	$addFirst.click(function() {

		// making a variable fo the list items equal to the <p> tags surrounding them
		// This will let me access the $listItems by accessing the <p> tag
		var $name1 = $('<p>');
		
		// so i can move the typed input value 
		$name1.html($value1.val()) 
		
		$player1.append($name1);
		
		console.log($player1);

	});


// making a separate click function for player 2's add button 
	// and add their name to the player 2 list
	$addSecond.click(function() {

		// making a variable fo the list items equal to the <p> tags surrounding them
		// This will let me access the $listItems by accessing the <p> tag
		var $name2 = $('<p>');
		
		// so i can move the typed input value 
		$name2.html($value2.val()) 
		
		$player2.append($name2);
		
		console.log($player2);


});



// the game will always begin true, meaning that I will make a click event for each 
// circle and make that toggle on and off (true/false) 
// so the computer knows to switch the color every time a player clicks
var playerTurn = true;



// are $board/$colums global variables??? I think so? in terms of the scope
var $board = $('<div>');


		// construct my loop which will contain the div/board that i will append 
		// to the HTML file.  Then add click event which will pass in the game
		// function as a parameter
		for (var i = 0; i < 42; i++) {	

				var $board = $('<div>');

				$board.addClass('board');

				$container.append($board);

				// should i put the $column1 here?  because i will have to append the column div/id's to the board?
				// or since i made $board globally I don't need to be in here ??4
				$board.click(game);

				
				// lines 130-133 is a different syntax that i was trying.
				// I was jumping back and forth between the loop below because
				// it seems like the syntax on lines 135-139 is the preferred syntax
				// if you want to loop through a jquery variable.  

				// But I also thought 
				// 	that I could just loop through [i].length because I think that
				// is the same thing as $board
				// var $temp and console.log($temp) is me just
				// seeing if the loop will work.  
				// var $temp is supposed to be $column1 

						// for (var j = i; j < [i].length; j+7) {
							// var $temp = [j];
							// console.log($temp);
						// }

				// for (var j = i; j < $board.length; j+7) {
			
				// 	var $temp = $('.board').eq(j);

				// 	console.log($temp); 
		

			// }
	}

	

// var $column1 = $('<div>').attr('id', 'column1');
// console.log($column1);


			
			
			

// I made these outside of the scope because I was trying to create var $column 1 inside of the nested loop but it wasnt working so I figured that the issue was that I had to defin these columns before I made the loop just like I did for var $board 
var $column2 = $('<div>');

var $column3 = $('<div>');

var $column4 = $('<div>');

var $column5 = $('<div>');

var $column6 = $('<div>');

var $column7 = $('<div>');



// =========================================================================
	// These are my questions and stuff that I wrote down to try and help organize my thought process and try and see what might be causing my browser to break with the nested loops
// =========================================================================


// 1. Should the column grouping loop go inside/nest the initial loop that made the board?

		// a. is this nest causing it to break? 

		// b. if so, should I move it outside the initial loop?

			// --but if i do that, does that mean I cannot reference [i]??




// 2. is it breaking because i am not defining $column1 with the right value? i tried [j] and [j][i]

		// a. should I make var $column1 = ('<div>') in the global scope before I use it in the loop?


// 3.  am i not writing the loop argument correctly?

		// a.  I tried for (var j = 0; j < i; j+7) 

				// ---And tried switching j < i  to  j < [i].length

		// b. also tried for (var j = 0; j < $board.length; j+7)

				// ---and tried doing j = i because if it is nested I figure I should make the starting point of [j] equal to the starting point of [i]


// 4. After i wrote out each $column variable should I put those inside the game function?


// =============================================================
		// for (var j = 0; j < $board.length; j+7) {
			
		// 	var $column1 = $('.board').eq(j);
		// 	console.log($column1);
		// };
// =============================================================


// ================================================================
	// trying to loop through the variable $board 
	// but i might be able to loop through [i]
		// for (var j = 0; j < $board.length; j+7) {
			
		// 	var $column1 = $('.board').eq(j);
		// 	console.log($column1);
		// };
// ================================================================





 
var game = function() {


					// ===================================================

						// 	IMPORTANT / NEED TO MODIFY THIS LOGIC
					// THIS IS STILL GEARED TOWARDS THE TIC TAC TOE GAME

					// ===================================================


// Right now, this argument pertains to the individual (42) divs.
// So it says, "if the div that is clicked, does not have a class of red dyor bluey,
// meaning that it hasnt been occupied yet, 
// then execute the if statement on the next line"




if (!$(this).hasClass('reddy' || 'bluey')) {

		
			// so if current move is true 
			if( playerTurn ) {

				// Then add class after the box has been clicked
				// and set the css background to color for 'O'
				$(this).addClass('reddy').css('background-color', 'red');

				// then we alert that it's player O's turn next
				alert("It is Blue's turn!");

				// or else
			} else {

				// Then add class after the box has been clicked
				// and set the css background to color for 'X'
				$(this).addClass('bluey').css('background-color', 'blue');

				// Then alert that it is X's turn next
				alert("It is red's turn!");
			}


		// this allows toggling each time you click on a box
		// turn != turn
		playerTurn = !playerTurn;

		
	// for (var j = 0; j < $board.length; j+7) {
		
	// 	var $column1 = $('.board').eq(j);
		
	// 	console.log($column1);
	// };

	};


};

});



// after the conditionals for play functinon is established, I will
// construct my loop which will contain the div/board that i will append 
// to the HTML file.  Then add click event which will pass in the game
// function as a parameter

	// for (var i = 0; i < 42; i++) {
		
	// 	var $board = $('<div>');

	// 	$board.addClass('board');

	// 	$container.append($board);

	// 	$board.click(game);

	// };

	// this will be used when checking for winners by row/colums
	// $boardClass = $('.board');





	// for (var j = 0; j < $board.length; j+7) {
		
	// 	var $column1 = $('.board').eq(j);
	// 	console.log($column1);
	// };



// make array of rows

// loop through a row and if they all have same attribute/class 

// if [i]+1 + [i]+2 + [i]+3 + [i]+4  

// 	data value of red/blue




// or give each 






























