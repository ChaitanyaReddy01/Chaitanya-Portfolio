document.addEventListener("DOMContentLoaded", function () {
  let word = "Software Developer";
  let index = 0;
  let outputElement = document.getElementById("output");

  function typeLetterByLetter() {
      if (index < word.length) {
          outputElement.innerHTML += word[index];
          index++;
          setTimeout(typeLetterByLetter, 300); // Adjust speed by changing 300ms
      }
  }

  typeLetterByLetter();
});
