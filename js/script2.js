const getItem2 = function (item) {
  return document.querySelector(item);
};

const faqHome = getItem2(".button-blog");

faqHome.addEventListener("click", function () {
  window.location.href = "./index.html";
});
