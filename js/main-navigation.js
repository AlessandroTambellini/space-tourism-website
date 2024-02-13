const main_navigation = () => {
  return `
      <a class="skip-to-content" href="#main">
        Skip to content
      </a>
      <header class="primary-header flex">
        <div>
          <img src="./images/logo.svg" alt="space tourism logo" class="logo" />
        </div>
        <button class="mobile-nav-toggle" aria-controls="primary-navigation">
          <span class="sr-only" aria-expanded="false">
            Menu
          </span>
        </button>
        <nav>
          <ul
            id="primary-navigation"
            class="primary-navigation underline-indicators flex"
            data-visible="false"
          >
            <li class="active">
              <a
                class="ff-sans-cond uppercase text-white letter-spacing-2"
                href="index.html"
              >
                <span aria-hidden="true">00</span>Home
              </a>
            </li>
            <li>
              <a
                class="ff-sans-cond uppercase text-white letter-spacing-2"
                href="destination.html"
              >
                <span aria-hidden="true">01</span>Destination
              </a>
            </li>
            <li>
              <a
                class="ff-sans-cond uppercase text-white letter-spacing-2"
                href="crew.html"
              >
                <span aria-hidden="true">02</span>Crew
              </a>
            </li>
            <li>
              <a
                class="ff-sans-cond uppercase text-white letter-spacing-2"
                href="./technology.html"
              >
                <span aria-hidden="true">03</span>Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
    `;
};

document
  .getElementsByTagName("body")[0]
  .insertAdjacentHTML("afterbegin", main_navigation());

//
// After the html of the main-navigaton is added to the DOM, we add its logic
//

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
