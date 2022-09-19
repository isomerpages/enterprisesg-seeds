console.log("testing csv parse")

fetch('/CoInvPartner.csv')
  .then((response) => response.text())
  .then((data) => console.log(data));
