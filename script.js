const slider = document.querySelector(".slider");
const handle = document.querySelector(".handle");
const container = document.querySelector(".slider-container");    container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = rect.width;      const percentage = Math.max(0, Math.min(offsetX / width, 1));
    slider.style.width = `${percentage * 100}%`;
    handle.style.left = `${percentage * 100}%`;
});