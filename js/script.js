const getItem = function (item){
    return document.querySelector(item)
}

const textToNumber = function (item){
   return parseFloat(item.innerText)
}

const blogBtn = getItem('.losit');
const donation = getItem('.donation')
const history = getItem('.history')
const mainPortion = getItem('.main-portion')
const historyPortion = getItem('.history-portion')

const noakhaliDonate = getItem('.noakhali-donation')
const noakhaliInput = getItem('.noakhali-input')
const feniDonate = getItem('.feni-donation')
const quotaDonate = getItem('.quota-donation')

const noakhaliSubmit = getItem('.noakhali-submit')
const feniSubmit = getItem('.feni-submit')
const quotaSubmit = getItem('.quota-submit')


const totalBudget = getItem('.total-budget')
const cards = document.querySelectorAll('.card-holder')

blogBtn.addEventListener ('click', function(){
    window.location = './blog.html';
})

donation.addEventListener('click', function(e) {

    history.classList.remove('colorcode'); 
    mainPortion.classList.remove('hidden')
    historyPortion.classList.add("hidden")
    e.target.classList.add('colorcode');    
});

history.addEventListener('click', function(e) {

    donation.classList.remove('colorcode'); 
    mainPortion.classList.add('hidden')
    historyPortion.classList.remove("hidden")
    e.target.classList.add('colorcode');     

});




noakhaliSubmit.addEventListener('click',function(e){

    const updatePrice  = textToNumber(totalBudget) - (+noakhaliInput.value)
    const donatePrice  = textToNumber(noakhaliDonate) 
    totalBudget.innerText = updatePrice;
    noakhaliDonate.innerText = donatePrice + (+noakhaliInput.value);
    const newElement = document.createElement('div')
    const html = `<div class="history-card px-4 py-6 border rounded-lg mb-8">
    <h3 class="text-xl font-bold mb-3">
     ${+noakhaliInput.value} Taka is Donated for famine-2024 at Noakhali, Bangladesh
    </h3>
    <p>
      Date : ${new Date().toString()}
    </p>
  </div>`
    newElement.innerHTML=html
   historyPortion.appendChild(newElement)

})




