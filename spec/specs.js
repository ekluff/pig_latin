describe('pigLatin', function() {
  it('splits a word into an array of letters', function() {
    expect(pigLatin('tacocat')).to.eql(['t','a','c','o','c','a','t']);
  });

  it("adds 'ay' to the end of words that start with vowels", function() {
    expect(pigLatin('aptitude')).to.eql("aptitudeay");
  });

  it('moves all the consonants and "qu" to the end of a word and adds "ay"', function() {
    expect(pigLatin('quiet')).to.eql('ietquay');
  });

});


// it('splits a sentence into an array of words', function() {
//   expect(pigLatin('Taco Cat')).to.eql(['Taco', 'Cat']);
// });
