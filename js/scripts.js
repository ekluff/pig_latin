var pigLatin  = function (word) {
  var result = [];
  return result = word.split('');



};

$(document).ready(function() {
  $("form#translate_word").submit(function(event) {
    var input = $("input#word").val();
    var result = pigLatin(word);

    $(".result").text(result);
    $(".result").show();
    event.preventDefault();
  });
});
