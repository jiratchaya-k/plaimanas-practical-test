const handleOnActiveTab = (event, tabKey) => {
  const tabItems = document.querySelectorAll(".tab-item");
  tabItems.forEach((item) => {
    item.classList.remove("active");
  });

  event.currentTarget.className += " active";

  const accordionWrapper = document.querySelectorAll(".accordion-wrapper");
  accordionWrapper.forEach((accordion) => {
    if (accordion.id === tabKey) {
      accordion.classList.add("active");
    } else {
      accordion.classList.remove("active");
    }
  });
};
