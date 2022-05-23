document.getElementById('cars').addEventListener('change', function() {
  console.log('You selected: ', this.value);
  var allcoysnotshown = document.querySelectorAll("div.sgds-card:not(" + this.value + ")")
  for (x in allcoysnotshown) {
    allcoysnotshown[x].style.display = "none"
  }
});
