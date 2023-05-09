const reservationForm = document.getElementById("reservation-form");
const reservationConfirmation = document.getElementById("reservation-confirmation");

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const partySize = document.getElementById("party-size").value;

  reservationConfirmation.innerText = `Merci ${name} pour votre réservation pour ${partySize} personnes le ${date} à ${time}. Nous vous enverrons un email de confirmation à ${email}.`;
  reservationForm.reset();
});