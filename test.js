document.getElementById('cars').addEventListener('change', function() {
  console.log('You selected: ', this.value);
  document.querySelectorAll("div.sgds-card").forEach(function(el) {
    el.style.display = "block";
  });
  document.querySelectorAll("div.sgds-card:not(div." + this.value + ")").forEach(function(el) {
    console.log(el)
    el.style.display = "none";
  });
});
