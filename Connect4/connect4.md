
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

2 nested loops.

	1. making 7 columns

		a. and one iterating over the columns '6' times so it will create 6 
		divs for every 7 times the parent creates a column.


THE REST CONTINUES ON THE CONNECT 5 READ ME
