var pigLatin  = function (word) {
  var splitWord = [];
  splitWord = word.split('');
  var splitWordSlice = splitWord.slice();

  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'qu', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
  i = null;

  if (vowels.indexOf(splitWordSlice[0]) >= 0) {
    splitWordSlice.push('a', 'y');
    // can this be combined with next else if with || logic
  } else {
    if ((splitWordSlice[0]) + (splitWordSlice[1]) === 'qu') {
      splitWordSlice.push(splitWordSlice.shift(), splitWordSlice.shift())
    } else {
      while (consonants.indexOf(splitWordSlice[0]) >= 0) {
        splitWordSlice.push(splitWordSlice.shift());
      };
    };
    splitWordSlice.push('a', 'y');

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
