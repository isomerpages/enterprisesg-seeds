document.getElementById('cars').addEventListener('change', function() {
  console.log('You selected: ', this.value);
  document.querySelectorAll("div.sgds-card:not(" + this.value + ")").forEach(function(el) {
    el.style.display = "none";
  });
});
