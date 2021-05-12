const popupImages = ({ contSelector, imageSelector, popupSelector }) => {
  const imagesCont = document.querySelector(contSelector);

  const imageBox = document.createElement('div');
  const imageElement = document.createElement('img');

  imageBox.style.display = 'none';
  imageBox.style.justifyContent = 'center';
  imageBox.style.alignItems = 'center';

  imageBox.classList.add(popupSelector.replace(/\./, ''));
  imagesCont.append(imageBox);

  imagesCont.addEventListener('click', (evt) => {
    evt.preventDefault();
    const target = evt.target;

    if (target && target.matches(imageSelector)) {
      const path = target.parentElement.getAttribute('href');
      imageElement.setAttribute('src', path);

      imageBox.append(imageElement);
      imageBox.style.display = 'flex';
    }

    if (target && target.matches(popupSelector)) {
      imageBox.style.display = 'none';
    }
  });
};

export default popupImages;
