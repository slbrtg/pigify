//backend logic



//jQuery functionality
$(document).on("submit", "form#word-input", function(){
  event.preventDefault();

  var vowels = "aeiou";
  var pigWord = "";
  var str = $("#input-word").val();

  for (x = 0; x < str.length; x++){
    var letter = str.charAt(x);
  	for ( var y = 0; y < vowels.length; y++){
    	if (letter === vowels.charAt(y)){
      	letter = "-";
      }
    }
    pigWord += letter;
  }
  console.log(pigWord);



  $("#output").append("<h3 id='pig-word'>"+pigWord+"</h3>");
});


$(document).ready(function() {

});
