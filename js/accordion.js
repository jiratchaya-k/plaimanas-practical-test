const accordionItem = document.getElementsByClassName("accordion-item");

for (let i = 0; i < accordionItem.length; i++) {
  accordionItem[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
