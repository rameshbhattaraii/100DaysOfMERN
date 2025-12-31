const form = document.getElementById("bookingForm");
const paymentBox = document.getElementById("paymentBox");
const successMsg = document.getElementById("successMsg");
const amountText = document.getElementById("amount");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const servicePrice = document.getElementById("service").value;
  amountText.innerText = servicePrice;

  paymentBox.classList.remove("hidden");
});

function confirmPayment() {
  const bookingData = {
    name: document.getElementById("name").value,
    dob: document.getElementById("dob").value,
    time: document.getElementById("time").value,
    place: document.getElementById("place").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    transactionCode: document.getElementById("trCode").value
  };

  fetch("http://localhost:5000/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookingData)
  })
  .then(res => res.json())
  .then(data => {
    paymentBox.classList.add("hidden");
    successMsg.classList.remove("hidden");
    console.log("Saved to DB:", data);
  })
  .catch(err => {
    alert("Payment failed. Please try again.");
    console.error(err);
  });
}