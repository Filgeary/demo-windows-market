'use strict';

// libs
import './slider';

// modules
import { openModal, modals } from './modules/modals';
import tabs from './modules/tabs';
import formState from './formState';
import forms from './modules/forms';
import timer from './modules/timer';
import popupImages from './modules/popupImages';

window.addEventListener('DOMContentLoaded', () => {
  // modal selectors
  const modalSelectors = [
    {
      trigger: '[data-show-popup-engineer]',
      modalWrapper: '[data-popup-engineer]',
      closeModal: '[data-popup-engineer-close]',
    },
    {
      trigger: '[data-show-popup]',
      modalWrapper: '[data-popup]',
      closeModal: '[data-popup-close]',
    },
    {
      trigger: '[data-show-popup-calc]',
      modalWrapper: '[data-popup-calc]',
      closeModal: '[data-popup-calc-close]',
    },
    {
      trigger: '[data-show-popup-calc-profile]',
      modalWrapper: '[data-popup-calc-profile]',
      closeModal: '[data-popup-calc-profile-close]',
    },
    {
      trigger: '[data-show-popup-calc-end]',
      modalWrapper: '[data-popup-calc-end]',
      closeModal: '[data-popup-calc-end-close]',
    },
  ];

  // show modal by timer
  const modalTimerPopup = {
    modalWrapper: '[data-popup]',
    timer: 60000,
  };
  const timerIdPopup = setTimeout(() => {
    openModal(modalTimerPopup.modalWrapper);
  }, modalTimerPopup.timer);

  // URL postData
  const URL = {
    postDataJSON: 'https://jsonplaceholder.typicode.com/posts',
  };

  const dataState = {};

  // Main Modules
  formState(dataState);
  modals(modalSelectors, timerIdPopup);
  tabs({
    tabContainer: '[data-tabs-cont-glazing]',
    tabToggle: '[data-tab-toggle-glazing]',
    tabItem: '[data-tab-item-glazing]',
    activeClass: 'active',
  });
  tabs({
    tabContainer: '[data-tabs-cont-decoration]',
    tabToggle: '[data-tab-toggle-decoration]',
    tabItem: '[data-tab-item-decoration]',
    activeClass: 'after_click',
  });
  tabs({
    tabContainer: '[data-tabs-cont-balcon-icons]',
    tabToggle: '[data-tab-toggle-balcon-icons]',
    tabItem: '[data-tab-item-balcon-icons]',
    activeClass: 'do_image_more',
    displayValue: 'inline-block',
  });
  forms(URL.postDataJSON, timerIdPopup, dataState);
  timer({
    timerSelector: '[data-timer-sale-cont]',
    deadlineString: '2021-08-11',
    titleTimerSelector: '[data-timer-sale-text-cont]',
    titleTimerEndText: 'К сожалению, Акция уже закончилась...',
  });
  popupImages({
    contSelector: '[data-section-works]',
    imageSelector: '.preview',
    popupSelector: '.popup',
  });
});
