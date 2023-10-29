
$(function(){
  var year  = new Date().getFullYear();
  $(".copyright-date").text(year);
});
document.getElementById("viewResume").addEventListener("click", function() {
    document.getElementById("resumeContainer").style.display = "block";
});
