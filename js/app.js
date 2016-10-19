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
            bottom: 1000,
            labels: {
                boxWidth: 15,
                fontSize: 20,
                padding: 10,
                fontColor: '#a59797'
            }
        }
    }
});

//New Members Widget
var newMemberName = document.getElementById("newMemberList").querySelectorAll(".memberName");
var newMemberEmail = document.getElementById("newMemberList").querySelectorAll(".memberEmail");
var newMemberDate = document.getElementById("newMemberList").querySelectorAll("li .memberDate");
var newMemberAvatar = document.getElementById("newMemberList").querySelectorAll("li .memberAvatar");
var newMemberData = [
        {"name": "Blanche Devereaux",
          "image": "img/blanche.jpg",
          "icon": 'icons/custom-post.svg',
          "email": "Blanche.Devereaux@goldengirls.com",
          "date": "10/31/16",
          "activity": " posted YourApp's SEO Tips",
          "activity_time": "4 hours ago"},
        {"name": "Dorothy Zbornak",
          "image": "img/dorothy.jpg",
          "icon": "icons/comment.svg",
          "email": "Dorothy.Zbornak@goldengirls.com",
          "date": "10/31/16",
          "activity": " commented on Facebook's changes for 2016",
          "activity_time": "5 hours ago"},
        {"name": "Rose Nylund",
          "image": "img/rose.jpg",
          "icon": "icons/comment.svg",
          "email": "Rose.Nylund@goldengirls.com",
          "date": "10/31/16",
          "activity": " commented on Facebook's changes for 2016",
          "activity_time": "5 hours ago"},
        {"name": "Sophia Petrillo",
          "image": "img/sophia.jpg",
          "icon": 'icons/add-user.svg',
          "email": "Sophia.Petrillo@goldengirls.com",
          "date": "10/31/16",
          "activity": " signed up as a new member!",
          "activity_time": "1 day ago"},
        ];
        $.each(newMemberData, function(i, item) {
    var fullName = newMemberData[i].name;
        $(newMemberName).each(function() {
            $(newMemberName[i]).text(fullName);
        });
    var email = newMemberData[i].email;
        $(newMemberEmail).each(function() {
            $(newMemberEmail[i]).text(email);
        });
    var date = newMemberData[i].date;
         $(newMemberDate).each(function() {
             $(newMemberDate[i]).text(date);
         });
     var avatar = newMemberData[i].image;
        $(newMemberAvatar).each(function() {
            $(newMemberAvatar[i]).attr('src', avatar);
        });
 });
 // Member Activity Widget

var activityMemberName = document.getElementById("memberActivityList").querySelectorAll("li .memberName"); //holds both name and activity

var activityTime = document.getElementById("memberActivityList").querySelectorAll("li .activityTime");
var memberAvatar = document.getElementById("memberActivityList").querySelectorAll("li .memberAvatar");
var activityIcon = document.getElementById("memberActivityList").querySelectorAll("li .activityIcon");

// Replace placeholder text with member activity data from JSON

$.each(newMemberData, function(i, item) {
    var fullName = newMemberData[i].name;
    var activity = newMemberData[i].activity;
        $(activityMemberName).each(function() {
            $(activityMemberName[i]).text(fullName + " " + activity);
        });

    var time = newMemberData[i].activity_time;
        $(activityTime).each(function() {
            $(activityTime[i]).text(time);
        });

     var avatar = newMemberData[i].image;
        $(memberAvatar).each(function() {
            $(memberAvatar[i]).attr('src', avatar);
        });

    var actIcon = newMemberData[i].icon;
        $(activityIcon).each(function() {
            $(activityIcon[i]).attr('src', actIcon);
        });

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
