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
  paymentBox.classList.add("hidden");
  successMsg.classList.remove("hidden");

  // Here you can send booking info to backend (future)
  console.log("Payment confirmed (demo)");
}