

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


      document.querySelectorAll('.image-container').forEach((container) => {
        const images = container.querySelectorAll('.car-image');
        const leftArrow = container.querySelector('.arrow-left');
        const rightArrow = container.querySelector('.arrow-right');
    
        let currentIndex = 0;
    
        const updateActiveImage = () => {
            images.forEach((img, index) => {
                img.classList.toggle('active', index === currentIndex);
            });
        };
    
        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // دائري للخلف
            updateActiveImage();
        });
    
        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length; // دائري للأمام
            updateActiveImage();
        });
    });

    document.querySelectorAll('.image-container').forEach((container) => {
        const images = container.querySelectorAll('.car-image');
        const dots = container.querySelectorAll('.dot');
        const leftArrow = container.querySelector('.arrow-left');
        const rightArrow = container.querySelector('.arrow-right');
    
        let currentIndex = 0;
    
        const updateActiveImage = () => {
            images.forEach((img, index) => {
                img.classList.toggle('active', index === currentIndex);
            });
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        };
    
        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateActiveImage();
        });
    
        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateActiveImage();
        });
    
        // إضافة حدث عند الضغط على الدوائر الصغيرة
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateActiveImage();
            });
        });
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

dropdownBtn.addEventListener('click', () => {
  dropdownList.style.display =
    dropdownList.style.display === 'block' ? 'none' : 'block';
});

function selectItem(value) {
  alert(`You selected: ${value}`);
  dropdownList.style.display = 'none';
}
document.querySelectorAll('.dropdown-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const dropdown = btn.nextElementSibling; // القائمة المنسدلة
    dropdown.classList.toggle('open');
    btn.classList.toggle('open'); // إضافة/إزالة class للزر
  });
});


function openPopup() {
  document.getElementById("filter-popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("filter-popup").style.display = "none";
}


