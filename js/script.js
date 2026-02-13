//handle language dropdown
document.getElementById("language").addEventListener("click", () => {
  const langOption = document.getElementById("lang-option");
  const langBtn = document.querySelector(".lang-btn");

  if (langOption.style.display === "block") {
    langBtn.style.opacity = "1";
    langOption.style.opacity = "0";
    setTimeout(() => {
      langOption.style.display = "none";
    }, 100);
  } else {
    langBtn.style.opacity = "0.5";
    langOption.style.display = "block";
    setTimeout(() => {
      langOption.style.opacity = "1";
    }, 100);
  }
});

document.getElementById("editorial-menu").addEventListener("mouseenter", () => {
  const editorialDropdown = document.querySelector(
    ".editorial-dropdown-container",
  );

  editorialDropdown.style.display = "flex";
  setTimeout(() => {
    editorialDropdown.style.opacity = "1";
  }, 100);
});

document
  .getElementById("editorial-dropdown")
  .addEventListener("mouseleave", () => {
    const editorialDropdown = document.querySelector(
      ".editorial-dropdown-container",
    );

    editorialDropdown.style.opacity = "0";
    setTimeout(() => {
      editorialDropdown.style.display = "none";
    }, 100);
  });

document.addEventListener("scroll", () => {
  const scrollYPos = window.scrollY;

  if (scrollYPos > 50) {
    document.getElementById("logo").style.width = "40%";
  } else {
    document.getElementById("logo").style.width = "100%";
  }
});
