'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });

  // add event in all select items
  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    const isMatch = selectedValue === "all" || selectedValue === item.dataset.category;
    item.classList.toggle("active", isMatch);
  });
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// contact form validation
const formInputs = document.querySelectorAll('[data-form-input]');
const submitBtn = document.querySelector('[data-form-btn]');

function validateForm() {
  let allFilled = true;
  formInputs.forEach(input => {
    if (!input.value.trim()) {
      allFilled = false;
    }
  });
  if (submitBtn) submitBtn.disabled = !allFilled;
}

formInputs.forEach(input => {
  input.addEventListener('input', validateForm);
});

// page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(navLink => {
  navLink.addEventListener("click", function () {
    const clickedPage = this.innerHTML.toLowerCase();

    pages.forEach((page, index) => {
      const isActive = clickedPage === page.dataset.page;
      page.classList.toggle("active", isActive);
      navigationLinks[index].classList.toggle("active", isActive);
    });

    window.scrollTo(0, 0);
  });

});
