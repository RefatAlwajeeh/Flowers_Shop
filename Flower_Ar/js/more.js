$('.posts .holder').slice(0,3).show();

$('#btnMore').on('click', function() {
  $('.posts .holder:hidden').slice(0,3).slideDown();
  if($('.posts .holder:hidden').length === 0) {
    $('#btnMore').fadeOut();
  }
});