const timer = ({
  timerSelector,
  deadlineString = '2021-07-01',
  titleTimerSelector = '',
  titleTimerEndText = 'SALE ends!',
}) => {
  function addZeroToNumber(num) {
    if (num <= 9) {
      return '0' + num;
    }
    return num;
  }

  function getTimeRemaining(endtime) {
    const now = new Date();
    let timezoneOffset = now.getTimezoneOffset() * 60 * 1000;
    let totalTimestamp = 0;

    if (timezoneOffset < 0) {
      timezoneOffset = Math.abs(timezoneOffset);
      totalTimestamp = Date.parse(endtime) - Date.now() - timezoneOffset;
    } else if (timezoneOffset > 0) {
      totalTimestamp = Date.parse(endtime) - Date.now() + timezoneOffset;
    } else {
      totalTimestamp = Date.parse(endtime) - Date.now();
    }

    const days = Math.floor(totalTimestamp / (1000 * 60 * 60 * 24)),
      hours = Math.floor((totalTimestamp / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((totalTimestamp / (1000 * 60)) % 60),
      seconds = Math.floor((totalTimestamp / 1000) % 60);

    return {
      totalTimestamp,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function setClock(timerBox, endtime, titleTimerBox, titleEndText) {
    const timer = document.querySelector(timerBox),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    let titleTimer = '';

    if (titleTimerBox) {
      titleTimer = timer.querySelector(titleTimerBox);
    }

    updateClock();

    function updateClock() {
      const total = getTimeRemaining(endtime);

      days.textContent = addZeroToNumber(total.days);
      hours.textContent = addZeroToNumber(total.hours);
      minutes.textContent = addZeroToNumber(total.minutes);
      seconds.textContent = addZeroToNumber(total.seconds);

      if (total.totalTimestamp <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval);

        if (titleTimer) {
          titleTimer.textContent = titleEndText;
        }
      }
    }
  }

  setClock(
    timerSelector,
    deadlineString,
    titleTimerSelector,
    titleTimerEndText,
  );
};

export default timer;
