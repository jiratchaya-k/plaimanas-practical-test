const accordionItems = document.getElementsByClassName("accordion-item");

$(document).ready(() => {
  for (const accordion of accordionItems) {
    handleAccordionItemHeight(accordion);

    $(accordion).click(() => {
      accordion.classList.toggle("active");
      handleAccordionItemHeight(accordion);
    });
  }
});

const handleAccordionItemHeight = (element) => {
  const computedStyle = window.getComputedStyle(element);
  const contentGapValue = computedStyle.getPropertyValue("gap");
  const contentGap = Number(contentGapValue.replace("px", ""));
  const questionHeight =
    element.getElementsByClassName("accordion-question")[0].offsetHeight;
  const answerHeight =
    element.getElementsByClassName("accordion-answer")[0].offsetHeight;

  if (element.classList.contains("active")) {
    const contentHeight = questionHeight + contentGap + answerHeight;
    element.style.height = `${contentHeight}px`;
  } else {
    element.style.height = `${questionHeight}px`;
  }
};
