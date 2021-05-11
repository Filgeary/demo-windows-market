const openModal = (selector) => {
  document.querySelector(selector).style.display = 'block';
};

const modals = (selectors, timerId) => {
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
        clearTimeout(timerId);
      } else if (
        target &&
        (target.matches(modalWrapper) ||
          target.matches(closeModal) ||
          target.closest(closeModal))
      ) {
        evt.preventDefault();
        target.closest(modalWrapper).style.display = 'none';
      }
    }
  });

  document.addEventListener('keydown', (evt) => {
    for (const item of selectors) {
      const { modalWrapper } = item;
      const modal = document.querySelector(modalWrapper);

      if (evt.code === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
      }
    }
  });
};

export { openModal, modals };
