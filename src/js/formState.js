const formState = (state) => {
  const formCalc = document.querySelector('[data-popup-calc]');
  const balcons = formCalc.querySelectorAll('[data-tab-toggle-balcon-icons]');
  const inputWidth = formCalc.querySelectorAll('#width');
  const inputHeight = formCalc.querySelectorAll('#height');

  const formCalc2 = document.querySelector('[data-popup-calc-profile]');
  const selectType = formCalc2.querySelectorAll('#view_type');
  const checkboxType = formCalc2.querySelectorAll('[data-form-checkbox]');

  function bindActionsToElements(event, elements, prop) {
    elements.forEach((item, i) => {
      item.addEventListener(event, () => {
        if (!state.type) {
          state.type = selectType[0].value;
        }

        if (item.nodeName === 'SPAN') {
          state[prop] = item.getAttribute('data-tab-toggle-balcon-icons');
        }

        if (item.nodeName === 'INPUT') {
          if (item.hasAttribute('data-form-checkbox')) {
            state[prop] = item.getAttribute('data-form-checkbox');

            elements.forEach((item, j) => {
              item.checked = false;

              if (i === j) {
                item.checked = true;
              }
            });
          } else {
            item.value = item.value.replace(/\D+/, '');
            state[prop] = item.value;
          }
        }

        if (item.nodeName === 'SELECT') {
          state[prop] = item.value;
        }

        console.log(state);
      });
    });
  }
  bindActionsToElements('click', balcons, 'balcon');
  bindActionsToElements('input', inputWidth, 'width');
  bindActionsToElements('input', inputHeight, 'height');
  bindActionsToElements('change', selectType, 'type');
  bindActionsToElements('change', checkboxType, 'profile');
};

export default formState;
