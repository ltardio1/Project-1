### Necessary features




1. An interactive board which renders on page load



2. A way for players to set their name



3. A way for players to mark an empty space on their turn



4. The game should end when there is a winner, or if the game is a tie



5. The game should report the end state



















MVP

INITAL HTML ELEMENTS:


		1. ONE <div id="container"> manually written in HTML file so i can access the id in JS (global) 


		2. input fiels/buttons for player1 and player 2 names




		=============================================================
		GLOBAL OBJECTS (WHAT I NEED IN BETWEEN MY 'ONLOAD' AND SCOPE):
		=============================================================

		1. grab HTML element, which is only the div id #container

		2. var board = []??? not sure i will need this

		3. var currentMove = true



1. Grab #container

	--The container variable will be used because I will make a loop in js and inside I will create the div element (creating a local variable--ie: $circle) that will be looped (multiplied by however many spaces there is on the board) and append it to the container variable



2. Make board by using loop and inside loop I will make jquery variable = <div>
and loop it/append it to the html page 42 times for each space on the board

			
		-the jQuery variable should be an array now
			

		a. 		 [ 
					[null, null, null, null, null, null],

					[null, null, null, null, null, null],

					[null, null, null, null, null, null],

					[null, null, null, null, null, null],

					[null, null, null, null, null, null],

					[null, null, null, null, null, null],

					[null, null, null, null, null, null]

					]

		
		b. each COLUMN of circles WILL BE grouped in their own arrays within the overall array

			-but first I need to make the board and then go back and loop through
			again to group the columns





3. make a variable for player turn

		a. this will equal true so everytime the game starts the same player/color (ie: blue) will start the game

		b. when i add click functions, i will make the player turn variable toggle on and off so the playerturn/color alternates every turn


3.  


							==============
							MAKE FUNCTIONS
							==============		


1. game function--  **done**

	-this will wrap everything regarding the computer's instructions for the game play in regards to the click event i will make 

	-i will make a loop after these gameplay instructions in order to 
	create the game board and within the gameboard/loop i will add a click event so the loop will add this function to each div on the board for how to respond to the click function because i will  


	
2. Click event   **done**

	-The game function relates to this loop / click event because the parameter of the click event will pass in the game function 

		-everytime a div is clicked the click event will trigger the instructions within the game function





3. check winner

	a. CheckDiagonal --  NEED TO DO

		-parameters:  row column color ???


4. check winner FOR BOTH:
	
	a. checkRow & 

	b. checkColumn

		-i think i can do this in one function but i'm not exactly sure how

			-maybe I will have a nested loop ????


					
						==========
						MAKE LOOPS
						==========


// 3 loops for 3 ways of checking winners

1 function for checking diagonal and 1 function for checking both vertical and horizontal


create arrays that reference the elements in each column



===================================================

							NEW

				"conceptual breakthrough? 


	1. i am going to make new files, copy mostly the same code but I am going to loop 		in 7 different columns and then loop in the 42 spaces on the game board

		
		===============
		BACKUP PLAN:
		===============

			A. If I get stuck I will try the other way and hard code the html with 	columns that have id's

			B. And i will style those in css to make them look like columns

		 	C. AND hard code 6 divs in each column to make the game board.  

		 		---These divs wont need id's or classes because i will style them the same using pseudo selectors to save time.  


			D. AND in JavaScript I will grab each column into their own variables.  


				a. Then I will use those to loop/iterate through


				b. have the 7 columns trigger the click function 



	 				and inner spaces for each space for game pieces





I was able to finally get it. 

2 nested loops on lines 100 - 124

	1. making 7 columns

		a. and one iterating over the columns '6' times so it will create 6 
		divs for every 7 times the parent creates a column.








		===========================================================
					NEW SHIFT IN APPROACH FOR MY NEXT STEP:

							CLICK FUNCTION
========================================================================

	was using the click event that i used for my jquery tic tac toe game just as a general guide because there are some similarities with clicking and placing a color somewhere.  So i used it at the start of my connect for game and i was able to use the same arguments for tic tac toe to enable me to click the circles in my connect 4 game and have red/blue pop up. 

	I just tried it again after re-doing my game and its not working anymore.

	Not sure why that would happen. 

	In my old version, I looped 42 circles and attached my click function to the same circles that i made with the loop.


=====================================
		Like so:   OLD VERSION
