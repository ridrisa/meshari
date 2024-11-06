// Scroll to top function
document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.createElement("button");
    backToTop.textContent = "Top";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
  
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  