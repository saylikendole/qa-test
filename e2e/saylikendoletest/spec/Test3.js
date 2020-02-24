describe('All items will have button, button links to a page containing information on the item', function() {
  
  //Open URL
   it('should navigate to main page', function() {
    browser.get('http://localhost:4200/');
	browser.sleep(3000)
	
	//Finds element and checks Button is present or not 
	element.all(by.xpath('//ul/li ')).then(function(tree) {
    var length = tree.length;
	for (var i=0; i<length; i++){
	var result = element.all(by.xpath('//ul/li ')).get(i);
	expect(result.element(by.tagName('button')).isEnabled()).toBe(true);
	expect(result.element(by.tagName('button')).isDisplayed()).toBe(true); 
}
});  
    //finds first element from page and click on button to view detailed description of Item
	var result = element.all(by.xpath('//ul/li ')).get(0);
	var itemtitlep1 = result.getText();
	
	result.element(by.tagName('button')).click(); 
    browser.sleep(3000)
	
	var itemtitlep2 = element(by.cssContainingText('.itemName','Item Title')).getText();
	
	itemtitlep1.then (text =>{	
	var	titletextp1 = text.substring(0, text.indexOf("-"));
		console.log('Item selected on main page : '+titletextp1);	
	itemtitlep2.then (text =>{
	var	titletextp2 = text.substring(text.indexOf(":")+2);
		console.log('Details of Item shown on Item details page : '+titletextp2);
	expect(titletextp1==titletextp2).toBe(true);
	
	})
	
	})   
	
	
});
});