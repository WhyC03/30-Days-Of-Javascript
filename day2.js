function capitalizeFirstLetterOfEachWord(inputString) {
    var words = inputString.split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    var resultString = words.join(' ');
    return resultString;
  }

  
  var inputString = 'the quick brown fox';
  var outputString = capitalizeFirstLetterOfEachWord(inputString);
  console.log(outputString);
  