fetch('/CoInvPartner.csv')
  .then((response) => response.text())
  .then((data) => console.log(data));
