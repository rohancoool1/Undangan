// DATE DEMO
$(".day").text("Selasa" + ", " + "23");
$(".month").text("Februari");
$(".year").text("2050");
$(".akad h4:eq(0)").text("23 Februari 2050");
$(".resepsi h4:eq(0)").text("23 Februari 2050");
$(".akad h4:eq(1) span:eq(0)").text("10:00");
$(".resepsi h4:eq(1) span:eq(0)").text("12:00");
$(".info > h5").text("Jl. Metro Tj. Bunga No.995, Mattoangin, Kec. Mariso, Kota Makassar, Sulawesi Selatan 90224");
$(".info .iframe-wrapper > iframe").attr("src", `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${$(".info > h5").text().split(" ").join("%20")}+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed`);
let date = ["February", 23, ",", 2050, $(".akad h4:eq(1) span:eq(0)").text()].join(" ");

// SCROLL LOCK
$("#lick-me").click(function () {
  $(".parallax-wrapper").css("overflow-y", "auto");
  $(".parallax-wrapper").animate({
    scrollTop: $("#content").offset().top
  }, 1000); // 1000 adalah durasi dalam milidetik (1 detik)
  $("#music").get(0).play();
  $("#music-button").html("<i class=\"fa-solid fa-pause fa-bounce fa-lg\"></i>");
});
// SCROLL LOCK END

// MUSIC BUTTON
$("#music-button").click(function () {
  if ($("#music").get(0).paused) {
    $("#music").get(0).play();
    $(this).html("<i class=\"fa-solid fa-pause fa-bounce fa-lg\"></i>");
  } else {
    $("#music").get(0).pause();
    $(this).html("<i class=\"fa-solid fa-play fa-lg\"></i>");
  }
});
// MUSIC BUTTON END

// HERO NAME
for (let i = 0; i < $("#hero h1").children("span").length; i++) {
  $("#hero h1 > span:eq(" + i + ")").on('click', function () {
    $("#hero h1 > input:eq(" + i + ")").show();
    $("#hero h1 > input:eq(" + i + ")").focus();
    if (i != 1) {
      $(this).hide();
    }
  });
  $("#hero h1 > input:eq(" + i + ")").on('blur', function () {
    $(this).hide();
    if ($(this).val() != "") {
      $("#hero h1 > span:eq(" + i + ")").text($(this).val());
      $(".home h2:eq(" + i + ")").text($(this).val());
      $(".close h2 > span:eq(" + i + ")").text($(this).val());
    }
    $("#hero h1 > span:eq(" + i + ")").show();
  });
}
// HERO NAME END

