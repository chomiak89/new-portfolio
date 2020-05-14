//INITIALIZE AOS
AOS.init({ duration: 1200, once: false });

$(window).on("load", () => {
  //NAME LOGO
  $(".logo-animation-container").addClass("playing");
  //SOCIAL MEDIA ICONS
  $(".animated-li-1").addClass("playing");
  $(".animated-li-2").addClass("playing");
  $(".animated-li-3").addClass("playing");
  //MAIN CONTENT
  $(".landing-heading-animated-span-1").addClass(
    "landing-heading-animated-span-1-playing"
  );
  $(".landing-heading-animated-span-2").addClass(
    "landing-heading-animated-span-2-playing"
  );
  $(".landing-heading").addClass("landing-heading-playing");
  $(".landing-paragraph-1").addClass("landing-paragraph-1-playing");
  $(".landing-paragraph-2").addClass("landing-paragraph-2-playing");
  //MAIN IMAGE
  $(".main-image").addClass("main-image-playing");
  //MAIN NAVIGATION LINKS ON THE LEFT SIDE
  $(".faded-link-1").addClass("faded-link-playing");
  $(".faded-link-2").addClass("faded-link-playing");
  $(".faded-link-3").addClass("faded-link-playing");
  //SCROLL NOTIFICATION
  $(".scrollNotification").addClass("scrollNotification-playing");
});

// $(document).ready(function () {
//   $(document).on("scroll", onScroll);

//smoothscroll
$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  $(document).off("scroll");

  $("a").each(function () {
    $(this).removeClass("active");
  });
  $(this).addClass("active");

  var target = this.hash,
    menu = target;
  $target = $(target);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top + 2,
      },
      500,
      "swing",
      function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      }
    );
});
// });
// function onScroll(event) {
//   var scrollPos = $(document).scrollTop();
//   $(".links-container a").each(function () {
//     var currLink = $(this);
//     var refElement = $(currLink.attr("href"));
//     if (
//       refElement.position().top <= scrollPos &&
//       refElement.position().top + refElement.height() > scrollPos
//     ) {
//       $(".links-container ul li a").removeClass("active");
//       currLink.addClass("active");
//     } else {
//       currLink.removeClass("active");
//     }
//   });
// }
