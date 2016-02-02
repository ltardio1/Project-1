$(function() {

// window.onload = function() {




// 	-grab the add button for player 1
	$addFirst = $('#submit1');
	// console.log($addButton);

	// grab the button for player 2
	$addSecond = $('#submit2');




	// So I can control the box where player 1's name will be 
	$value1 = $('#input-box1');
	// console.log($inputValue);

	$value2 = $('#input-box2');

  


	$player1 = $('#player1');
	// console.log($todoListDiv);

	$player2 = $('#player2');



	
	$addFirst.click(function() {

	
		$name1 = $('<p>');
		
		// so i can move the typed input value 
		$name1.html($value1.val()); 
		
		$player1.append($name1);
		
		// console.log($player1);

	});



// making a separate click function for player 2's add button 
	// and add their name to the player 2 list
	$addSecond.click(function() {

		// making a variable fo the list items equal to the <p> tags surrounding them
		// This will let me access the $listItems by accessing the <p> tag
		$name2 = $('<p>');
		
		// so i can move the typed input value 
		$name2.html($value2.val()); 
		
		$player2.append($name2);
		
		// console.log($player2);


});









var playerTurn = true;


$container = ('#container');

$columns = ('.columns')

$column1 = ('#column1');

$column2 = ('#column2');
$column3 = ('#column3');
$column4 = ('#column4');
$column5 = ('#column5');
$column6 = ('#column6');
$column7 = ('#column7');

$pieces = ('.pieces');




							// ==================
							// 		COLUMN 1
							// ==================




$('#column1').click(function() {
		

                if( playerTurn ) {

                	// for (var i = 5; i >= 0; i--) {
                	$(this).children('.empty:last').removeClass().addClass('morty').css('background-image', 'url(http://i.imgur.com/6zInXBr.png)');

                	// if( ($eachOfSix).hasClass('empty') ) {

                    // ($eachOfSix).addClass('reddy').css('background-color', 'red');

                    alert("It is Rick's turn!");

                    } else {

                    	$(this).children('.empty:last').removeClass().addClass('rick').css('background-image', 'url(http://i.imgur.com/X2h7PfT.png)');
                    
                    	alert("It is Morty's turn!");
                   
                    }
                    	playerTurn = !playerTurn;

                    	
                    	checkVert(1, 'vertical');
						checkHor1(6, 'horizontal');
						checkHor2(5, 'horizontal');
						checkHor3(4, 'horizontal');
						checkHor4(3, 'horizontal');
						checkHor5(2, 'horizontal');
						checkHor6(1, 'horizontal');
                    	checkDiagDown3(10, 'diagonaldown');
                    	checkDiagDown2(9, 'diagonaldown');
                    	checkDiagDown1(8, 'diagonaldown');
						

						// checkWin(i, 'diagonalup');
						// checkWin(i, 'diagonaldown');
                    
	});	
	// end of click function

		



							// ==================
							// 		COLUMN 2
							// ==================




$('#column2').click(function() {
		

                if( playerTurn ) {

                	// for (var i = 5; i >= 0; i--) {
                	$(this).children('.empty:last').removeClass().addClass('morty').css('background-image', 'url(http://i.imgur.com/6zInXBr.png)');

                	// if( ($eachOfSix).hasClass('empty') ) {

                    // ($eachOfSix).addClass('reddy').css('background-color', 'red');

                    alert("It is Rick's turn!");

                    } else {

                    	$(this).children('.empty:last').removeClass().addClass('rick').css('background-image', 'url(http://i.imgur.com/X2h7PfT.png)');
                    
                    	alert("It is Morty's turn!");
                   
                    }
                    	playerTurn = !playerTurn;

                    	checkVert(2, 'vertical');
                    	checkHor1(6, 'horizontal');
                    	checkHor2(5, 'horizontal');
                    	checkHor3(4, 'horizontal');
                    	checkHor4(3, 'horizontal');
                    	checkHor5(2, 'horizontal');
                    	checkHor6(1, 'horizontal');
                    	checkDiagDown4(11, 'diagonaldown');
                    	checkDiagDown3(10, 'diagonaldown');
                    	checkDiagDown2(9, 'diagonaldown');
                    	checkDiagDown1(8, 'diagonaldown');
                    	


	});	
	// end of click function





							// ==================
							// 		COLUMN 3
							// ==================





$('#column3').click(function() {
		

                if( playerTurn ) {

                	// for (var i = 5; i >= 0; i--) {
                	$(this).children('.empty:last').removeClass().addClass('morty').css('background-image', 'url(http://i.imgur.com/6zInXBr.png)');

                	// if( ($eachOfSix).hasClass('empty') ) {

                    // ($eachOfSix).addClass('reddy').css('background-color', 'red');

                    alert("It is Rick's turn!");

                    } else {

                    	$(this).children('.empty:last').removeClass().addClass('rick').css('background-image', 'url(http://i.imgur.com/X2h7PfT.png)');
                    
                    	alert("It is Morty's turn!");
                   
                    }
                    	playerTurn = !playerTurn;

                    	checkVert(3, 'vertical');
                    	checkHor1(6, 'horizontal');
                    	checkHor2(5, 'horizontal');
                    	checkHor3(4, 'horizontal');
                    	checkHor4(3, 'horizontal');
                    	checkHor5(2, 'horizontal');
                    	checkHor6(1, 'horizontal');
                    	checkDiagDown5(12, 'diagonaldown');
                    	checkDiagDown4(11, 'diagonaldown');
                    	checkDiagDown3(10, 'diagonaldown');
                    	checkDiagDown2(9, 'diagonaldown');
                    	checkDiagDown1(8, 'diagonaldown');
                    	
                    	
                    	
                    	

	});	
	// end of click function

	



							// ==================
							// 		COLUMN 4
							// ==================





$('#column4').click(function() {
		

                if( playerTurn ) {

                	// for (var i = 5; i >= 0; i--) {
                	$(this).children('.empty:last').removeClass().addClass('morty').css('background-image', 'url(http://i.imgur.com/6zInXBr.png)');

                	// if( ($eachOfSix).hasClass('empty') ) {

                    // ($eachOfSix).addClass('reddy').css('background-color', 'red');

                    alert("It is Rick's turn!");

                    } else {

                    	$(this).children('.empty:last').removeClass().addClass('rick').css('background-image', 'url(http://i.imgur.com/X2h7PfT.png)');
                    
                    	alert("It is Morty's turn!");
                   
                    }
                    	playerTurn = !playerTurn;

                    	checkVert(4, 'vertical');
                    	checkHor1(6, 'horizontal');                   	
                    	checkHor2(5, 'horizontal');
                    	checkHor3(4, 'horizontal');
                    	checkHor4(3, 'horizontal');
                    	checkHor5(2, 'horizontal');
                    	checkHor6(1, 'horizontal');
                    	checkDiagDown4(11, 'diagonaldown');
                    	checkDiagDown3(12, 'diagonaldown');
                    	checkDiagDown2(13, 'diagonaldown');
	});	
	// end of click function






							// ==================
							// 		COLUMN 5
							// ==================





$('#column5').click(function() {
		

                if( playerTurn ) {

                	// for (var i = 5; i >= 0; i--) {
                	$(this).children('.empty:last').removeClass().addClass('morty').css('background-image', 'url(http://i.imgur.com/6zInXBr.png)');

                	// if( ($eachOfSix).hasClass('empty') ) {

                    // ($eachOfSix).addClass('reddy').css('background-color', 'red');

                    alert("It is Rick's turn!");

                    } else {

                    	$(this).children('.empty:last').removeClass().addClass('rick').css('background-image', 'url(http://i.imgur.com/X2h7PfT.png)');
                    
                    	alert("It is Morty's turn!");
                   
                    }
                    	playerTurn = !playerTurn;

                    	checkVert(5, 'vertical');
                    	checkHor1(6, 'horizontal');                   
                    	checkHor2(5, 'horizontal');
                    	checkHor3(4, 'horizontal');
                    	checkHor4(3, 'horizontal');
                    	checkHor5(2, 'horizontal');
                    	checkHor6(1, 'horizontal');                   	
                    	checkDiagDown6(13, 'diagonaldown');
                    	checkDiagDown5(12, 'diagonaldown');
                    	checkDiagDown4(11, 'diagonaldown');
                    	checkDiagDown3(10, 'diagonaldown');
                    	checkDiagDown2(9, 'diagonaldown');

	});	
	// end of click function





							// ==================
							// 		COLUMN 6
							// ==================




$('#column6').click(function() {
		

                if( playerTurn ) {

                	// for (var i = 5; i >= 0; i--) {
                	$(this).children('.empty:last').removeClass().addClass('morty').css('background-image', 'url(http://i.imgur.com/6zInXBr.png)');

                	// if( ($eachOfSix).hasClass('empty') ) {

                    // ($eachOfSix).addClass('reddy').css('background-color', 'red');

                    alert("It is Rick's turn!");

                    } else {

                    	$(this).children('.empty:last').removeClass().addClass('rick').css('background-image', 'url(http://i.imgur.com/X2h7PfT.png)');
                    
                    	alert("It is Morty's turn!");
                   
                    }
                    	playerTurn = !playerTurn;

                    	checkVert(6, 'vertical');
                    	checkHor1(6, 'horizontal');
                    	checkHor2(5, 'horizontal');
                    	checkHor3(4, 'horizontal');
                    	checkHor4(3, 'horizontal');
                    	checkHor5(2, 'horizontal');
                    	checkHor6(1, 'horizontal');
                    	checkDiagDown6(13, 'diagonaldown');
                    	checkDiagDown5(12, 'diagonaldown');
                    	checkDiagDown4(11, 'diagonaldown');
                    	checkDiagDown3(10, 'diagonaldown');

	});	
	// end of click function

		



							// ==================
							// 		COLUMN 7
							// ==================



$('#column7').click(function() {
		

                if( playerTurn ) {

                	// for (var i = 5; i >= 0; i--) {
                	$(this).children('.empty:last').removeClass().addClass('morty').css('background-image', 'url(http://imgur.com/6zInXBr.png)');

                	// if( ($eachOfSix).hasClass('empty') ) {

                    // ($eachOfSix).addClass('reddy').css('background-color', 'red');

                    alert("It is Rick's turn!");
                    

                    } else {

                    	$(this).children('.empty:last').removeClass().addClass('rick').css('background-image', 'url(http://imgur.com/X2h7PfT.png)');
                    
                    	alert("It is Morty's turn!");
                   
                    }
                    	playerTurn = !playerTurn;

                    	// looping over each column
                    	// for(i=0; i<7; i++){
                    	checkVert(7, 'vertical');
                    	checkHor1(6, 'horizontal');
                    	checkHor2(5, 'horizontal');
                    	checkHor3(4, 'horizontal');
                    	checkHor4(3, 'horizontal');
                    	checkHor5(2, 'horizontal');
                    	checkHor6(1, 'horizontal');

                  });
	// end of click function


                    // ========================================

					// NOW TO MAKE CHECK FOR WINNER FUNCTIONS

					// ========================================
                    


// for(i=0; i<7; i++){
// checkWin(i, 'vertical');
// checkWin(i, 'horizontal');
// checkWin(i, 'diagonalup');
// checkWin(i, 'diagonaldown');
// }
	
// // The equality operator converts the operands if they are not of the same type, 
// // then applies strict comparison. If both operands are objects, 
// // then JavaScript compares internal references 
// // which are equal when operands refer to the same object in memory.


	



var checkVert= function( i, direction){

	//This will be used to keep track of how many there are in a row
	var count = 0;

	//This will keep track of what the last piece was
	var current = '';


	 // So I can iterate through divs with direction set to i, 
	 // something like this?? I think $("div[data-vertical=0]")
	//  so I don't need to write vertical after "data-" because 
	//  direction is the parameter for the functionand this allows me to 
	//  write this function out once as long as i put: 
	//  checkWin(i, 'vertical');
	// checkWin(i, 'horizontal');
	// checkWin(i, 'diagonalup');
	// checkWin(i, 'diagonaldown');
	// inside of each column's click event

	$("div[data-" + direction + "=" + i + "]").each(function(){ 


	//Making variables for each class to see if there are four in a row 
	// with same color class.  This makes sence to I don't have to repeat this
	// method.  I was having trouble figuring out how many times I would have to write
	// it out so this makes it a little easier
	var morty = $(this).hasClass('morty');
	var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){


	 		// and the last one was morty too,
	 		// using the variable I made to keep track of last piece.
	 		// Since the variable is an empty string, 
	 		// I can use it to check multiple values, like class names,
	 		// 'rick' or 'morty' 

	// =====================================================================
						// SOME READING I DID ON ==

	 		// http://www.2ality.com/2011/12/strict-equality-exemptions.html
	 	// 	Case 1: You know what you are comparing with
			// For example, with the typeof operator [2], you can be sure that the result will be a string. Then == is safe to use, because we can be sure that it won’t perform any conversion shenanigans:
	  //   	if (typeof x == "function") {
	        
	  //   }
	  // ===============================================================

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);

				// tried to make a click function 
				// so you can click on the image to replay the game
// 				$('celebrate').click(function() {

// 				location.reload()
// });
				





			// something extra i am doing to show that i am putting in extra reps
			// going to remove the column class that is constricting the 
			// inner divs so i can set them free and animate them in css 
			// $columns = $('.columns');

			// $(columns).removeClass('columns').addClass('placeholder');

			// $(columns).children().removeClass('rick').removeClass('morty').addClass('fuckyea').attr('background-image', 'url(http://i.imgur.com/6A4DSL3.png)');

// };

			
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

}
	

	});
	// closing each function
}
 

