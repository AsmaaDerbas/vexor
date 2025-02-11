

document.addEventListener("DOMContentLoaded", () => {
  const langSwitch = document.querySelector(".lang-switch");
  const langBtn = document.querySelector(".lang-btn");
  const langDropdown = document.querySelector(".lang-dropdown");

  langBtn.addEventListener("click", () => {
    langSwitch.classList.toggle("active");
  });

  langDropdown.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      const selectedLang = event.target.dataset.lang;
      langBtn.innerHTML = `<img src="icons/iconoir_language.svg" alt="Dropdown Icon" class="dropdown-icon"> ${selectedLang === "en" ? "En" : "Ar"}`;
      langSwitch.classList.remove("active");
      // Add logic here to change the language of the page
      console.log(`Language switched to: ${selectedLang}`);
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!langSwitch.contains(event.target)) {
      langSwitch.classList.remove("active");
    }
  });
});

// تبديل عرض القائمة المنسدلة
function toggleDropdown(dropdown) {
  const options = dropdown.nextElementSibling;
  options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

// تحديد الخيار
function selectOption(option) {
  const header = option.parentElement.previousElementSibling;
  header.textContent = option.textContent;
  option.parentElement.style.display = 'none'; // إخفاء القائمة
}

// إغلاق القوائم عند النقر خارجها
window.addEventListener('click', function (e) {
  document.querySelectorAll('.dropdown-options').forEach((options) => {
    if (!options.parentElement.contains(e.target)) {
      options.style.display = 'none';
    }
  });
});


// document.querySelectorAll('.image-container').forEach((container) => {
//   const images = container.querySelectorAll('.car-image');
//   const leftArrow = container.querySelector('.arrow-left');
//   const rightArrow = container.querySelector('.arrow-right');

//   let currentIndex = 0;

//   const updateActiveImage = () => {
//     images.forEach((img, index) => {
//       img.classList.toggle('active', index === currentIndex);
//     });
//   };

//   leftArrow.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length; // دائري للخلف
//     updateActiveImage();
//   });

//   rightArrow.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % images.length; // دائري للأمام
//     updateActiveImage();
//   });
// });

// document.querySelectorAll('.image-container').forEach((container) => {
//   const images = container.querySelectorAll('.car-image');
//   const dots = container.querySelectorAll('.dot');
//   const leftArrow = container.querySelector('.arrow-left');
//   const rightArrow = container.querySelector('.arrow-right');

//   let currentIndex = 0;

//   const updateActiveImage = () => {
//     images.forEach((img, index) => {
//       img.classList.toggle('active', index === currentIndex);
//     });

//     dots.forEach((dot, index) => {
//       dot.classList.toggle('active', index === currentIndex);
//     });
//   };

//   leftArrow.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     updateActiveImage();
//   });

//   rightArrow.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateActiveImage();
//   });

 
//   dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//       currentIndex = index;
//       updateActiveImage();
//     });
//   });
// });

document.querySelectorAll(".image-container").forEach((card) => {
  let currentSlide = 0;
  const slides = card.querySelectorAll(".slider > img.car-image");
  const totalSlides = slides.length;
  const slider = card.querySelector(".slider");
  const dots = card.querySelectorAll(".dot");
  const arrowLeft = card.querySelector(".arrow-left");
  const arrowRight = card.querySelector(".arrow-right");

  function updateSlide() {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });

    toggleArrows(); // تأكد من استدعاء toggleArrows بعد تحديث الشريحة
  }

  function toggleArrows() {
    // تعطيل الزر بدلاً من إخفائه تمامًا
    arrowLeft.style.opacity = currentSlide === 0 ? "0.5" : "1";
    arrowRight.style.opacity = currentSlide === totalSlides - 1 ? "0.5" : "1";

    // تعطيل النقر على الأسهم عند الحاجة
    arrowLeft.style.pointerEvents = currentSlide === 0 ? "none" : "auto";
    arrowRight.style.pointerEvents = currentSlide === totalSlides - 1 ? "none" : "auto";
  }

  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlide();
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlide();
    }
  }

  arrowRight.addEventListener("click", nextSlide);
  arrowLeft.addEventListener("click", prevSlide);

  toggleArrows(); // تحديث الحالة الأولية للأزرار
});

document.querySelectorAll('.switch-option').forEach((option) => {
  option.addEventListener('click', function () {
    // تبديل الحالة النشطة
    document.querySelectorAll('.switch-option').forEach((o) => o.classList.remove('active'));
    this.classList.add('active');

    // تبديل أسعار الباقات
    const type = this.dataset.type; // monthly أو yearly
    document.querySelectorAll('.plan-card').forEach((card) => {
      const monthlyPrice = card.querySelector('.plan-price.monthly');
      const yearlyPrice = card.querySelector('.plan-price.yearly');

      if (type === 'monthly') {
        monthlyPrice.style.display = 'block';
        yearlyPrice.style.display = 'none';
      } else {
        monthlyPrice.style.display = 'none';
        yearlyPrice.style.display = 'block';
      }
    });
  });
});


// Switch functionality
const switchOptions = document.querySelectorAll('.switch-option');
const monthlyPlans = document.querySelector('.monthly-plans');
const yearlyPlans = document.querySelector('.yearly-plans');

switchOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Remove active class from all options
    switchOptions.forEach(opt => opt.classList.remove('active'));
    // Add active class to the clicked option
    option.classList.add('active');

    // Toggle plan visibility
    if (option.dataset.type === 'monthly') {
      monthlyPlans.classList.remove('hidden');
      yearlyPlans.classList.add('hidden');
    } else {
      yearlyPlans.classList.remove('hidden');
      monthlyPlans.classList.add('hidden');
    }
  });
});


