const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", (e) => changeTabFocus(e));

tabs.forEach((tab) => tab.addEventListener("click", (e) => changeTabPanel(e)));

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image");

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  hideContent(mainContainer, '[role="tabpanel"]', "picture");
  showContent(mainContainer, [`#${targetPanel}`], [`#${targetImage}`]);
}

const hideContent = (parent, content, picture) => {
  parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true));
  parent
    .querySelectorAll(picture)
    .forEach((item) => item.setAttribute("hidden", true));
};

const showContent = (parent, content, picture) => {
  parent.querySelector(content).removeAttribute("hidden");
  parent.querySelector(picture).removeAttribute("hidden");
};

let tabFocus = 0;
function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;
  const keydownTop = 38;
  const keydownBottom = 40;

  if (
    e.keyCode === keydownTop ||
    e.keyCode === keydownBottom ||
    e.keyCode === keydownLeft ||
    e.keyCode === keydownRight
  ) {
    tabs[tabFocus].setAttribute("tabindex", -1);

    if (e.keyCode === keydownBottom || e.keyCode === keydownRight) {
      tabFocus++;
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    }
    if (e.keyCode === keydownTop || e.keyCode === keydownLeft) {
      tabFocus--;
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
  }
}
