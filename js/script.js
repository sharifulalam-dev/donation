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
const cards = document.querySelectorAll(".card-holder");

blogBtn.addEventListener("click", function () {
  window.location = "./blog.html";
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

noakhaliSubmit.addEventListener("click", function (e) {
  if (+noakhaliInput.value > textToNumber(totalBudget)) {
    alert("Insufficient Balance");
  } else if (
    typeof +noakhaliInput.value === "number" &&
    +noakhaliInput.value > 0
  ) {
    const updatePrice = textToNumber(totalBudget) - +noakhaliInput.value;
    const donatePrice = textToNumber(noakhaliDonate);
    totalBudget.innerText = updatePrice;
    noakhaliDonate.innerText = donatePrice + +noakhaliInput.value;

    const div = document.createElement("div");
    const html = `<div class="history-card px-4 py-6 border rounded-lg mb-8">
        <h3 class="text-xl font-bold mb-3">
          ${+noakhaliInput.value} Taka is Donated for famine-2024 at Noakhali, Bangladesh
        </h3>
        <p>
          Date : ${new Date().toString()}
        </p>
      </div>`;
    div.innerHTML = html;
    historyPortion.appendChild(div);

    my_modal_1.showModal();
  } else {
    alert("Invalid Donation amount");
  }
});

feniSubmit.addEventListener("click", function (e) {
  if (+feniInput.value > textToNumber(totalBudget)) {
    alert("Insufficient Balance");
  } else if (typeof +feniInput.value === "number" && +feniInput.value > 0) {
    const updatePrice = textToNumber(totalBudget) - +feniInput.value;
    const donatePrice = textToNumber(feniDonate);
    totalBudget.innerText = updatePrice;
    feniDonate.innerText = donatePrice + +feniInput.value;
    const div = document.createElement("div");
    const html = `<div class="history-card px-4 py-6 border rounded-lg mb-8">
      <h3 class="text-xl font-bold mb-3">
       ${+feniInput.value} Taka is Donated for Donate for Flood at Feni, Bangladesh
      </h3>
      <p>
        Date : ${new Date().toString()}
      </p>
    </div>`;
    div.innerHTML = html;
    historyPortion.appendChild(div);
    my_modal_2.showModal();
  } else {
    alert("Invalid Donation amount");
  }
});

quotaSubmit.addEventListener("click", function (e) {
  if (+quotaInput.value > textToNumber(totalBudget)) {
    alert("Insufficient Balance");
  } else if (typeof +quotaInput.value === "number" && +quotaInput.value > 0) {
    const updatePrice = textToNumber(totalBudget) - +quotaInput.value;
    const donatePrice = textToNumber(quotaDonate);
    totalBudget.innerText = updatePrice;
    quotaDonate.innerText = donatePrice + +quotaInput.value;
    const div = document.createElement("div");
    const html = `<div class="history-card px-4 py-6 border rounded-lg mb-8">
      <h3 class="text-xl font-bold mb-3">
       ${+quotaInput.value} Taka is Donated for famine-2024 at Quota Movement, Bangladesh
      </h3>
      <p>
        Date : ${new Date().toString()}
      </p>
    </div>`;
    div.innerHTML = html;
    historyPortion.appendChild(div);
    my_modal_3.showModal();
  } else {
    alert("Invalid Donation amount");
  }
});