// ====================================================================
// var checkWin = function(i, direction){

	// for (var i = 6; i>0; i--) {

		// Use each: 'i' is the postion in the array, obj is the DOM object that you are iterating 
		// (can be accessed through the jQuery wrapper $(this) as well).
			// $('.reddy').each(function)

		// different method
			// if($(this).hasClass('.reddy')  )

	// };

// =======================================================================



	




var checkHor1 = function(i, direction) {

		var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate2 = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

	}

	});
	// closing each function
}




							

var checkHor2 = function(i, direction) {

		var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate2 = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

	}

	});
	// closing each function
}




var checkHor3 = function(i, direction) {

		var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;


				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 


	// checking if either of the player counts is equal to 4
	if( count == 4 ){

		alert('WINNER');

	}

	});
	// closing each function
}


					

var checkHor4 = function(i, direction) {

				var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate2 = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

	}

	});
	// closing each function
}





var checkHor5 = function(i, direction) {

				var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate2 = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

	}

	});
	// closing each function
}




var checkHor6 = function(i, direction) {

			var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate2 = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

	}

	});
	// closing each function
}





var checkDiagDown1 = function(i, direction) {

				var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate2 = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

	}

	});
	// closing each function
}


var checkDiagDown2 = function(i, direction) {

				var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate2 = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

	}

	});
	// closing each function
}

