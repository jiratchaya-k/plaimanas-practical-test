const onClickSubject = () => {
  const subjectDropdown = document.querySelector(".subject-dropdown");
  const dropdownArrow = document.querySelector(".dropdown-arrow");
  subjectDropdown.classList.toggle("open");
  dropdownArrow.classList.toggle("open");
};

const onClickDropdownItem = (event) => {
  event.preventDefault();
  const subjectDropdown = document.querySelector(".subject-dropdown");
  const subjectLabel = document.querySelector("label[for='subject']");
  const dropdownArrow = document.querySelector(".dropdown-arrow");
  const subjectInput = document.querySelector("input[name='subject']");
  subjectLabel.classList.add("inquiry-label");
  subjectInput.value = event.target.textContent.trim();
  subjectDropdown.classList.remove("open");
  dropdownArrow.classList.remove("open");
};
