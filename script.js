document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 2. Section 4 Accordion Logic
  const sec4Card = document.querySelectorAll(".sec4-maincontent");

  sec4Card.forEach((item) => {
    const sec4MainContent = item.querySelector(".main-content");
    const sec4Icon = item.querySelector(".sec4-icon");
    const sec4MaincontentPtag = item.querySelector(".sec4-maincontent-Ptag");

    if (sec4Icon && sec4MainContent) {
      sec4Icon.addEventListener("click", () => {
        sec4Icon.style.transition =
          "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
        sec4MainContent.style.transition =
          "opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)";

        const isExpanded = sec4MainContent.style.display === "block";

        if (isExpanded) {
          sec4MainContent.style.opacity = "0";
          sec4MainContent.style.display = "none";
          if (sec4MaincontentPtag) sec4MaincontentPtag.style.color = "";
          sec4Icon.style.transform = "rotate(0deg)";
        } else {
          sec4MainContent.style.display = "block";
          if (sec4MaincontentPtag) sec4MaincontentPtag.style.color = "#00b289";
          sec4Icon.style.transform = "rotate(180deg)";
          setTimeout(() => {
            sec4MainContent.style.opacity = "1";
          }, 10);
        }
      });
    }
  });

  // 3. Mobile Navigation Menu
  const menuBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("open");
      mobileMenu.classList.remove("hidden");
      if (typeof lucide !== "undefined") lucide.createIcons();
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      mobileMenu.classList.add("hidden");
    });
  }

  // 4. Mobile Submenu Accordions
  const dropdownBtns = document.querySelectorAll(".mobile-dropdown-btn");

  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const submenu = btn.nextElementSibling;
      const icon = btn.querySelector(".chevron-icon");

      if (submenu) {
        if (submenu.classList.contains("hidden")) {
          submenu.classList.remove("hidden");
          submenu.classList.add("flex");
          if (icon) icon.classList.add("rotate-180");
        } else {
          submenu.classList.add("hidden");
          submenu.classList.remove("flex");
          if (icon) icon.classList.remove("rotate-180");
        }
      }
    });
  });

  // 5. Yearly / Monthly Pricing Toggle
  const toggle = document.getElementById("pricing-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("yearly");

      const data = document.querySelectorAll(".monthly");
      const yearlyLabel = document.querySelectorAll(".yearlyLabel");
      const isYearly = toggle.classList.contains("yearly");

      if (isYearly) {
        if (data[0]) data[0].innerHTML = "17";
        if (data[1]) data[1].innerHTML = "32";
        if (data[2]) data[2].innerHTML = "57";
        yearlyLabel.forEach((label) => (label.style.display = "block"));
      } else {
        if (data[0]) data[0].innerHTML = "24";
        if (data[1]) data[1].innerHTML = "39";
        if (data[2]) data[2].innerHTML = "79";
        yearlyLabel.forEach((label) => (label.style.display = "none"));
      }
    });
  }

  // 6. Safe Page Navigation Bindings
  const bindRoute = (id, targetUrl) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        window.location.href = targetUrl;
      });
    }
  };

  bindRoute("loginBtn", "polished-login.html");
  bindRoute("loginBtn2", "polished-login.html");
  bindRoute("signUP", "signup.html");
  bindRoute("signUP2", "signup.html");
});

// Delay button

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".startFreeBtn");

  // Reset function for all buttons
  const resetAllButtons = () => {
    buttons.forEach((btn) => {
      const spinner = btn.querySelector(".startFreeSpinner");
      const textNode = btn.querySelector(".startFreeText");

      btn.style.pointerEvents = "auto";
      btn.style.opacity = "1";

      if (spinner) spinner.classList.add("hidden");
      if (textNode) textNode.textContent = "START FREE";
    });
  };

  // Reset when user hits back button in browser
  window.addEventListener("pageshow", () => {
    resetAllButtons();
  });

  // Attach click handlers across NodeList
  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      // Locate elements inside the specific clicked card
      const spinner = btn.querySelector(".startFreeSpinner");
      const textNode = btn.querySelector(".startFreeText");

      // Disable interaction across all buttons during delay
      buttons.forEach((b) => {
        b.style.pointerEvents = "none";
        b.style.opacity = "0.85";
      });

      // Update UI state on the clicked button
      if (spinner) spinner.classList.remove("hidden");
      if (textNode) textNode.textContent = "Redirecting......";

      // Delay redirection by 4 seconds
      setTimeout(() => {
        window.location.href = btn.getAttribute("href");
      }, 4000);
    });
  });
});