// HERO DATE
const monthName = [
  "tidack ada", "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

const monthNameEnglish = [
  "tidack ada", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const monthNumber = {
  "januari": 1,
  "februari": 2,
  "maret": 3,
  "april": 4,
  "mei": 5,
  "juni": 6,
  "juli": 7,
  "agustus": 8,
  "september": 9,
  "oktober": 10,
  "november": 11,
  "desember": 12
};

const dayName = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

$("#ceremony").on("click", function () {
  $(this).hide();
  $("#ceremonyInput").show();
  $("#ceremonyInput").css("display", "block");
  $("#ceremonyInput").focus();
})

$('#ceremonyInput').on("blur", function () {
  $("#ceremony").show();
  const value = $(this).val();
  if (value) {
    const [year, month, day] = value.split("-");
    $(".day").text(dayName[new Date(value).getDay()] + ", " + day);
    $(".month").text(monthName[parseInt(month, 10)]);
    $(".year").text(year);
    date = [monthNameEnglish[parseInt(month, 10)], day, ",", year, $(".akad h4:eq(1) span:eq(0)").text()].join(" ");
  }
  $(this).hide();
});
// HERO DATE END

// INFO LOCATION
$(".info > h5").on("click", function () {
  $(this).hide();
  $('.info input:eq(0)').show();
  $('.info input:eq(0)').focus();
});

$('.info input:eq(0)').on('blur', function () {
  $(this).hide();
  if ($(this).val()) {
    $(".info > h5").text($(this).val());
    $(".info .iframe-wrapper > iframe").attr("src", `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${$(this).val().split(" ").join("%20")}+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed`)
  }
  $(".info > h5").show();
});
// INFO LOCATION END

// INFO DATE
$(".akad h4:eq(0)").on("click", function () {
  $(".akad input:eq(0)").show();
  $(".akad input:eq(0)").focus();
  $(this).hide();
});

$(".akad input:eq(0)").on("blur", function () {
  $(this).hide();
  $(".akad h4:eq(0)").show();
  const value = $(this).val();
  if (value) {
    const [year, month, day] = value.split("-");
    $(".akad h4:eq(0)").text(day + " " + monthName[parseInt(month, 10)] + " " + year);
  }
});

$(".resepsi h4:eq(0)").on("click", function () {
  $(".resepsi input:eq(0)").show();
  $(".resepsi input:eq(0)").focus();
  $(this).hide();
});

$(".resepsi input:eq(0)").on("blur", function () {
  $(this).hide();
  $(".resepsi h4:eq(0)").show();
  const value = $(this).val();
  if (value) {
    const [year, month, day] = value.split("-");
    $(".resepsi h4:eq(0)").text(day + " " + monthName[parseInt(month, 10)] + " " + year);
  }
});
// INFO DATE END

// INFO TIME 
$(".akad h4:eq(1)").on("click", function () {
  $(".akad input:eq(1)").show();
  $(".akad input:eq(1)").focus();
  $(this).hide();
});

$(".akad input:eq(1)").on("blur", function () {
  $(this).hide();
  $(".akad h4:eq(1)").show();
  const value = $(this).val();
  if (value) {
    $(".akad h4:eq(1) span:eq(0)").text(value);
    date = [monthNameEnglish[monthNumber[$("#hero .month").text().toLowerCase()]], parseInt($("#hero .day").text().split(', ')[1], 10), ",", parseInt($("#hero .year").text(), 10), $(".akad h4:eq(1) span:eq(0)").text()].join(" ");
  }
});

$(".resepsi h4:eq(1)").on("click", function () {
  $(".resepsi input:eq(1)").show();
  $(".resepsi input:eq(1)").focus();
  $(this).hide();
});

$(".resepsi input:eq(1)").on("blur", function () {
  $(this).hide();
  $(".resepsi h4:eq(1)").show();
  const value = $(this).val();
  if (value) {
    $(".resepsi h4:eq(1) span:eq(0)").text(value);
  }
});
// INFO TIME END

// COUNTDOWN
var x = setInterval(function () {
  var countDownDate = new Date(date).getTime();
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = "<div class='day'>" + "<span>" + days + " </span>" + "Hari " + "</div>" + "<div class='hour'>" + "<span>" + hours + " </span>" + "Jam "
    + "</div>" + "<div class='minute'>" + "<span>" + minutes + " </span>" + "Menit " + "</div>" + "<div class='second'>" + "<span>" + seconds + " </span>" + "Detik " + "</div>";

  if (distance < 0) {
    // clearInterval(x);
    document.getElementById("timer").innerHTML = "<h3><b style='color: red;'>Acara telah selesai</b></h3>";
  }
}, 1000);
// COUTNDOWN END

// WALLET
$("#wallet-card").hide();
$("#wallet-card-btn").click(function () {
  $("#wallet-card").slideToggle(200);
});
for (let i = 0; i < $("#wallet-card > div.col").length; i++) {
  $(`#wallet-card > div.col:eq(${i}) .wallet-card-header p`).on("click", function () {
    $(this).hide();
    $(`#wallet-card > div.col:eq(${i}) .wallet-card-header input`).show();
    $(`#wallet-card > div.col:eq(${i}) .wallet-card-header input`).focus();
  });
  $(`#wallet-card > div.col:eq(${i}) .wallet-card-header input`).on("blur", function () {
    $(this).hide();
    if ($(this).val()) {
      $(`#wallet-card > div.col:eq(${i}) .wallet-card-header p`).text($(this).val());
    }
    $(`#wallet-card > div.col:eq(${i}) .wallet-card-header p`).show();
  });

  for (let j = 0; j < $(`#wallet-card > div.col:eq(${i}) > .wallet-card > p`).length; j++) {
    $(`#wallet-card > div.col:eq(${i}) > .wallet-card > p:eq(${j})`).on("click", function () {
      $(this).hide();
      $(`#wallet-card > div.col:eq(${i}) > .wallet-card > input:not([hidden]):eq(${j})`).show();
      $(`#wallet-card > div.col:eq(${i}) > .wallet-card > input:not([hidden]):eq(${j})`).focus();
      if ($(`#wallet-card > div.col:eq(${i}) > .wallet-card > input:not([hidden]):eq(${j})`).nextAll('br').length === 2) {
        $(`#wallet-card > div.col:eq(${i}) > .wallet-card > input:not([hidden]):eq(${j})`).after("<br>");
        $(`#wallet-card > div.col:eq(${i}) > .wallet-card > input:not([hidden]):eq(${j})`).after("<br>");
      }
    });

    $(`#wallet-card > div.col:eq(${i}) > .wallet-card > input:not([hidden]):eq(${j})`).on("blur", function () {
      $(this).hide();
      if ($(this).val()) {
        $(`#wallet-card > div.col:eq(${i}) > .wallet-card > p:eq(${j})`).text($(this).val());
      }
      $(`#wallet-card > div.col:eq(${i}) > .wallet-card > p:eq(${j})`).show();
      if ($(`#wallet-card > div.col:eq(${i}) > .wallet-card > input:not([hidden]):eq(${j})`).nextAll('br').length === 4) {
        $(`#wallet-card > div.col:eq(${i}) > .wallet-card > br:eq(0)`).remove();
        $(`#wallet-card > div.col:eq(${i}) > .wallet-card > br:eq(1)`).remove();
      }
    });
  }
}
// WALLET END

// COPY WALLET
function copyText(event) {
  let textWallet = document.getElementById("text-wallet");
  let copyWallet = document.getElementById("copy-wallet");
  copyWallet.value = textWallet.innerText;
  copyWallet.select();
  copyWallet.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyWallet.value);
  event.target.innerText = "copied";
  setTimeout(() => {
    event.target.innerText = "copy";
  }, 3000);

}

function copyText2(event) {
  let textWallet = document.getElementById("text-wallet2");
  let copyWallet = document.getElementById("copy-wallet2");
  copyWallet.value = textWallet.innerText;
  copyWallet.select();
  copyWallet.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyWallet.value);
  event.target.innerText = "copied";
  setTimeout(() => {
    event.target.innerText = "copy";
  }, 3000);
}
// COPY WALLET END

