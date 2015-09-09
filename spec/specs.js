describe('pigLatin', function() {
  it('splits a word into an array of letters', function() {
    expect(pigLatin('tacocat')).to.eql(['t','a','c','o','c','a','t']);
  });
});


// it('splits a sentence into an array of words', function() {
//   expect(pigLatin('Taco Cat')).to.eql(['Taco', 'Cat']);
// });
