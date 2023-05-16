var timeDisplayEl = $('#time-display');


function displayTime() 
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);

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
  

function handleDeleteEvent() {
    var eventIndex = parseInt($(this).attr('data-index'));
    var event = readEventFromStorage();

    event.splice(eventIndex, 1);
    saveEventToStorage(event);
  
    printEventData();
}

function handleEventFormSubmit(event) {
    event.preventDefault();

  var eventName = eventNameInputEl.val().trim();
  var eventType = eventTypeInputEl.val(); 
  var eventDate = eventDateInputEl.val();

    var newEvent = {
        name: eventName,
        type: eventType,
        date: eventDate,
    };


  var event = readEventFromStorage();
  event.push(newEvent);
  saveEventToStorage(event);

  printEventData();

  eventNameInputEl.val('');
  eventTypeInputEl.val('');
  eventDateInputEl.val('');
}

eventFormEl.on('submit', handleEventFormSubmit);

layEl.on('click', '.btn-delete-event', handleDeleteEvent);


displayTime();
setInterval(displayTime, 1000);