const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownList = document.querySelector('.dropdown-list');

// dropdownBtn.addEventListener('click', () => {
//   dropdownList.style.display =
//     dropdownList.style.display === 'block' ? 'none' : 'block';
// });

// function selectItem(value) {
//   alert(`You selected: ${value}`);
//   dropdownList.style.display = 'none';
// // }
// document.querySelectorAll('.dropdown-btn').forEach((btn) => {
//   btn.addEventListener('click', () => {
//     const dropdown = btn.nextElementSibling; // القائمة المنسدلة
//     dropdown.classList.toggle('open');
//     btn.classList.toggle('open'); // إضافة/إزالة class للزر
//   });
// });


function openPopup() {
  document.getElementById("filter-popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("filter-popup").style.display = "none";
}


function openDatePicker() {
  document.getElementById("dob").showPicker(); // فتح التقويم عند الضغط على الأيقونة
}

// document.getElementById("dob").addEventListener("change", function () {
//   let dateInput = this;
//   let dateValue = dateInput.value;

//   if (dateValue) {
//     let formattedDate = new Date(dateValue).toLocaleDateString("en-GB", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit"
//     });

//     // تحويل الصيغة إلى yyyy-MM-dd
//     let parts = formattedDate.split("/");
//     dateInput.value = `${parts[2]}-${parts[1]}-${parts[0]}`;
//   }
// });

function showDropdown(header) {
  let dropdown = header.closest('.custom-dropdown');
  let optionsList = dropdown.querySelector('.dropdown-options');
  optionsList.style.display = "block";
}

function clearPlaceholder(header) {
  if (header.textContent === "Select Make") {
    header.textContent = "";
    header.classList.remove("empty");
  }
  if (header.textContent === "Select Transmission") {
    header.textContent = "";
    header.classList.remove("empty");
  }
  if (header.textContent === "Select Price") {
    header.textContent = "";
    header.classList.remove("empty");
  }
  if (header.textContent === "Select Color") {
    header.textContent = "";
    header.classList.remove("empty");
  }
  if (header.textContent === "Select Emirate") {
    header.textContent = "";
    header.classList.remove("empty");
  }
  if (header.textContent === "Select Model") {
    header.textContent = "";
    header.classList.remove("empty");
  }
  if (header.textContent === "Select Year") {
    header.textContent = "";
    header.classList.remove("empty");
  }
  if (header.textContent === "Search History") {
    header.textContent = "";
    header.classList.remove("empty");
  }
}

function restorePlaceholder(header) {
  let dropdown = header.closest('.custom-dropdown');
  let optionsList = dropdown.querySelector('.dropdown-options');

  if (header.textContent.trim() === "") {
    header.textContent = header.dataset.defaultText;
    // header.classList.add("empty");
  }

  // إخفاء القائمة عند الخروج إذا لم يكن هناك بحث نشط
  if (!header.textContent.trim()) {
    optionsList.style.display = "none";
  }
}

function filterOptions(header) {
  let filter = header.textContent.toLowerCase().trim();
  let dropdown = header.closest('.custom-dropdown');
  let options = dropdown.querySelectorAll('.dropdown-options li');
  let optionsList = dropdown.querySelector('.dropdown-options');

  let matchFound = false;
  options.forEach(option => {
    if (option.textContent.toLowerCase().includes(filter)) {
      option.style.display = "block";
      matchFound = true;
    } else {
      option.style.display = "none";
    }
  });

  // 🔹 **إظهار القائمة فقط عند وجود نتائج**
  if (matchFound) {
    optionsList.style.display = "block";
  } else {
    optionsList.style.display = "none";
  }
}

function selectOption(option) {
  let dropdown = option.closest('.custom-dropdown');
  let header = dropdown.querySelector('.dropdown-header');

  header.textContent = option.textContent;
  header.classList.remove("empty");

  dropdown.querySelector('.dropdown-options').style.display = "none";
}
function previewImage(event) {
  let input = event.target;
  let reader = new FileReader();

  reader.onload = function () {
    let imgElement = document.getElementById("profile-pic");
    imgElement.src = reader.result;
  };

  reader.readAsDataURL(input.files[0]);
}


document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
          header.classList.add("scrolled"); // إضافة كلاس عند التمرير
      } else {
          header.classList.remove("scrolled"); // إزالة الكلاس عند الرجوع للأعلى
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon-mobile");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".close-btn");

  // فتح القائمة عند الضغط على زر القائمة
  menuIcon.addEventListener("click", function () {
    sidebar.classList.add("open");
  });

  // إغلاق القائمة عند الضغط على زر الإغلاق
  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("open");
  });

  // إغلاق القائمة عند الضغط خارجها
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
      sidebar.classList.remove("open");
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // عرض الـ Popup
  const filterIcon = document.querySelector('.filter-icon');
  const popup = document.querySelector('.popup-mobile');
  const overlay = document.querySelector(".popup-overlay-mobile");
  const closeButton = document.querySelector('.popup-mobile .close-btn-mobile');

  if (filterIcon) {
    filterIcon.addEventListener('click', function() {
      popup.classList.add('active');
      overlay.classList.add("active");
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', function() {
      popup.classList.remove('active');
      overlay.classList.remove("active");
    });
  }
});

document.querySelectorAll(".spec-btn").forEach(button => {
  button.addEventListener("click", function() {
    this.classList.toggle("selected"); // تبديل الكلاس عند النقر
  });
});


