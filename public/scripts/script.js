// Makes sure the DOM is ready
$(document).ready(function() {

  // Get variables for the DOM to speed it up
  var openAll = $(".open-all");
  var closeAll = $(".close-all");
  var flipContainer = (".flip-container");
  var top = $(".top");
  var htmlBody = $("html, body");
  var wat = $(".wat");
  var watModal = $(".wat-modal");
  var watModalClose = $(".wat-modal, close");
  var no = $(".no");
  var amendmentCard = $(".amendment-card");
  var button = $(".button");
  var thumbsUp = $(".thumbs-up");


  // Open all of the cards to show amendment definition
  $(openAll).on("click", function() {
    $(flipContainer).each(function() {
      $(this).addClass("flip");
    });
  });

  // Closes all of the .amendment-card cards
  $(closeAll).on("click", function() {
    $(flipContainer).each(function() {
      $(this).removeClass("flip");
    });
  });

  // Scrolls the page to the top
  $(top).click(function(){
    $(htmlBody).animate({scrollTop : 0},1250);
    return false;
  });

  // Wat modal code
  $(wat).on("click", function() {
    $(watModal).css("display", "block");
  });

  // On click closes the .wat-modal if .wat-modal is clicked
  $(watModalClose).on("click", function(event) {
    if (!$(event.target).is(".wat-modal, .close")) {
      return;
    } else {
        $(watModal).css("display", "none");
    }
  });

  // Function for 'No' button
  // Gets each .button.no elements
  $(no).each(function() {

    // for whatever .flip-button class is clicked a click event is hooked to it
    $(this).on("click", function() {

      // finds closest .amendment-card card finds .flip-container to toggle the class
      $(this).closest(amendmentCard).find(flipContainer).toggleClass("flip");
      $(this).closest(amendmentCard).find(thumbsUp).animate({"opacity": "0", "height": "0"}, 450);
    });
  });

  // Function for 'Yes' button
  // Gets each .button.no elements
  $(".yes").each(function() {

    // for whatever .flip-button class is clicked a click event is hooked to it
    $(this).on("click", function() {

      // finds closest .amendment-card card finds .flip-container to remove the class
      $(this).closest(amendmentCard).find(flipContainer).removeClass("flip");
      $(this).closest(amendmentCard).find(thumbsUp).animate({"opacity": "1", "height": "152px"}, 450);

    });
  });


  // Changes the CSS of the .button class to make it look like its being clicked
  $(button).each(function() {

    // mousedown removes the box shadow
    $(this).mousedown(function() {

      // removing the box shadow
      $(this).css('box-shadow', '0 0 0 0');
    });

    // mouseup adds the box shadow back
    $(this).mouseup(function() {

      // adding the box shadow back
      $(this).css('box-shadow', '.07em .07em .2em 0 rgba(158,158,158 ,1)');
    });
  });
});
