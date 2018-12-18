function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('data');
  var lastRow = sheet.getLastRow();
  
  if (typeof e !== 'undefined') {
    var contents = JSON.parse(e.postData.contents);

    // event level
    var event_id = contents.id;
    var event_created_at = contents.created;
    
    // object level
    var event_object = contents.object;
    var course_id = event_object.course_id;
    var lecture_id = event_object.lecture_id;
    var percent_complete = event_object.percent_complete;

    // course level
    var course_object = event_object.course;
    var course_name = course_object.name;

    // user level
    var user_object = event_object.user;
    var user_id = user_object.id;
    var user_email = user_object.email;
    var user_name = user_object.name;
    var user_last_sign_in_at = user_object.last_sign_in_at;
    var user_sign_in_count = user_object.sign_in_count;
    var user_unsubscribe = user_object.unsubscribe_from_marketing_emails;

    // lecture level
    var lecture_object = event_object.lecture;
    var lecture_name = lecture_object.name;

    // put into array for Sheet
    var newRow = [];

    newRow.push(
    	event_id,
    	event_created_at,
    	course_id,
    	lecture_id,
    	percent_complete,
    	course_name,
    	user_id,
    	user_email,
    	user_name,
    	user_last_sign_in_at,
    	user_sign_in_count,
    	user_unsubscribe,
   		lecture_name
   		);


    // paste data into Sheet
    sheet.getRange(lastRow + 1,1,1,14).setValues([newRow]);
    
  }
  return;
}