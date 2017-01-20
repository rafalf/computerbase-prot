var MainPage = function (){

    var EC = protractor.ExpectedConditions;

    this.waitForPage = function () {
        browser.wait(EC.presenceOf(this.getCategories()), 5000, 'Element taking too long to appear');
    };

    this.getComputerH1Header = function(){
        var heading = $('#main h1');
        heading.getText().then(function(text){
            console.log(text);
            });
        return heading.getText();
    };

    this.getCategories = function(){
        return $('#searchbox');
    };

    this.getSearchBox = function(){
        return $('#searchbox');
    };

    this.getFilterButton =  function(){
        return $("#searchsubmit");
    };

    this.getNoResults =  function(){
        return $(".well em").getText();
    };


    this.getAddNewComputer  = function () {
        return $('#add')
    };

    this.getComputersByName  = function () {
        var comps = $$('tbody tr>td:nth-of-type(1)>a')
        comps.each(function (element, index) {
            element.getText().then(function (text) {
                console.log(index, text)
            });
        });
    };

    this.clickComputerByName  = function (c) {
        var comp = element(by.cssContainingText('td>a', c));
        comp.click();
    };


};

module.exports = new MainPage();