// To render skeleton loading page:

export function renderSkeleton() {
  const innerContainer = document.querySelector(".inner-container");
  for (let i = 0; i < 5; i++) {
    const div = document.createElement("div");
    div.innerHTML = `
                <div class="box">
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                </div>
            `;
    innerContainer.appendChild(div);
  }
}
