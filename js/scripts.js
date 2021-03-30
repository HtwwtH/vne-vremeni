$(document).ready(function () {
  $submenu = $(".header__submenu-block");
  $("#showSubmenu").mouseenter(function () {
    $submenu.slideDown(300);
  });
  $submenu.mouseleave(function () {
    $submenu.slideUp(300);
  });
  $("#showSubmenu").mouseleave(function () {
    $submenu.slideUp(300);
  });

});