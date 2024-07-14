$('#open').on('click', function () {
    $('#menu').toggleClass('-ms-44');

    console.log("working");
});

// Optionally, toggle group class using JavaScript
$(document).ready(function() {
  // Use event delegation for hover effect on dynamically added '.relative' elements
  $(document).on('mouseenter', '.relative', function() {
      $(this).find('.layer').css('transform', 'translateY(0)');
      $(this).css('cursor', 'pointer'); // Change cursor to pointer on hover
  }).on('mouseleave', '.relative', function() {
      $(this).find('.layer').css('transform', 'translateY(100%)');
      $(this).css('cursor', 'auto'); // Reset cursor on mouse leave
  });
});





