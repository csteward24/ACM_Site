// none of this is tested yet

var dataRef = firebase.database().ref("announcements");

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

var post = function() {
  var title = $("#title").val();
  var subject = $("#subject").val();
  var text = $("#text").val();
  var committee = $("#committee").val();

  if (title == "") {
    showError("Title is empty.");
  } else if (subject == "") {
    showError("Subjcet is empty.");
  } else if (text == "") {
    showError("Text is empty.");
  } else if (committee == "") {
    showError("Committee is empty.");
  } else {
    var time = Date.now() / 1000;

    dataRef.push({
      title: title,
      subj: subject,
      text: text,
      committee: committee,
      timestamp: time
    });

  }
};

var showError = function(message) {
  $("#prob-alert").html(message);
  $("#prob-alert").show();
};