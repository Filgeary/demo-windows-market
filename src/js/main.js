'use strict';

// libs
import './slider';

// modules
import { openModal, modals } from './modules/modals';
import tabs from './modules/tabs';

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
  ];

  // show modal by timer
  const modalTimerPopup = {
    modalWrapper: '[data-popup]',
    timer: 60000,
  };
  const timerIdPopup = setTimeout(() => {
    openModal(modalTimerPopup.modalWrapper);
  }, modalTimerPopup.timer);

  // Main Modules
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
});