// WORD
$(".word > h2").on("click", function () {
  $(".word > input").show();
  $(".word > input").focus();
  $(this).hide();
});

$(".word > input").on("blur", function () {
  if($(this).val()){
    $(".word > h2").text($(this).val());
  }
  $(".word > h2").show();
  $(this).hide();
});
// WORD END

// STORY
for (let i = 0; i <= 2; i++) {
  $("li:eq(" + i + ") .timeline-header h3").on("click", function () {
    $(this).hide();
    $("li:eq(" + i + ") .timeline-header input:eq(0)").show();
    $("li:eq(" + i + ") .timeline-header input:eq(0)").focus();
  });
  $("li:eq(" + i + ") .timeline-header p").on("click", function () {
    $(this).hide();
    $("li:eq(" + i + ") .timeline-header input:eq(1)").show();
    $("li:eq(" + i + ") .timeline-header input:eq(1)").focus();
  });
  $("li:eq(" + i + ") .timeline-header input:eq(0)").on("blur", function () {
    $(this).hide();
    if ($(this).val()) {
      $("li:eq(" + i + ") .timeline-header h3").text($(this).val());
    }
    $("li:eq(" + i + ") .timeline-header h3").show();
  });
  $("li:eq(" + i + ") .timeline-header input:eq(1)").on("blur", function () {
    $(this).hide();
    if ($(this).val()) {
      $("li:eq(" + i + ") .timeline-header p").text($(this).val());
    }
    $("li:eq(" + i + ") .timeline-header p").show();
  });

  $("li:eq(" + i + ") .timeline-body span").on("click", function () {
    $(this).hide();
    $("li:eq(" + i + ") .timeline-body input:eq(0)").show();
    $("li:eq(" + i + ") .timeline-body input:eq(0)").focus();
  });
  $("li:eq(" + i + ") .timeline-body input:eq(0)").on("blur", function () {
    $(this).hide();
    if ($(this).val()) {
      $("li:eq(" + i + ") .timeline-body span").text($(this).val());
    }
    $("li:eq(" + i + ") .timeline-body span").show();
  });
}
// STORY END

// GALLERY
$(document).ready(function () {
  let count = $(".slider[reserve='false'] .list").children().length;
  $('.slider').css('--quantity', count);
  // console.log("Jumlah anak langsung: " + $('.slider').css('--quantity'));
  
  for (let i = 0; i < count; i++) {
    $(".slider .list").children().eq(i).css("--position", i + 1);
    // console.log("Anak ke-" + (i + 1) + ": " + $(".slider[reserve='false'] .list").children().eq(i).css("--position"));
  }
  let countReserve = $(".slider[reserve='true'] .list").children().length;
  for (let i = 0; i < countReserve; i++) {
    $(".slider[reserve='true'] .list").children().eq(i).css("--position", i + 1);
  }

  $(".slider[reserve='true']").css("--duration", $(".slider[reserve='false']").css("--duration"));
  $(".slider[reserve='true']").css("--width", $(".slider[reserve='false']").css("--width"));
  $(".slider[reserve='true']").css("--height", $(".slider[reserve='false']").css("--height"));
});
// END GALLERY
