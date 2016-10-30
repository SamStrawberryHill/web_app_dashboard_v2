//Close Alert on Click
$(".closebtn").click(function() {
  $(".alert").fadeOut("slow");
  $("#notifier").fadeOut("fast");
});

//Traffic Widget
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
  },
  options: {
    legend: {
      display: false,
    }
  },
});

// Daily Traffic Widget
var dailyTraffic = document.getElementById("dailyTrafficWidget").getContext('2d');
var dailyTrafficChart = new Chart(dailyTraffic, {
  type: 'bar',
  data: {
    labels: ['S','M','T','W','T','F','S'],
    datasets: [{
      data: [50,100,175,125,225,200,100],
      backgroundColor: '#7477BF',
      hoverBackgroundColor: '#92CCA6',
    }]
  },
  options: {
    legend: {
      display: false,
    }
  }
});

//Mobile Users Pie Chart
var mobileUsers = document.getElementById("mobileUsersWidget").getContext('2d');
var mobileChart = new Chart(mobileUsers, {
  type: 'doughnut',
  data: {
    labels: ['Phones','Tablets','Desktops'],
    datasets: [{
      backgroundColor: [
        '#7EBEA2',
        '#7477BF',
        '#73b0be'
      ],
      data: [20,55,5],
      borderWidth: 0,
    }]
  },
  options: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 15,
        fontSize: 20,
        padding: 10,
        fontColor: '#a59797'
      }
    }
  }
});

//Validate Message Form & Modals
function validateForm(event) {
  var messageUser = document.forms.messageForm.searchUser.value;
  var messageContent = document.forms.messageForm.message.value;
  if ( messageUser === null || messageUser === "" ) {
    $('#dialogNotSent').fadeIn('slow').delay(2000).fadeOut('slow');
    event.preventDefault(event);
  } else if ( messageContent === null || messageContent === "" ) {
      $('#dialogNotSent').fadeIn('slow').delay(2000).fadeOut('slow');
      event.preventDefault(event);
  } else {
      $('#dialogSent').fadeIn('slow').delay(2000).fadeOut('slow');
      $("input[name='searchUser']").val("");
      $("textarea").val("");
      event.preventDefault(event);
  }
}

$(".sendButton").click(function(event) {
  validateForm(event);
});
