var timeDisplayEl = $('#time-display');
var saveBtn = $('.saveBtn')
//day.js time display
function displayTime() {
    var rightNow = dayjs().format('YYYY MMMM DD');
    timeDisplayEl.text(rightNow)
};
//shows local storage
function readEventFromStorage() {
    var event = localStorage.getItem('event');
    if (event) {
      event = JSON.parse(event);
    } else {
      event = [];
    }
    return event;
}
//saves local storage
function saveEventToStorage(event) {
    localStorage.setItem('event', JSON.stringify(event));
}

function printEventData() {

    eventDisplayEl.empty();
  
    var event = readEventFromStorage();

    rowEl.append(nameEL, typeEl, dateEl, deleteEl);
    eventDisplayEl.append(rowEl);
}
//utilizes save button
saveBtn.on('click', saveEventToStorage);
//displays time from day.js
displayTime();
setInterval(displayTime, 1000);