 describe('Search by Level 2 Item, verify all Level 2 Items in filtered list has matched item, verify filtered list has children', function() {
  
  //Open URL
   it('should search for searchinput', function() {
    browser.get('http://localhost:4200/');
	var searchinput = 'Item 2';
	
	//Search by search input 
	element(by.css('[placeholder = "Search"]')).sendKeys(searchinput);
	browser.sleep(4000)	
	
	//verify all Level 2 Items in filtered list has matched item
	element.all(by.className('indent-1')).then(function(attr) {
    var length = attr.length; 
	var result = element.all(by.className('indent-1'));
	for (var i=0; i<length; i++){
		result.get(i).getText().then(function(text) {
		console.log(text);
		expect(text).toContain(searchinput);
	    });
}});
element.all(by.css('[class=""]')).then(function(attr1){
     var length=attr1.length;
	 expect(length).toBe(0);
	 console.log('level 1 Items are not present');
})
	//verify filtered list has children
	var child = 'Item 3 - Level 2'
	//var child2 = 'Item 3 - Level 2'
	
	var prent = element.all(by.xpath('//ul/li')).get(0);
	expect(prent.getText()).toContain(searchinput);
	console.log('found '+searchinput+ ' in result')

	var child = element.all(by.xpath('//ul/li')).get(1).getAttribute('class');
	child.then(attri =>{
	  expect(attri).toBe('indent-2');
	  console.log('Child Item present');
  })

});
 });