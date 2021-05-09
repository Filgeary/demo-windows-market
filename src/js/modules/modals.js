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
        document.querySelector(modalWrapper).style.display = 'block';
        clearTimeout(timerId);
      } else if (
        target &&
        (target.matches(modalWrapper) || target.matches(closeModal))
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
