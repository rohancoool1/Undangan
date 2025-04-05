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
let musicTrigger = true;
let music = $("#music").get(0);

$('.parallax-wrapper').on("scroll", function () {
  if (musicTrigger) {
    music.play();
    musicTrigger = false;
    musicButton.html("<i class=\"fa-solid fa-pause fa-bounce fa-lg\"></i>");
  }
  // document.getElementById("music").play();
  // var scrollPosition = $('.parallax-wrapper').scrollTop();
  // console.log("Posisi scroll: " + scrollPosition);
});

let musicButton = $("#music-button");

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

// WALLET

$("#wallet-card").hide();
$("#wallet-card-btn").click(function () {
  $("#wallet-card").slideToggle(200);
});

// WALLET END

// GALLERY

$(document).ready(function () { 
    let count = $(".slider[reserve='false'] .list").children().length;
    $('html').css('--quantity', count);
    // console.log("Jumlah anak langsung: " + count);
    for (let i = 0; i < count; i++) {
      $(".slider[reserve='false'] .list").children().eq(i).css("--position", i + 1);
    // console.log("Anak ke-" + (i + 1) + ": " + $(".slider[reserve='false'] .list").children().eq(i).css("--position"));
  }
    let countReserve = $(".slider[reserve='true'] .list").children().length;
    $('html').css('--quantity', countReserve);
    // console.log("Jumlah anak langsung: " + countReserve);
    for (let i = 0; i < countReserve; i++) {
      $(".slider[reserve='true'] .list").children().eq(i).css("--position", i + 1);
    // console.log("Anak ke-" + (i + 1) + ": " + $(".slider[reserve='true'] .list").children().eq(i).css("--position"));
  }
});


// END GALLERY