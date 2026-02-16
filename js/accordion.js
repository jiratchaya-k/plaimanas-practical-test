const accordionItem = document.getElementsByClassName("accordion-item");

$(document).ready(() => {
  for (let i = 0; i < accordionItem.length; i++) {
    const currAccordion = accordionItem[i];

    handleAccordionItemHeight(currAccordion);

    $(currAccordion).click(() => {
      currAccordion.classList.toggle("active");
      handleAccordionItemHeight(currAccordion);
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
