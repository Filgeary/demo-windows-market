const openModal = (selector) => {
  document.querySelector(selector).style.display = 'block';
  document.body.style.overflow = 'hidden';
};

const modals = (selectors, timerId) => {
  // helper function
  function calcScrollbarWidth() {
    const div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.append(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollbarWidth;
  }
  const scrollWidth = calcScrollbarWidth();

  // handlers
  document.addEventListener('click', (evt) => {
    for (const item of selectors) {
      const { trigger, modalWrapper, closeModal } = item;
      const target = evt.target;

      if (target && target.matches(trigger)) {
        evt.preventDefault();

        const mappedSelectors = selectors.map((item) => item.modalWrapper);

        for (const selector of mappedSelectors) {
          const elements = document.querySelectorAll(selector);
          elements.forEach((item) => (item.style.display = 'none'));
        }

        document.querySelector(modalWrapper).style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollWidth}px`;

        clearTimeout(timerId);
      } else if (
        target &&
        (target.matches(modalWrapper) ||
          target.matches(closeModal) ||
          target.closest(closeModal))
      ) {
        evt.preventDefault();
        target.closest(modalWrapper).style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
      }
    }
  });

  document.addEventListener('keydown', (evt) => {
    for (const item of selectors) {
      const { modalWrapper } = item;
      const modal = document.querySelector(modalWrapper);

      if (evt.code === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
      }
    }
  });
};

export { openModal, modals };
