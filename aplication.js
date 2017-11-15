let indikator = false;
let brojac = 0;
let dozvola = true;
$(document).ready(function() {

  $('#wm').on('click', function() {
    let pom = +$('#wt').text();
    if (pom > 1) {
      pom = pom - 1;
    };
    $('#wt').text(pom);
    if(pom <10)
      {$('#wt').prepend('&nbsp;');};
    if(dozvola === true){
        $('#vrime').text($('#wt').text()+":00");
        $("#vrime").prepend("&nbsp;");
      }

  });

  $('#wp').on('click', function() {
    let pom = +$('#wt').text();
    if(pom < 60)
      pom = pom + 1;
    else alert("Really? If you push it so far it kinda looses the sence...")
    $('#wt').text(pom);
    if(pom <10)
      $('#wt').prepend('&nbsp;');
      if(dozvola === true){
          $('#vrime').text($('#wt').text()+":00");
          $("#vrime").prepend("&nbsp;");
        }

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

  $('#loop').on('click', function() {
    $('#bt').text(5);
    $('#wt').text(25);
    $('#radnja').text("WORK");
    $('#vrime').text("25:00");
    $("#vrime").prepend("&nbsp;");
    indikator = false;
    dozvola = true;
  });

  $('#stop').on('click', function() {
    $('#radnja').text("WORK");
    let pom = +$('#wt').text();
    $('#vrime').text(pom+":00");
    if(pom > 9)
      $("#vrime").prepend("&nbsp;");
    else {
      $("#vrime").prepend("&nbsp;&nbsp;");
    }
    indikator = false;
    dozvola = true;
  });

  $('#play').on('click', function() {
    indikator = true;
    dozvola = false;
  });
  $('#pause').on('click', function() {
    indikator = false;
  });

setInterval(function(){
  if(indikator === true)
    {
      let pom = $('#vrime').text().split(':');
      let min = +pom[0];
      let sek = +pom[1];
      if( min !== 0 || sek !== 0)
      {
        if(sek === 0 && min !== 0)
        {
          min = min - 1;
          sek = 60;
        }
        sek = sek - 1;
      }
      else
      {
          if($('#radnja').text() === "WORK")
          {
            $('#radnja').text("BREAK");
            min = +$('#bt').text();
          }
          else
          {
            $('#radnja').text("WORK");
            min = +$('#wt').text();
          }
      }

      if(sek<10)
      {sek = "0"+sek;}
      $('#vrime').text(min+":"+sek);
      $("#vrime").prepend("&nbsp;");
      if(min < 10)
      {$("#vrime").prepend("&nbsp;");}

    }

}, 1000);
});
