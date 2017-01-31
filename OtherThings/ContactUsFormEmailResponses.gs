// This is borrowed from this example on the Google Docs help forum: https://productforums.google.com/forum/#!topic/docs/5V_o-uqVaD4;context-place=topicsearchin/docs/form$20results$20in$20email
// Updated (slightly) in October 2016 by Ryan Brooks.
function Initialize() {
 
    var triggers = ScriptApp.getProjectTriggers();
 
    for (var i in triggers) {
        ScriptApp.deleteTrigger(triggers[i]);
    }
 
    ScriptApp.newTrigger("SendFormToEmail")
        .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
        .onFormSubmit()
        .create();
       
}


function SendFormToEmail(e) {
  var ss, subject, columns;
  var message, value, textbody;
  var sendToEmail;
  var rowCount;
  
  // Who do you want the results sent to?
  sendToEmail = "umslreslife@umsl.edu";
  
  // Setup Subject & Start of Message Body  
  subject = "New Contact Us Request - Details";
  message = "The following message was just submitted through the new Contact Us form on the test website:<br>";
  textbody = message;
  
  // Grab most recent submission data from spreadsheet
  ss = SpreadsheetApp.getActiveSheet();
  columns = ss.getRange(1,1,1,ss.getLastColumn()).getValues()[0];
  
  // Build Field/Value Table
  message += '<table cellpadding=5 width=100%>';
  
  // Only include form values which are not blank
  rowCount = 0;
  for (var keys in columns) {
    var key = columns[keys];
    if (e.namedValues[key] != '') {
      rowCount += 1;
      message += '<tr style="background-color: ' + ((rowCount % 2 == 0) ? '#fafafa' : '#ffffff') + '"><td><strong>'+((key == 'Timestamp') ? 'Submission Date' : key)+'</strong></td><td>' + e.namedValues[key] + '</td></tr>'; 
      textbody += ((key == "Timestamp") ? "Submission Date" : key) + ": "+e.namedValues[key]+"<br>";      
    }
   }
  
  // Complete Messsage Body
  message += "</table>"
  
  // Replace HTML Tags in Text Body
  textbody = textbody.replace("<br>","\n");
  
  // Send Email
  MailApp.sendEmail(sendToEmail, subject, textbody, {htmlBody: message, noReply: true});
  
}
