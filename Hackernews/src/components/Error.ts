export function renderError(error: string) {
  const container = document.querySelector(
    ".inner-container"
  ) as HTMLDivElement;
  //   container.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = error;
  container.appendChild(p);
}
