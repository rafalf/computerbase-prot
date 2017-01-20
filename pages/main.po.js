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

    this.getFilterButton =  function(){
        return $("#searchsubmit");
    };

    this.getAddNewComputer  = function () {
        return $('#add')
    };

};

module.exports = new MainPage();