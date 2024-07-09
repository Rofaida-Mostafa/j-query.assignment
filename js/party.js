$(window).on("load", function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//  >>>> Text section: <<<<

window.addEventListener("load", () => {
  $(".one .other-mes").fadeOut(0);
});

$(".one h3").click(function () {
  $(".one div").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

//  >>>> countdown timer: <<<<

// for select date
let countDownDate = new Date("2024-7-28 18:59:59").getTime();

console.log(countDownDate);
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  $(".days").html(`${days < 10 ? `0 ${days}` : days} days`);
  $(".hours").html(`${hours < 10 ? `0${hours}` : hours} h`);
  $(".minutes").html(`${minutes < 10 ? `0${minutes}` : minutes} m`);
  $(".seconds").html(`${seconds < 10 ? `0${seconds}` : seconds} s`);

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

//  >>>> Available characters: <<<<

let maxLength = 100;

$(function () {
  $("#count").keyup(function (e) {
    let availableLetters = maxLength - $(this).val().length;
    $("#count-no").text($(this).val().length);
    let x = $(this).val().length;
    if (x >= 100) {
      $(this).css("border", "1px solid red");
      $(".error-msg").html("Available character finished!").show();
    } else {
      $(".error-msg").hide();
      $(this).css("border", "");
    }
  });
});


$(".colors-icon").click(() => {


  $(".coloring-option").animate({ left: `-0px` }, 300);
});


$("#close").click(() => {
 
  $(".coloring-option").animate({ left: `-250px` }, 300);
});




// $(".colors-icon").click(() => {
//   let widthColor = $(".coloring-option").css("left");
//   console.log(widthColor);
//   let left = $(".coloring-option").css("left") == "0px" ? widthColor : "0";
//   console.log(left);
//   $(".coloring-option").animate({ left: `-${left}px` }, 300);
// });

// let colors = ["red", "orange", "blue", "yellow"];
// colors.forEach((color) => {
//   $(".colors ul").append(`<li style="background-color:${color} "></li>`);
// });
