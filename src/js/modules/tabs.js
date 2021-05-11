const tabs = ({
  tabContainer,
  tabToggle,
  tabItem,
  activeClass,
  displayValue = 'block',
}) => {
  const tabCont = document.querySelector(tabContainer);
  const tabToggles = tabCont.querySelectorAll(tabToggle);
  const tabItems = tabCont.querySelectorAll(tabItem);

  function hideTabs() {
    tabItems.forEach((item) => {
      item.style.display = 'none';
    });

    tabToggles.forEach((item) => {
      item.classList.remove(activeClass.replace(/\./, ''));
    });
  }

  function showTabs(i = 0) {
    tabItems[i].style.display = displayValue;
    tabToggles[i].classList.add(activeClass.replace(/\./, ''));
  }

  hideTabs();
  showTabs();

  tabCont.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target && (target.matches(tabToggle) || target.closest(tabToggle))) {
      evt.preventDefault();

      tabToggles.forEach((item, index) => {
        if (target === item || target.closest(tabToggle) === item) {
          hideTabs();
          showTabs(index);
        }
      });
    }
  });
};

export default tabs;
