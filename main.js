const menuIcon = document.querySelector('.menu-icon'); // Fixed selector for menuIcon
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
});

document.body.addEventListener('click', (e) => {
  if (!navList.contains(e.target) && !menuIcon.contains(e.target)) {
    navList.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const skills = document.querySelectorAll('.skills');
  const options = {
    threshold: 0.5 // Adjust this value to determine when the animation starts
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, options);

  skills.forEach(skill => {
    observer.observe(skill);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const skillSection = document.querySelector('.skill');
  const progressBars = document.querySelectorAll('.inner-bar');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              skillSection.classList.add("slide-up");
              // Animate progress bars
              progressBars.forEach(bar => {
                  const width = bar.getAttribute('style').match(/width:\s?(\d+)%/)[1];
                  bar.style.width = '0'; // Start from 0
                  setTimeout(() => {
                      bar.style.transition = 'width 1s ease-out';
                      bar.style.width = width + '%'; // Animate to the correct width
                  }, 100); // Delay for a smoother start
              });
          }
      });
  }, { threshold: 0.1 });

  observer.observe(skillSection);
});






const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
  .split("")
  .map(
    (letter, idx) => 
      `<span style ="transition-delay:${idx * 50}ms">${letter}</span>`
  )
  .join("");
});






 
        // Set the main image
        function setImage(imagePath) {
          const mainContainer = document.getElementById('mainContainer');
          mainContainer.style.opacity = 0; // Fade out
          setTimeout(() => {
              mainContainer.style.backgroundImage = `url(${imagePath})`;
              mainContainer.style.opacity = 1; // Fade in
          }, 300);
      }

      // Handle navigation
      const thumbnails = document.querySelectorAll('.thumbnail');
      const thumbnailContainer = document.querySelector('.thumbnail-container');
      let currentIndex = 0;

      const updateActiveThumbnail = (index) => {
          thumbnails.forEach(thumb => thumb.classList.remove('active'));
          thumbnails[index].classList.add('active');
      };

      const navigate = (direction) => {
          currentIndex = (currentIndex + direction + thumbnails.length) % thumbnails.length;
          setImage(thumbnails[currentIndex].dataset.image);
          updateActiveThumbnail(currentIndex);

          // Scroll to the selected thumbnail
          const activeThumbnail = thumbnails[currentIndex];
          thumbnailContainer.scrollTop = activeThumbnail.offsetTop - thumbnailContainer.offsetTop;
      };

      document.getElementById('next').onclick = () => navigate(1);
      document.getElementById('prev').onclick = () => navigate(-1);

      thumbnails.forEach((thumbnail, index) => {
          thumbnail.onclick = () => {
              currentIndex = index;
              setImage(thumbnail.dataset.image);
              updateActiveThumbnail(currentIndex);

              // Scroll to the clicked thumbnail
              thumbnailContainer.scrollTop = thumbnail.offsetTop - thumbnailContainer.offsetTop;
          };
      });