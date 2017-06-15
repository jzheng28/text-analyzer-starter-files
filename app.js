
//NEED TO FIGURE OUT HOW TO GET THIS TO WORK
// store the text input 
function textInput(){
	//var input = $('.user-text').val();

	var input = $(this).find('.user-text');
	var inputText = input.val();
	//alert(inputText);
	//return inputText;

	 $(".js-text-report").text('text input is: ' + inputText);
	 $(".js-text-report").removeClass('hidden');
 
}

//Total word count
function wordCount(){
	//calling the text input function
	var text = textInput();
    return text.split(' ').length;
}

//average word length
function avgWord(){
var text = textInput();
//remove all spaces in string
var sumofChar = text.replace(/\s+/g, '').length;

return (sumofChar/wordCount()).toFixed(0);
}


//unique word count

/*
//display form results
function formResults(){
	//assign above functions to variables to reference later
	var numWords = wordCount(val);
	var avgwordLength = avgWord(val);
	//display results
	var textReport = $('.js-text-report');
	textReport.find('.js-totalWord').text(numWords);
	textReport.find('.js-avgWord').text(avgwordLength);
	textReport.removeClass('hidden');
}

*/

//handle form submission 
function formSubmission(){
$('.js-form').submit(function(e){
	e.preventDefault();
	textInput();

	
});
}



function test(){
	$('.js-form').submit(function(e){
		e.preventDefault();
		var message = "this is amazing";
		alert(message);
	});
}


//run the form submission
$(function() {
  formSubmission();
});

/*
$(function() {
  test();
});
*/


	


	