=========================================

		
		for (var i = 0; i < 42; i++) {	

				var $board = $('<div>');

				$board.addClass('board');

				$container.append($board);
		------						------
		 -->	$board.click(game);   <--
		------ 						------

				}


			=====================================
	  		  AND THEN I HAD THE GAME FUNCTION 

vvvvvvvv	ON THE SAME SCOPE LEVEL AS THE LOOP 	vvvvvvvv
			=====================================


var game = function() {


if (!$(this).hasClass('reddy' || 'bluey')) {

			if( playerTurn ) {

				$(this).addClass('reddy').css('background-color', 'red');

				
				alert("It is Blue's turn!");

			} else {

				$(this).addClass('bluey').css('background-color', 'blue');

				alert("It is red's turn!");
			}
	
		playerTurn = !playerTurn;


	};


};

		^									^
		
======================================================
THIS ALL WORKED IMMEDIATELY SO I FIGURED I COULD BUILD OFF THIS 
					
	^				WHEN I MODIFY IT LATER. 		^
======================================================


							=====

			|				 NOW 				|
			V  									V
							=====


	I AM AT THE GAME FUNCTION STAGE OF MY CODING PROCESS

		 
	SO I TRIED THE CLICK FUNCTION AGAIN BUT IT WAS NOT WORKING ANYMORE.

		



		 				| 	| 	| 	| 	|
		 				V 	V 	V 	V 	V

			=========================================

					MY NEW LOOP STRUCTURE:  

			=========================================


				  	    |  	 |    |    
					    V    V    V   


	for (var i = 0; i < 7; i++) {	

				var $columns = $('<div>');

				$columns.addClass('columns');

				$container.append($columns);
				// console.log($columns);




			
			}
			

			for (var j = 0; j < 6; j++) {

				var $pieces = $('<div>');

				$pieces.addClass('piecesbyrows');

				$columns.append($pieces);

				
				// $columns.click(function(game);
			


			};

	

}

 
var game = function() {




				I THOUGHT MAYBE IT WAS A SCOPING ISSUE THAT WAS CONFLICTING WITH
				THE CLICK FUNCTION 

				SO I TRIED THE ORIGINAL CODE AGAIN AND THAT WAS NOT WORKING EITHER

				NOW I NEED TO FIGURE OUT IF I SHOULD USE A DIFFERENT SYNTAX FOR THE
				CLICK EVENT.  MAYBE IT HAS TO DO WITH THE LISTENER.  

				I NEED TO READ ABOUT THAT MORE.

				STILL KIND OF STUCK ON WHY THIS ISNT WORKING.

				VERY BIZZARE 





=================================================================================




				   =======================================

						AFTER I TRIED THE NEW SYNTAX

							
							on('click', game() {

									})

		============================================================


							| 	| 	| 	| 	|
		 					V 	V 	V 	V 	V




		I closed the loops and moved the columns click event outside

		
		I also changed the syntax because API.jQuery had a couple ways of doing this

		
		AND then I put the game function inside of the columns/click function 


		 After I do this, the computer keeps sending syntax errors about unexpected 

		  '}' or ')' in regards to the on.click() function not being closed.  

		I was closing it any where just to see it it would work at all but 

		I kept getting the same error.


		

					======= CONFUSION  ======





$columns.on('click', game() {
			
 
	var game = function() {


		if (!$(this).hasClass('reddy' || 'bluey')) {
 
			if( playerTurn ) {

				
				$(this).addClass('reddy').css('background-color', 'red');

				alert("It is Blue's turn!");

			} else {

				$(this).addClass('bluey').css('background-color', 'blue');

				alert("It is red's turn!");
			}

			playerTurn = !playerTurn;

		};


	});



 


 				=========================================================

 									NEW APPROACH

 				=========================================================



 				So I console logged what I had on line 112 in my JS file

 				I was hoping to get the 6 divs in an array

 				It did show them but it only showed them with the class "pieces"

 				I wanted it to show the class "empty" as well

 				Since I only used the class "pieces" as a way to style the circles,

 				I just removed that class and did:

 					.columns > div

 						 -This was able to do the same thing that I did using .pieces

 						 -Now the console shows the divs with the class of "empty",

 						 which I care about more




 						 ========================
 						 THIS IS MY CURRENT ISSUE
 						 ========================

 						  	| 	| 	| 	|	|
		 					V 	V 	V 	V 	V



$('#column1').click(function() {

	


		
		// i > 0 (cause it can’t check for non-existant divs)
		// i-- (so it’s checking the next free div from the BOTTOM up)

		for (var i = 5; i >= 0; i--) {


			var $eachOfSix = $(this).children();


				if( playerTurn ) {

                    ($eachOfSix).addClass('reddy').css('background-color', 'red');

                    alert("It is Blue's turn!");

                    } 

                    	 ========================
 					IF I USE THIS CODE, IT WORKS EXCEPT 
 				    WHEN I CLICK ON THE COLUMN, IT SELECTS ALL
 					6 SPACES AND SENDS THE ALERT 6 DIFFERENT TIMES.

 					THIS IS OBVIOUSLY BECAUSE OF THE LOOP.

 						 ==========================



 						 	==========================

 						 SO TO TRY AND FIX THIS, I WAS ADDING [i]

 						 AND USING AN IF STATEMENT INSIDE OF THE

 						  if( playerTurn ) IN ORDER TO 

 						  TARGET THE DIVs THAT HAVE 

 						  	 A CLASS OF .EMPTY

 						 	========================


 						  	| 	| 	| 	|	|
		 					V 	V 	V 	V 	V

               if ($(eachOfSix).hasClass('empty')) {


                    	---THEN I HAD THE CONDITIONS INSIDE---
                    			| 	| 	| 	|	|
		 						V 	V 	V 	V 	V

                    ($eachOfSix).addClass('reddy').css('background-color', 'red');

                    alert("It is Blue's turn!");

                    } 

			}


						THE SAME RESULT HAPPENED SO I FIGURE THAT 
						I NEEDED TO PUT IN [i] SOMEWHERE WITH THE 
						$eachOfSix VARIABLE BUT THIS CAUSES AN
						ERROR EVERYTIME:

						 $eachOfSix IS UNDEFINED

								OR

						IS NOT A FUNCTION


					BEEN STUCK ON THIS FOR HOURS 





						========================

								HUZZAH!!!

						FORGET LOOPS AND CREATING 

						NEW VARIABLES.  STICKING

						WITH 'THIS'

						========================
						

			if( playerTurn ) {

                $(this).children('.empty:last').removeClass().addClass('reddy').css('background', 'red');

                    alert("It is Blue's turn!");

                    } else {

                    	$(this).children('.empty:last').removeClass().addClass('bluey').css('background', 'blue');
                    
                    	alert("It is red's turn!");
                   
                    }
                    	playerTurn = !playerTurn;





				============================

			SO I DID SOME SEARCHING ONLINE AND 
			STUMBLED ACROSS SOMETHING CALLED DATA TYPES
			THAT YOU CAN CUSTOMIZE.  THESE CAN BE USED 
			AS HTML ELEMENT ATTRIBUTES THAT ARE NON
			SEMANTIC.  I USED THAT TO MAKE VALUES 
			FOR EACH DIRECTION.  I HAD TO DRAW MY GAME 
			ON A PIECE OF PAPER TO MAKE IT EASIER TO 
			PLAN OUT.  

			FOR EXAMPLE, FOR MEASURING THE VERTICAL WINS, I WROTE DATA-VERTICAL = "1" AND DATA VERTICAL ="2" FOR THE SECOND COLUMN NEXT TO THE INNER DIV CLASSES SO THEY LOOK LIKE CLASSES/ID'S.  EVERYTHING WITH THE SAME NUMBER SHOULD MAKE IT SO IT DRAWS AN IMAGINARY LINE VERTICALLY.  KIND OF LIKE MAPPING OUT A GRID.  

				============================

for(i=0; i<7; i++){
checkWin(i, 'vertical');
// checkWin(i, 'horizontal');
// checkWin(i, 'diagonalup');
// checkWin(i, 'diagonaldown');
}


var checkWin = function( i, direction)




=======================================

STILL MESSING AROUND WITH THIS

======================================

var checkWin = function( i, direction ){

$("div[data-" + vertical + "]").each(function(){

	for(i=0; i<7; i++){

// The equality operator converts the operands if they are not of the same type, 
// then applies strict comparison. If both operands are objects, 
// then JavaScript compares internal references 
// which are equal when operands refer to the same object in memory.

		if( $(this).children().hasClass('.reddy' || '.bluey').data(vertical) == i){
		//see if there are four in a row with same color class
		alert('WINNER');


