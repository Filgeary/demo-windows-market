import { postDataJSON } from '../api';

const forms = (url, timerId, state) => {
  const statusMessage = {
    pending: 'Ожидание заказа...',
    success: 'Ваша заявка принята!',
    error: 'Что-то пошло не так...',
  };

  document.addEventListener('submit', (evt) => {
    const target = evt.target;
    const statusElement = document.createElement('div');
    statusElement.classList.add('status');

    if (target && target.matches('form')) {
      evt.preventDefault();
      clearTimeout(timerId);

      statusElement.textContent = statusMessage.pending;
      target.appendChild(statusElement);

      const dataForm = new FormData(target);

      if (target.hasAttribute('data-form-calc-end')) {
        for (const key in state) {
          if (Object.hasOwnProperty.call(state, key)) {
            const value = state[key];
            dataForm.append(key, value);
          }
        }
      }

      const dataJSON = JSON.stringify(Object.fromEntries(dataForm.entries()));

      postDataJSON(url, dataJSON)
        .then((data) => {
          console.log(data);
          statusElement.textContent = statusMessage.success;
        })
        .catch((err) => {
          console.error(err);
          statusElement.textContent = statusMessage.error;
        })
        .finally(() => {
          target.reset();
          setTimeout(() => {
            statusElement.remove();
          }, 3000);
        });
    }
  });
};

export default forms;
