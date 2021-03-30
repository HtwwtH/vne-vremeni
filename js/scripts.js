$(document).ready(function () {
  $submenu = $(".header__submenu-block");
  $("#showSubmenu").mouseenter(function () {
    $submenu.slideDown(300);
  });
  $submenu.mouseleave(function (e) {
    console.log(e.relatedTarget.id);
    if (e.relatedTarget.id == "showSubmenu")
      {}
    else
      $submenu.slideUp(300);
  });

});