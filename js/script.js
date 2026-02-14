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
    document.getElementById("logo").style.width = "25%";
  } else {
    document.getElementById("logo").style.width = "100%";
  }
});

document
  .querySelector(".collection-video")
  .addEventListener("mouseenter", () => {
    const collectionImg = document.querySelector(".collection-video img");
    collectionImg.style.opacity = "0";
    setTimeout(() => {
      collectionImg.style.display = "none";
    }, 100);
  });

document
  .querySelector(".collection-video")
  .addEventListener("mouseleave", () => {
    const collectionImg = document.querySelector(".collection-video img");
    collectionImg.style.display = "block";
    setTimeout(() => {
      collectionImg.style.opacity = "1";
    }, 100);
  });

document.querySelector(".collection-two").addEventListener("mouseenter", () => {
  collectionSlideOutAnim(".collection-two");
});

document.querySelector(".collection-two").addEventListener("mouseleave", () => {
  collectionSlideInAnim(".collection-two");
});

document
  .querySelector(".collection-three")
  .addEventListener("mouseenter", () => {
    collectionSlideOutAnim(".collection-three");
  });

document
  .querySelector(".collection-three")
  .addEventListener("mouseleave", () => {
    collectionSlideInAnim(".collection-three");
  });

const collectionSlideOutAnim = (parentClass) => {
  const collectionImgDefault = document.querySelector(
    `${parentClass} .collection-image-default`,
  );
  collectionImgDefault.style.animation = "slide-out 0.5s ease-in-out";
  setTimeout(() => {
    collectionImgDefault.style.display = "none";
  }, 500);
};

const collectionSlideInAnim = (parentClass) => {
  const collectionImgDefault = document.querySelector(
    `${parentClass} .collection-image-default`,
  );
  collectionImgDefault.style.display = "block";
  collectionImgDefault.style.animation = "slide-in 0.5s ease-in-out";
};
