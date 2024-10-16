const displayText400 = () => {
  var course400 = document.getElementsByClassName("400level");
  for (var i = 0; i < course400.length; i++) {
    console.log(course400[i].textContent);
  }
};

displayText400();