var checkDiagDown2 = function(i, direction) {

				var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate2 = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

	}

	});
	// closing each function
}

var checkDiagDown3 = function(i, direction) {

				var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate2 = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

	}

	});
	// closing each function
}

var checkDiagDown4 = function(i, direction) {

				var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate2 = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

	}

	});
	// closing each function
}

var checkDiagDown5 = function(i, direction) {

				var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate2 = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

	}

	});
	// closing each function
}

var checkDiagDown6 = function(i, direction) {

				var count = 0;

		//This will keep track of what the last piece was
		var current = '';

	$("div[data-" + direction + "=" + i + "]").each(function(){ 

		var morty = $(this).hasClass('morty');
		var rick = $(this).hasClass('rick');


	//if this space is morty 
	if( morty ){

	  		// SO WE USE == TO MAKE SURE WE ARE NOT MAKING ANY CHANGES BECAUSE WE ARE
	  		// JUST CHECKING TO SEE IF THERE IS A MATCH
			if( current == 'morty' ){

				// then we can increase the number of the count of the same class in a row	
				// begins the counting interval to check for 4 in a row	
				count++;
				if( count == 4 ){
				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate2 = $('<div>').addClass('yeaman');

				$text = $('<p>').addClass('text');

				$text.text('MORTY TIME!!!');

				($celebrate).append($text);

				$('body').append($celebrate);

				//Otherwise, 
				} else {

				// we set the count to 1

				count = 1;

				}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'MORTY'
			current = 'morty';



		} else 

	// if this space is rick instead of morty
	if ( rick ){

			// do the same thing and check if the last piece in the column was rick as well
			if( current == 'rick' ){

			// if so, increase the count
			count++;
			// checking if either of the player counts is equal to 4
			if( count == 4 ){

				// stripping the page of all its contents 
				// so it is apparent that the game is over
				$container = $('#container');
				$('#container').empty();
				$columns = $('.columns');
				$('.columns').empty();
				$('body').empty();


				// Now I will replace the game contents with a pictur of Rick!
				// cuz he won
				$celebrate = $('<div>').addClass('fuckyea');

				$text = $('<p>').addClass('text');

				$text.text('RICK MUTHERF***');

				($celebrate).append($text);

				$('body').append($celebrate);
		

	}

			// otherwise,
			} else {

			// the count is just 1 meaning there are no matches
			count = 1;
			}

	// CONFIRMING THAT THE LAST PIECE WAS IN FACT 'RICK'
	current = 'rick';


	} 

	}

	});
	// closing each function
}




	});


// http://html5doctor.com/html5-custom-data-attributes/

	
