var timeDisplayEl = $('#time-display');
var saveBtn = $('.saveBtn')

function displayTime() {
    var rightNow = dayjs().format('YYYY MMMM DD');
    timeDisplayEl.text(rightNow)
};

function readEventFromStorage() {
    var event = localStorage.getItem('event');
    if (event) {
      event = JSON.parse(event);
    } else {
      event = [];
    }
    return event;
}

function saveEventToStorage(event) {
    localStorage.setItem('event', JSON.stringify(event));
}

function printEventData() {

    eventDisplayEl.empty();
  
    var event = readEventFromStorage();

    rowEl.append(nameEL, typeEl, dateEl, deleteEl);
    eventDisplayEl.append(rowEl);
}

saveBtn.on('click', saveEventToStorage);

displayTime();
setInterval(displayTime, 1000);