var pigLatin  = function (word) {
  var splitWord = [];
  splitWord = word.split('');
  var splitWordSlice = splitWord.slice();

  var vowels = ['a', 'e', 'i', 'o', 'u'];

  i = null;
  for (i=0; i<vowels.length; i++) {
    if (splitWord[0] === vowels[i]) {
      splitWordSlice.push('a', 'y')
    };
  };

  var ordway = splitWordSlice.join('');
  return ordway;

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
