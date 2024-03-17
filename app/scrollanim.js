// scroll animation
// setting an observer for when the element is pulled up on page
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
// setting the elements to be hidden to connect them to the observer
const hiddenEl = document.querySelectorAll(".hidden");
hiddenEl.forEach((el) => observer.observe(el));

// repeating the above code but in reverse to have the animation happen from the other way to add dynamic styling
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
