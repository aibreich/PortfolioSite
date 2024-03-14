const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("view");
    } else {
      entry.target.classList.remove("view");
    }
  });
});

const hiddenEl = document.querySelectorAll(".hidden");
hiddenEl.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("view2");
    } else {
      entry.target.classList.remove("view2");
    }
  });
});

const hiddenEl2 = document.querySelectorAll(".hidden2");
hiddenEl2.forEach((el) => observer2.observe(el));
