document.getElementById('coy-choice').addEventListener('change', function() {
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
  if (document.querySelectorAll("div.sgds-card:not([style*='display: none;'])").length % 2 == 1) {
    var temp = document.createElement('div');
    temp.style = "flex: 1 1 47%;margin: 10px;"; 
    document.getElementById("companies-result").appendChild(temp);
  }
});
