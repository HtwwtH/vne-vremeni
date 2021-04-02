$(document).ready(function () {
  // show hidden submenu in PC version
  $submenu = $(".header__submenu-block");
  $("#showSubmenu").mouseenter(function () {
    $submenu.slideDown(300);
  });
  $submenu.mouseleave(function (e) {
    if (e.relatedTarget.id) {
      if (e.relatedTarget.id == "showSubmenu") { }
    }
    else
      $submenu.slideUp(300);
  });
  $("#showSubmenu").mouseleave(function (e) {
    if ((e.relatedTarget).outerHTML.indexOf("header__submenu") == -1)
      $submenu.slideUp(300);
    else { }
  });

  // show Mobile Menu
  $("#showMobileMenu").click(function () {
    $("#overlay").fadeIn(300, "linear");
    $("#header-mobile__menu").animate({ width: 'toggle' }, 300);
  });

  // show Mobile Menu
  $("#returnMobileMenu").click(function () {
    $("#mobile-submenu").animate({ width: 'toggle' }, 300);
  });

  // show Mobile Submenu
  $("#showMobileSubmenu").click(function () {
    $("#mobile-submenu").animate({ width: 'toggle' }, 300);
  });

  // Swipe events of mobile menu
  $("#header-mobile__menu").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == "left") {
        $("#overlay").fadeOut(300, "linear");
        $("#header-mobile__menu").animate({ width: 'toggle' }, 300);
      }
    }
  });
  $("#overlay").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == "left") {
        if ($("#mobile-submenu").css("display") == "block") {
          $("#mobile-submenu").animate({ width: 'toggle' }, 300);
          event.preventDefault();
          event.stopPropagation();
          swiping = true;
        }
        else if ($("#header-mobile__menu").css("display") == "block") {
          $("#overlay").fadeOut(300, "linear");
          $("#header-mobile__menu").animate({ width: 'toggle' }, 300);
        }
      }
    },
    click: function (event, target) {
      if ($("#mobile-submenu").css("display") == "block") {
        $("#mobile-submenu").animate({ width: 'toggle' }, 300);
      }
      if ($("#header-mobile__menu").css("display") == "block") {
        $("#overlay").fadeOut(300, "linear");
        $("#header-mobile__menu").animate({ width: 'toggle' }, 300);
      }
    }
  });
  $("#mobile-submenu").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == "left") {
        $("#mobile-submenu").animate({ width: 'toggle' }, 300);
        event.preventDefault();
        event.stopPropagation();
        swiping = true;
      }
    }
  });
  $("#header-mobile__menu").swipe({ allowPageScroll: "vertical" });
  $("#mobile-submenu").swipe({ allowPageScroll: "vertical" });
  $("#overlay").swipe({ allowPageScroll: "vertical" });


});