// B. L.

var sentencePrep = function (sent) {
  var wordArray = sent.split(' ');
  var pLSentence = wordArray.map(function(word) {
    return translator(word);
  });
  console.log(pLSentence);
};


var translator = function (userWord) {
  var strippedWord = userWord.replace(/[\d]+[\W]+/, '');

  if (strippedWord.match(/^[q]/)) {
    var firstQu = strippedWord.substr(0, 2);
    var quRem = strippedWord.substr(2);
    var quStr = quRem.concat([firstQu + 'ay']);
    return quStr;

  } else if (strippedWord.match(/^[aeiou]/)) {
    var vowelStr = strippedWord.concat(['way']);
    return vowelStr;

  } else if (strippedWord.match(/^[^aeiou]/)) {
    var firstCon = strippedWord.substr(0, 1);
    var strRem = strippedWord.substr(1);
    var conStr = strRem.concat([firstCon + 'ay']);
    return conStr;
  }
};



// U.I.

$(document).ready(function() {
  $('form#pLTrans').submit(function(event) {
    event.preventDefault();
    var origWord = $('input#engSent').val()
    var pigLatinWord = sentencePrep(origWord);

    $('#final').text(pigLatinWord);
  });// Submit Button

});// Document ready function
