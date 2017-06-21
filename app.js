
// store the text input 
function textInput(){
	var input = $('.user-text').val();

	//var input = $(this).find('.user-text');
	//var inputText = input.val();
	//alert(inputText);
	//return inputText;

	 //$(".js-text-report").text('text input is: ' + input);
	 //$(".js-text-report").removeClass('hidden');
	 return input;
 
}

//Total word count
function wordCount(){
	//calling the text input function
	var text = textInput();
    return text.split(' ').length;
    //var result = text.split(' ').length;

}

//average word length
function avgWord(){
var text = textInput();
//remove all spaces in string
var sumofChar = text.replace(/\s+/g, '').length;

return (sumofChar/wordCount()).toFixed(0);
}


//unique word count
function uniqueWord(){

//text input value
var text = textInput();
//SOMETHING WRONG IN THIS ASSGINMENT. How to make each word an element in the array?
var currentNum = text.split(/[\s,\(\)]+/g);
//create a new array 
var newArray = [];
//loop through all the elements in the textInput results
for (var i=0; i < currentNum.length; i++){
	
//if there's not a match, put it in the new array
	if (newArray.indexOf(currentNum[i]) === -1) {

		newArray.push(currentNum[i]);
	}

}

return newArray.length;
}

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
	 $(".js-totalWord").text(wordCount());
	 $(".js-avgWord").text(avgWord());
	 $(".js-uniqueWord").text(uniqueWord());
	 //$(".js-avgWord").text(avgWord());
	 $(".js-text-report").removeClass('hidden');
	 console.log("hello world");
	
});
}


/*
function test(){
	$('.js-form').submit(function(e){
		e.preventDefault();
		var message = "this is amazing";
		alert(message);
	});
}
*/

//run the form submission
$(function() {
  formSubmission();
});

/*
$(function() {
  test();
});
*/
