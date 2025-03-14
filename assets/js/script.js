// COUNTDOWN
// var countDownDate = new Date("Apr 12, 2025 14:37:25").getTime();
date = [$("#month").text(), $("#day").text(), ",", $("#year").text(), "14:37:25"].join(" ");
var countDownDate = new Date(date).getTime();
var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = "<div class='day'>" + "<span>" + days + " </span>" + "Hari " + "</div>" + "<div class='hour'>" + "<span>" + hours + " </span>" + "Jam "
    + "</div>" + "<div class='minute'>" + "<span>" + minutes + " </span>" + "Menit " + "</div>" + "<div class='second'>" + "<span>" + seconds + " </span>" + "Detik " + "</div>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// COUTNDOWN END

// MUSIC BUTTON
let musicButton = $("#music-button");
let music = $("#music").get(0);

musicButton.click(function () {
  if (music.paused) {
    music.play();
    musicButton.html("<i class=\"fa-solid fa-pause fa-bounce fa-lg\"></i>");
  } else {
    music.pause();
    musicButton.html("<i class=\"fa-solid fa-play fa-lg\"></i>");
  }
});
// MUSIC BUTTON END

