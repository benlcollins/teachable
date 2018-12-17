function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Sheet1');
  
  if (typeof e !== 'undefined') {
    var data = JSON.stringify(e);
    
    // paste data into Sheet
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow + 1,1).setValue(data);
    
  }
  return;
}
