window.onload = function() {
    setInterval(function(){
        var date = new Date();
        var displayDate = date.toLocaleDateString('en-US', {timeZone: 'Asia/Singapore', dateStyle:'full'});
        var displayTime = date.toLocaleString('en-US', {timeZone: 'Asia/Singapore', timeStyle:'medium', hourCycle:'h12'});

        document.getElementById('datetime').innerHTML = displayTime;
    }, 1000); // 1000 milliseconds = 1 second
}