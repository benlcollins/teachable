function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('data');
  
  if (typeof e !== 'undefined') {
    var contents = JSON.parse(e.postData.contents);

    Logger.log(contents);

    // event level
    var event_id = contents.id;
    var event_created_at = contents.created;
    
    // object level
    var event_object = contents.object;
    var event_object_user_id = event_object.user_id;
    var event_object_currency = event_object.currency;
    var event_object_final_price = event_object.final_price;
    
    // course level
    var course_object = event_object.course;
    var course_object_id = course_object.id;
    var course_object_name = course_object.name;

    // user level
    var user_object = event_object.user;
    var user_object_id = user_object.id;
    var user_object_email = user_object.email;
    var user_object_name = user_object.name;
    var user_object_src = user_object.src;
    var user_object_last_sign_in_at = user_object.last_sign_in_at;
    var user_object_sign_in_count = user_object.sign_in_count;
    var user_object_unsubscribe = user_object.unsubscribe_from_marketing_emails;
		
    // coupon level
    var coupon_object = event_object.coupon;
    var coupon_object_new_purchase_price = (coupon_object == null) ? "" : coupon_object.new_purchase_price;
    var coupon_object_number_available = (coupon_object == null) ? "" : coupon_object.number_available;
    var coupon_object_code = (coupon_object == null) ? "" : coupon_object.code;
    var coupon_object_name = (coupon_object == null) ? "" : coupon_object.name;
    var coupon_object_expiration = (coupon_object == null) ? "" : coupon_object.expiration_date;
    var coupon_object_uses = (coupon_object == null) ? "" : coupon_object.number_of_uses;
    
    // affiliate level
    var affiliate_object = event_object.affiliate;
    var affiliate_object_id = (affiliate_object == null) ? "" : affiliate_object.id;
    var affiliate_object_email = (affiliate_object == null) ? "" : affiliate_object.email;
    var affiliate_object_name = (affiliate_object == null) ? "" : affiliate_object.name;
    
    // transactions level
    var transactions_object = event_object.transactions[0];
    var transactions_object_final_price = (transactions_object == null) ? "" : transactions_object.final_price;
    var transactions_object_affiliate_percent = (transactions_object == null) ? "" : transactions_object.affiliate_percent;
    var transactions_object_affiliate_fees = (transactions_object == null) ? "" : transactions_object.affiliate_fees;
    var transactions_object_teachable_percent = (transactions_object == null) ? "" : transactions_object.teachable_percent;
    var transactions_object_teachable_processor_fee = (transactions_object == null) ? "" : transactions_object.teachable_processor_fee;
    var transactions_object_teachable_fixed_fee = (transactions_object == null) ? "" : transactions_object.teachable_fixed_fee;
    var transactions_object_total_teachable_fee = (transactions_object == null) ? "" : transactions_object.total_teachable_fee;
    var transactions_object_net_charge = (transactions_object == null) ? "" : transactions_object.net_charge;
    var transactions_object_earnings_usd = (transactions_object == null) ? "" : transactions_object.earnings_usd;
    var transactions_object_payment_method = (transactions_object == null) ? "" : transactions_object.payment_method;
		
    // put into array for Sheet
    var newRow = [];

    newRow.push(
    	event_id,
    	event_created_at,

    	event_object_user_id,
    	event_object_currency,
    	event_object_final_price,
    	
    	course_object_id,
    	course_object_name,

    	user_object_id,
    	user_object_email,
    	user_object_name,
    	user_object_src,
    	user_object_last_sign_in_at,
    	user_object_sign_in_count,
    	user_object_unsubscribe,
    	
    	coupon_object_new_purchase_price,
    	coupon_object_number_available,
    	coupon_object_code,
    	coupon_object_name,
    	coupon_object_expiration,
    	coupon_object_uses,
    	
    	affiliate_object_id,
    	affiliate_object_email,
    	affiliate_object_name,
    	
    	transactions_object_final_price,
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
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow + 1,1,1,33).setValues([newRow]);
    
  }
  return;
}
