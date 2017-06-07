
$(document).on("submit", "form#word-input", function(){
  event.preventDefault();
  var str = $("#input-word").val();
  var pigStr = "";
  var ogStrArray = str.split(" ");
  var newStrArray = [];
  var vowel = "aeiouq";
  var match = -1;
  var index = -1;
  var indexQ;

  // find index of first vowel
    ogStrArray.forEach(function(element) {
    for (var x = 0; x < element.length && match < 0; x++) {
      match = vowel.indexOf(element.charAt(x));
      if (match >= 0) {
        index = x;
        indexQ = index + 2;
      }
    }
    if (element.charAt(index) === 'q'){
      element = element.slice(indexQ)  + element.substring(0, indexQ) +  "ay";
    } else if (index > 0) {
      element = element.slice(index) + element.substring(0, index) + "ay";
    } else {
      element = element.slice(index) + element.substring(0, index) + "way";
    }
    match = -1;
    newStrArray.push(element);
  });
  console.log(newStrArray);
  pigStr = newStrArray.join(" ");
  $("#output").empty();
  $("#output").append("<h3 id='pig-word'>"+pigStr+"</h3>");
});
