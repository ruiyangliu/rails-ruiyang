/*$(function () {
  //Initial load of page
  $(document).ready(sizeContent);

  //Every resize of window
  $(window).resize(sizeContent);

  //Dynamically assign height
  function sizeContent() {
      var newHeight = $(window).height() - $("#header").height() - $("#footer").height() + "px";
      $("#content").css("min-height", newHeight);
  }
*/
/*
  var className = $(".selected-skill").attr('class').split(' ')[0];
  $("."+className).show();

  $(".skill-element").hover(function(){
      //$(".skill-element").removeClass("selected-skill");
      if(!$(this).hasClass("selected-skill")){
        $(this).addClass("hovered-skill");
        $(this).fadeTo(300, 1);
      }
    },function(){
      if(!$(this).hasClass("selected-skill")){
        $(this).fadeTo(300, 0.5);
        $(".skill-element").removeClass("hovered-skill");
      }
  });

  $(".skill-element").click(function(){
    $(".selected-skill").fadeTo(300, 0.5);
    $(".skill-element").removeClass("selected-skill");
    $(this).addClass("selected-skill");
    var className = $(".selected-skill").attr('class').split(' ')[0];
    $(".skills-title").hide();
    $(".skills-notes").hide();
    $("."+className).show();
  });*/
});
