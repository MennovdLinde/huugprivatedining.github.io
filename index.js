function navUp() {
  document.getElementById("navbar").classList.add("scrolled-down");
  document.getElementById("navbar").classList.remove("scrolled-up");
  document.getElementById("contentMask").style.height = "120px";
}

function navDown() {
  document.getElementById("navbar").classList.add("scrolled-up");
  document.getElementById("navbar").classList.remove("scrolled-down");
  document.getElementById("contentMask").style.height = "169px";
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.innerWidth > 768) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navUp();
    } else {
      navDown();
    }
  } else {
    navDown();
  }
}

function triggerBtn() {
  var triggetContact = document.getElementById("nav-contact-tab");
  triggetContact.click();
}

document.getElementById("logo").addEventListener("mouseover", function () {
  if (window.innerWidth > 768) {
    navDown();
  }
});

fetch("home.html")
  .then((response) => response.text())
  .then((html) => (document.getElementById("nav-home").innerHTML = html));

fetch("events.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("nav-events").innerHTML = html;
  });

  document.addEventListener("DOMContentLoaded", function () {
    function addMenuToggleEvents() {
        document.querySelectorAll("#card-menu").forEach(card => {
            const header = card.querySelector(".toggle-header");
            const content = card.querySelector(".content");
            const button = card.querySelector(".toggle-btn");

            if (header && content && button) {
                header.addEventListener("click", function () {
                    if (content.classList.contains("show")) {
                        content.style.maxHeight = "0"; // Collapse
                        content.style.padding = "0";
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px"; // Expand dynamically
                        content.style.padding = "15px";
                    }
                    content.classList.toggle("show"); // Add/remove class
                    button.style.transform = content.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
                });
            }
        });
    }

    // Wait for menu.html to load before adding toggle functionality
    fetch("menu.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("nav-menu").innerHTML = html;
            addMenuToggleEvents(); // Apply event listeners after menu loads
        });
});


fetch("contact.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("nav-contact").innerHTML = html;
    addMenuToggleEvents();
  });
