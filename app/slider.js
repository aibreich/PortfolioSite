// grabbing the objects for the slider
const codeLang = document.querySelector(".code-lang");
const codeContent = codeLang.querySelector(".code-content");
const codeItems = codeContent.querySelector(".code-items");
const codeItem = codeItems.querySelectorAll(".code-item");

// declaring the values for the slider base properties
let slideTouched = false;
let currentMouseX = 0;
let lastMouseX = 0;
let lastSliderX = 0;
let moveTo = 0;

// run slider function to have it move
const runSlider = () => {
  const space = 30;
  const sliderSizes = onResize();
  const currentSlideIndex = codeItem.length;
  const currentSlideDegree = 360 / currentSlideIndex;
  const translateZ = horizontalHeight(sliderSizes.w, currentSlideIndex, space);

  const height = calculateHeight(translateZ);

  codeLang.style.width = `${translateZ * 2 + space * currentSlideIndex}px`;
  codeLang.style.height = `${height}px`;

  codeItem.forEach((item, i) => {
    item.style.transform = `rotateY(${
      currentSlideDegree * i
    }deg) translateZ(${translateZ}px)`;
  });
};
// for resizing to other screens
const onResize = () => {
  const boundingCarousel = codeContent.getBoundingClientRect();

  const sliderSizes = {
    w: boundingCarousel.width,
    h: boundingCarousel.height,
  };

  return sliderSizes;
};

// for the horizontal height on slider
const horizontalHeight = (sliderWidth, currentSlideIndex, space) => {
  return sliderWidth / 2 / Math.tan(Math.PI / currentSlideIndex) + space;
};

// calculating the height for the slider
const calculateHeight = (translateZ) => {
  const t = Math.atan((90 * Math.PI) / 180 / 2);
  const height = 2 * t * translateZ;

  return height;
};

// to update the mouse location
const updateMouseX = (x) => {
  currentMouseX = x;
  currentMouseX < lastMouseX ? (moveTo -= 1.8) : (moveTo += 1.8);

  lastMouseX = currentMouseX;
};

// to update the rotation of the slider
const updateSlider = () => {
  lastSliderX = 0.2 * (moveTo - lastSliderX) + lastSliderX;
  codeItems.style.transform = `rotateY(${lastSliderX}deg)`;

  requestAnimationFrame(updateSlider);
};

// checking the mouse position and what its doing
const checkMousePosition = () => {
  codeItems.addEventListener("mousedown", () => {
    slideTouched = true;
    codeItems.style.cursor = "grabbing";
  });
  codeItems.addEventListener("mouseup", () => {
    slideTouched = false;
    codeItems.style.cursor = "grab";
  });
  codeItems.addEventListener("mouseleave", () => {
    slideTouched = false;
  });
  codeItems.addEventListener("mousemove", (e) => {
    slideTouched && updateMouseX(e.clientX);
  });
  codeItems.addEventListener("touchstart", () => {
    slideTouched = true;
  });
  codeItems.addEventListener("touchend", () => {
    slideTouched = false;
  });
  codeItems.addEventListener("touchmove", (e) => {
    slideTouched && updateMouseX(e.touches[0].clientX);
  });

  updateSlider();
  runSlider();
};
// running the function
checkMousePosition();
