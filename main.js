
document.addEventListener("DOMContentLoaded", () => {
  const typedTarget = document.getElementById("typed-text");

  if (window.Typed && typedTarget) {
    new Typed("#typed-text", {
      strings: [
        "CSE Student",
        "Aspiring Software Developer",
        "Web Developer",
        "Machine Learning Enthusiast",
        "Healthcare AI Researcher",
        "Scout Patrol Leader"
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 1400,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
  }

  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("open");

      const icon = menuToggle.querySelector("i");
      if (icon) {
        icon.className = navbar.classList.contains("open")
          ? "bx bx-x"
          : "bx bx-menu";
      }
    });

    document.querySelectorAll(".navbar a").forEach(link => {
      link.addEventListener("click", () => {
        navbar.classList.remove("open");

        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.className = "bx bx-menu";
        }

        document.querySelectorAll(".navbar a").forEach(item => {
          item.classList.remove("active");
        });

        link.classList.add("active");
      });
    });
  }
});

