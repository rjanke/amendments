// window.onload = function() {
//
//   // get the button to flip the card
//   var flipButton = document.getElementById("flip-button");
//
//   flipButton.onclick = function() {
//     document.querySelector("#flip").classList.toggle("flip");
//   };
//
//
// };
// function flip(event) {
//   document.querySelector("#flip").classList.toggle("flip");
// };
// document.addEventListener('DOMContentLoaded', function() {
//   var cards = document.querySelectorAll(".amendment-card");
//   var flipButtons = document.querySelectorAll("#flip-button");
//   var flip = document.querySelector(".flip-container");
//
//   console.log("Flip button: " + flipButtons.length);
//   console.log("Card: " + cards.length);
//
//   for (var i = 0; i < cards.length; i++) {
//     flipButtons[i].addEventListener("click", function(event) {
//       var elem = flipButtons[i];
//       console.log(elem);
//     });
//   };
//
//   document.body.addEventListener("click", function(event) {
//     if (event.target.nodeName == "BUTTON")
//       flip.classList.toggle("flip");
//   });
// }, false);

// Makes sure the DOM is ready
$(document).ready(function() {

  // Open all of the cards to show amendment definition
  $(".open-all").on("click", function() {
    $(".flip-container").each(function() {
      $(this).addClass("flip");
    });
  });

  // Closes all of the .amendment-card cards
  $(".close-all").on("click", function() {
    $(".flip-container").each(function() {
      $(this).removeClass("flip");
    });
  });

  // Scrolls the page to the top
  $('.top').click(function(){
    $('html, body').animate({scrollTop : 0},1250);
    return false;
  });

  // Wat modal code
  $(".wat").on("click", function() {
    $(".wat-modal").css("display", "block");
  });

  // On click closes the .wat-modal if .wat-modal is clicked
  $(".wat-modal, .close").on("click", function(event) {
    if (!$(event.target).is(".wat-modal, .close")) {
      return;
    } else {
        $(".wat-modal").css("display", "none");
    }
  });

  // Function for 'No' button
  // Gets each .button.no elements
  $(".no").each(function() {

    // for whatever .flip-button class is clicked a click event is hooked to it
    $(this).on("click", function() {

      // finds closest .amendment-card card finds .flip-container to toggle the class
      $(this).closest(".amendment-card").find(".flip-container").toggleClass("flip");
    });
  });

  // Function for 'Yes' button
  // Gets each .button.no elements
  $(".yes").each(function() {

    // for whatever .flip-button class is clicked a click event is hooked to it
    $(this).on("click", function() {

      // finds closest .amendment-card card finds .flip-container to remove the class
      $(this).closest(".amendment-card").find(".flip-container").removeClass("flip");
    });
  });


  // Changes the CSS of the .button class to make it look liek its being clicked
  $(".button").each(function() {

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
