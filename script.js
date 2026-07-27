const menuButton = document.querySelector(".menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".accordion button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".accordion");
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".accordion").forEach((accordion) => {
      accordion.classList.remove("open");
      accordion.querySelector("button span").textContent = "＋";
    });
    if (!wasOpen) {
      item.classList.add("open");
      button.querySelector("span").textContent = "−";
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
