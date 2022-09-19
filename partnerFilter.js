document.getElementById('partner-choice').addEventListener('change', function() {
  console.log('You selected: ', this.value);
  document.querySelectorAll("div.sgds-card").forEach(function(el) {
    el.style.display = "block";
  });
  if (this.value != "all") {
    document.querySelectorAll("div.sgds-card:not(div." + this.value + ")").forEach(function(el) {
      console.log(el)
      el.style.display = "none";
    });
  }
});

console.log("testing csv parse")

fetch('../CoInvPartner.csv')
  .then((response) => response.text())
  .then((data) => console.log(data));
