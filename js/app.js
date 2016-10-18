//Close Alert on Click
$(".closebtn").click(function() {
    $(".alert").fadeOut("slow");
    $("#notifier").fadeOut("fast");
});
var traffic = document.getElementById('trafficWidget').getContext('2d');
var trafficChart = new Chart(traffic, {
  type: 'line',
  data: {
    labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
    datasets: [{
      data: [750,1250,1000,1500,2000,1500,1750,1250,1750,2000,1750,2250],
      backgroundColor: 'rgba(212, 217, 244, 0.5)',
      lineTension: 0,
      pointBorderColor: '#7477BF',
      pointRadius: 6,
      pointBorderWidth: 2,
      pointBackgroundColor: '#fff'
    }]
  }
});

//Validate Message Form & Modals
function validateForm(event) {
    var messageUser = document.forms["messageForm"]["searchUser"].value;
    var messageContent = document.forms["messageForm"]["message"].value;
    if ( messageUser === null || messageUser === "" ) { //if the user field is empty
        $('#dialogNotSent').fadeIn('slow').delay(2000).fadeOut('slow'); //show error message
        event.preventDefault(event); //stop page from reloading
    } else if ( messageContent === null || messageContent === "" ) { //if the message field is empty
        $('#dialogNotSent').fadeIn('slow').delay(2000).fadeOut('slow'); //show error message
        event.preventDefault(event);
    } else {
        $('#dialogSent').fadeIn('slow').delay(2000).fadeOut('slow'); //otherwise, show sent message
         $("input[name='searchUser']").val(""); //clears text
         $("textarea").val(""); //clears text
         event.preventDefault(event);
    }
}

$(".sendButton").click(function(event) {
    validateForm(event);
});
