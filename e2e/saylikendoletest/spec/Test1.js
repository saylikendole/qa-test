 //On main page I should able to see all Items is tree structure 
 
 describe('Tree structure on Main Page', function() {
  
  //Opens URL 
  it('should navigate to main page', function() {
    browser.get('http://localhost:4200/');
	browser.sleep(4000)
	
	//Finds Total number of element present on Main page
	element.all(by.xpath('//ul/li ')).then(function(allchk) {
    var length = allchk.length;
	expect(length).toBeGreaterThan(0);
    console.log('Total number of items:' +length);
});

	//Finds Total Number of child element present on mainpage
	element.all(by.className('indent-1')).then(function(childchk) {
    var clength = childchk.length;
	expect(clength).toBeGreaterThan(0);
    console.log('Total number of child items:' +clength);
    var childresult = element.all(by.className('indent-1'));
          for (var i=0; i<clength; i++){
          childresult.get(i).getText().then(function(text) {
    console.log(text);
	    })
}});

    //Find total number of grandchild element present on Main page
	element.all(by.className('indent-2')).then(function(grandchildchk) {
    var glength = grandchildchk.length;
	expect(glength).toBeGreaterThan(0);
    console.log('Total number of grand child items:' +glength);
    var grandchildresult = element.all(by.className('indent-2'));
		for (var i=0; i<glength; i++){
		grandchildresult.get(i).getText().then(function(text) {
    console.log(text);
	    })
}});  
  
 
});
});