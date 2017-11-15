$(document).ready(function() {

  $('#wm').on('click', function() {
    let pom = +$('#wt').text();
    if (pom > 1) {
      pom = pom - 1;
    }
    if(pom <10)
      pom = "0"+pom
    $('#wt').text(pom);
  });

  $('#wp').on('click', function() {
    let pom = +$('#wt').text();
    if(pom < 60)
      pom = pom + 1;
    else alert("Really? If you push it so far it kinda looses the sence...")
    $('#wt').text(pom);
  });

  $('#bm').on('click', function() {
    let pom = +$('#bt').text();
    if (pom > 1) {
      pom = pom - 1;
    }
    $('#bt').text(pom);
  });

  $('#bp').on('click', function() {
    let pom = +$('#bt').text();
    if(pom < 30)
      pom = pom + 1;
    else alert("Really? If you push it so far it kinda looses the sence...")
    $('#bt').text(pom);
  });

});
