//variables
var nav = $('nav');
var navCollapse = $('.navbar-collapse');
var sections = $('.section');
var menuBtn = $('.menubtn');
var arrowDown = $('.arrow-down');
var discoverBtn = $('#discover-btn');
var contactBtn = $('#contact-btn');

$(document).ready(function(){
  setNavLinks();
  handleScroll();
  setMenuBtn();
  setButtons();
  setEnterView();
});

function setNavLinks() {
  nav.find("a").click(function(e){
    $('body, html').removeAttr('style');
    section = $(this).attr("href");
    $('.section').removeClass('blur');
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 500);
    navCollapse.collapse('hide');
    menuBtn.addClass('play-reverse');
    menuBtn.removeClass('play');
  });
}

function handleScroll() {
  $(document).bind('scroll',function(e){
    $('.section').each(function(){
        if (
           $(this).offset().top < window.pageYOffset + 100
        && $(this).offset().top + $(this).height() > window.pageYOffset + 100
        ) {
          section = $(this).attr('id');
          element = $('#'+section);
          element.removeAttr('id');
          location.hash = section;
          element.attr('id',section);
          setActiveLink('#'+section);
        }
    });
});
}

function setActiveLink(section) {
  nav.find("a").removeClass('active');
  nav.find('a[href="'+ section +'"]').addClass('active');
}

function setMenuBtn() {
  menuBtn.click(function(){
    if (menuBtn.hasClass('play')) {
      menuBtn.addClass('play-reverse');
      menuBtn.removeClass('play');
      navCollapse.collapse('hide');
      $('.section').removeClass('blur');
      $('body, html').removeAttr('style');
    } else {
        menuBtn.addClass('play');
        menuBtn.removeClass('play-reverse');
        navCollapse.collapse('show');
        $('.section').addClass('blur');
        $('body, html').css('overflow', 'hidden');
    }
  });
}

function setButtons() {
  arrowDown.click(function(){
    $('html,body').animate({
      scrollTop: $('#about').offset().top
    }, 500);
  });

  discoverBtn.click(function(){
    $('html,body').animate({
      scrollTop: $('#book').offset().top
    }, 500);
  });

  contactBtn.click(function(){
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 500);
  });
}

function setEnterView() {
  enterView({
    selector: '.enter-view',
    enter: function(el) {
      el.classList.add('entered');
    },
    offset: 0.35,
    exit: function(el) {
      el.classList.remove('entered');
    }
  });

  enterView({
    selector: '.enter-view-low',
    enter: function(el) {
      el.classList.add('entered');
    },
    offset: 0.5,
    exit: function(el) {
      el.classList.remove('entered');
    }
  })
}
