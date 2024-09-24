const getItem = function (item) {
  return document.querySelector(item);
};

const textToNumber = function (item) {
  return parseFloat(item.innerText);
};

const blogBtn = getItem(".blog-page");
const donation = getItem(".donation");
const history = getItem(".history");
const mainPortion = getItem(".main-portion");

const historyPortion = getItem(".history-portion");

const noakhaliDonate = getItem(".noakhali-donation");
const noakhaliSubmit = getItem(".noakhali-submit");
const noakhaliInput = getItem(".noakhali-input");

const feniDonate = getItem(".feni-donation");
const feniSubmit = getItem(".feni-submit");
const feniInput = getItem(".feni-input");

const quotaDonate = getItem(".quota-donation");
const quotaSubmit = getItem(".quota-submit");
const quotaInput = getItem(".quota-input");

const totalBudget = getItem(".total-budget");

blogBtn.addEventListener("click", function () {
  window.location.href = "./blog.html";
});

donation.addEventListener("click", function (e) {
  history.classList.remove("colorcode");
  mainPortion.classList.remove("hidden");
  historyPortion.classList.add("hidden");
  e.target.classList.add("colorcode");
});

history.addEventListener("click", function (e) {
  donation.classList.remove("colorcode");
  mainPortion.classList.add("hidden");
  historyPortion.classList.remove("hidden");
  e.target.classList.add("colorcode");
});

function helpDonation(placeInput, placeDonate, place) {
  const donationAmount = +placeInput.value;
  const currentBudget = textToNumber(totalBudget);

  if (donationAmount > currentBudget) {
    alert("Insufficient Balance. Please recharge Your Balance");
  } else if (typeof donationAmount === "number" && donationAmount > 0) {
    const updatedBudget = currentBudget - donationAmount;
    const donatedAmount = textToNumber(placeDonate);
    totalBudget.innerText = updatedBudget;
    placeDonate.innerText = donatedAmount + donationAmount;

    const div = document.createElement("div");
    const html = `<div class="history-card px-4 py-6 border rounded-lg mb-8">
            <h3 class="text-xl font-bold mb-3">
              ${donationAmount} Taka is Donated for Donate for Flood at ${place}, Bangladesh
            </h3>
            <p>
              Date : ${new Date().toString()}
            </p>
          </div>`;
    div.innerHTML = html;
    historyPortion.appendChild(div);

    showModal();
  } else {
    alert("Invalid Donation amount");
  }
}

noakhaliSubmit.addEventListener("click", function () {
  helpDonation(noakhaliInput, noakhaliDonate, "Noakhali");
});

feniSubmit.addEventListener("click", function () {
  helpDonation(feniInput, feniDonate, "Feni");
});

quotaSubmit.addEventListener("click", function () {
  helpDonation(quotaInput, quotaDonate, "Quota Movement");
});
