"use strict";

$(document).ready(function () {
  $('.bars').click(function () {
    $('.header-menu, .overlay').addClass('active');
  });
  $('.close-mobile').click(function () {
    $('.header-menu, .overlay').removeClass('active');
  });
});