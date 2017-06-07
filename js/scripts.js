
$(document).on("submit", "form#word-input", function(){
  event.preventDefault();
  var str = $("#input-word").val();
  var vowel = "aeiouq";
  var match = -1;
  var index = -1;
  var indexQ

  // find index of first vowel
  for (var x = 0; x < str.length && match < 0; x++) {
    match = vowel.indexOf(str.charAt(x));
    if (match >= 0) {
      index = x;
      indexQ = index + 2;
    }
  }
  if (str.charAt(index) === 'q'){
    str = str.slice(indexQ)  + str.substring(0, indexQ) +  "ay";
  } else if (index > 0) {
    str = str.slice(index) + str.substring(0, index) + "ay";
  } else {
    str = str.slice(index) + str.substring(0, index) + "way";
  }
  $("#output").empty();
  $("#output").append("<h3 id='pig-word'>"+str+"</h3>");
});
