function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xCvo63J0U1":
        Script1();
        break;
      case "6alGgi7XTco":
        Script2();
        break;
      case "6gnXjDZLWIu":
        Script3();
        break;
      case "5nEwumOumEH":
        Script4();
        break;
      case "5vuR4fhL91g":
        Script5();
        break;
      case "6jAsugxwOCx":
        Script6();
        break;
      case "6bZQ9mLBVwD":
        Script7();
        break;
      case "5bqO5YzMFjX":
        Script8();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script7()
{
  $("#tab-customlink").show();
}

function Script8()
{
  window.print();
}

