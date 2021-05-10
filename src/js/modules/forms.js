import { postDataJSON } from '../api';

const forms = (url, timerId) => {
  const statusMessage = {
    pending: 'Ожидание заказа...',
    success: 'Ваша заявка принята!',
    error: 'Что-то пошло не так...',
  };

  document.addEventListener('input', (evt) => {
    const target = evt.target;

    if (target && target.matches('input[name="user_phone"]')) {
      target.value = target.value.replace(/\D/, '');
    }
  });

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
