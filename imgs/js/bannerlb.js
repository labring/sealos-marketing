
        document.addEventListener('DOMContentLoaded', () => {
          let currentIndex = 0;
          const items = document.querySelectorAll('.carousel-item');
          const totalItems = items.length;
        
          document.querySelector('.next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
          });
        
          document.querySelector('.prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
          });
        
          function updateCarousel() {
            items.forEach((item, index) => {
              item.style.transform = `translateX(-${currentIndex * 100}%)`;
            });
          }
        });
