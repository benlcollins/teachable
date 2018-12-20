function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('data');
  var lastRow = sheet.getLastRow();
  
  if (typeof e !== 'undefined') {

  	// save copy of raw data as string
    var stringData = JSON.stringify(e.postData.contents);
    sheet.getRange(lastRow + 1, 1).setValue(stringData);

    // parse data
    var contents = JSON.parse(e.postData.contents);
    
    // event level
    var event_id = contents.id;
    var event_created_at = contents.created;
    
    // object level
    var event_object = contents.object;
    var event_object_user_id = event_object.user_id;
    
    // transactions level
    var transactions_object = event_object.sale.transactions[0];
    var transactions_object_sale_id = (transactions_object == null) ? "" : transactions_object.sale_id;
    var transactions_object_final_price = (transactions_object == null) ? "" : (transactions_object.final_price / 100);
    var transactions_object_net_tax_charge = (transactions_object == null) ? "" : (transactions_object.net_tax_charge / 100);
    var transactions_object_affiliate_percent = (transactions_object == null) ? "" : transactions_object.affiliate_percent;
    var transactions_object_affiliate_fees = (transactions_object == null) ? "" : (transactions_object.affiliate_fees / 100);
    var transactions_object_teachable_percent = (transactions_object == null) ? "" : transactions_object.teachable_percent;
    var transactions_object_teachable_processor_fee = (transactions_object == null) ? "" : (transactions_object.teachable_processor_fee / 100);
    var transactions_object_teachable_fixed_fee = (transactions_object == null) ? "" : (transactions_object.teachable_fixed_fee / 100);
    var transactions_object_total_teachable_fee = (transactions_object == null) ? "" : (transactions_object.total_teachable_fee / 100);
    var transactions_object_net_charge = (transactions_object == null) ? "" : (transactions_object.net_charge / 100);
    var transactions_object_earnings_usd = (transactions_object == null) ? "" : (transactions_object.earnings_usd / 100);
    var transactions_object_payment_method = (transactions_object == null) ? "" : transactions_object.payment_method;


    // put into array for Sheet
    var newRow = [];

    newRow.push(
    	event_id,
    	event_created_at,

    	event_object_user_id,

    	transactions_object_sale_id,
    	transactions_object_final_price,
        transactions_object_net_tax_charge,
    	transactions_object_affiliate_percent,
    	transactions_object_affiliate_fees,
    	transactions_object_teachable_percent,
    	transactions_object_teachable_processor_fee,
    	transactions_object_teachable_fixed_fee,
    	transactions_object_total_teachable_fee,
    	transactions_object_net_charge,
    	transactions_object_earnings_usd,
    	transactions_object_payment_method
			
    	);

		Logger.log(newRow);

    // paste data into Sheet
    sheet.getRange(lastRow + 1,2,1,15).setValues([newRow]);
    
  }
  return;
}
