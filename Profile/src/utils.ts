export function utils() {
  // To toggle between dark and light mode;
  const toggle_btn = document.querySelector(".toggle-btn");
  toggle_btn.addEventListener("click", toggleMode);
  // Check user's preference from local storage
  const isLightMode: boolean =
    JSON.parse(localStorage.getItem("lightMode")) || true;

  // Apply initial mode
  applyMode(isLightMode);

  function toggleMode() {
    const currentMode = document.body.classList.contains("light-mode");
    applyMode(!currentMode);
  }

  function applyMode(isLightMode: boolean) {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("lightMode", JSON.stringify(isLightMode));
  }
}
