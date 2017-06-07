
$(document).on("submit", "form#word-input", function(){
  event.preventDefault();
  //create variables to be used in function
  var str = $("#input-word").val();
  var pigStr = "";
  var ogStrArray = str.split(" ");
  var newStrArray = [];
  var vowel = "aeiouq";
  var match = -1;
  var index = -1;
  var indexQ;
  //iterate through array and capture the value of the index
  //of the first vowel and differentiate if it is a q
  ogStrArray.forEach(function(element) {
    for (var x = 0; x < element.length && match < 0; x++) {
      match = vowel.indexOf(element.charAt(x));
      if (match >= 0) {
        index = x;
        indexQ = index + 2;
      }
    }
    //process the word based on the vowel captured and its index
    if (element.charAt(index) === 'q'){
      element = element.slice(indexQ)  + element.substring(0, indexQ) +  "ay";
    } else if (index > 0) {
      element = element.slice(index) + element.substring(0, index) + "ay";
    } else {
      element = element.slice(index) + element.substring(0, index) + "way";
    }
    //reset match so it will run cleanly for next array item
    match = -1;
    //push processed elements to new array
    newStrArray.push(element);
  });
  //turn new array into a string and output it into the div with an id of "output"
  pigStr = newStrArray.join(" ");
  $("#output").empty();
  $("#output").append("<h3 id='pig-word'>"+pigStr+"</h3>");
});
