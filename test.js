document.getElementById('cars').addEventListener('change', function() {
  console.log('You selected: ', this.value);
  console.log(document.querySelector("div.sgds-card:not(" + this.value + ")"));
});
