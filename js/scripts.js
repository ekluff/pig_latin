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
  return ordway;g
};


$(document).ready(function() {
  $("form#ormfay").submit(function(event) {
    var input = $("input#word").val();
    var ordway = pigLatin(input);

    $("#title").text("Igpay Atinlay Anslatortray");
    $("#label").text("Anslatetray aay ordway intoay igpay atinlay.");
    $("#button").text("Anslatetray!");

    $("#ordway").text(ordway);
    alert(ordway);
    $("#ordway").show();
    event.preventDefault();
  });
});
