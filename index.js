const bodyEl = document.querySelector("body");

const createElement = (xPos, yPos) => {
  const spanEl = document.createElement("span");
  spanEl.style.position = 'absolute'; // Make sure the element is positioned absolutely
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  spanEl.style.backgroundColor = "rgba(0, 0, 255, 0.5)"; // Optional: Add a background color
  spanEl.style.borderRadius = "50%"; // Optional: Make it circular
  bodyEl.appendChild(spanEl);
  
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
};

// Mouse move event for desktops
bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  createElement(xPos, yPos);
});

// Touch move event for mobile devices
bodyEl.addEventListener("touchmove", (event) => {
  const touch = event.touches[0];
  const xPos = touch.clientX;
  const yPos = touch.clientY;
  createElement(xPos, yPos);
  
  // Prevent default scrolling
  event.preventDefault();
}, { passive: false });
