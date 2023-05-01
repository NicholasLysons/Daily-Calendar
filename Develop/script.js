function displayTime(){
 var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a')
 timeDisplayEl.text(rightNow);
}
displayTime();
setInterval(displayTime, 1000);