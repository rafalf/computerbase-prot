var AddPage = function (){

    var EC = protractor.ExpectedConditions;

    this.waitForPage = function () {
        browser.wait(EC.presenceOf(this.getComputerNameInput()), 5000, 'Element taking too long to appear');
    };

    this.getComputerNameInput = function(){
        return $('#name');
    };

    this.getErrorText = function(){
        err = $('.help-inline');
        err.getText().then(function(error){
            console.log(error)
        });
        return err.getText();
    };

    this.getAllErrors = function(){
        return $$('.error')
    };

    this.getIntroducedInput = function(){
        return $('#introduced');
    };

    this.getDiscontinuedInput = function(){
        return $('#discontinued');
    };

    this.getCreatThisComputerButton = function(){
        return $('[value="Create this computer"]');
    };

    this.getSaveComputerButton = function(){
        return $('[value="Save this computer"]');
    };

    this.getDeleteComputerButton = function(){
        return $('[value="Delete this computer"]');
    };

    this.getCancelButton = function(){
        return $('a.btn');
    };

    this.getSelectCompany = function (visibleText) {
        return element(by.cssContainingText('option', visibleText))
    }

    this.getRandomNum = function(min, max){
        return parseInt(Math.random() * (max - min) + min);
    };

};

module.exports = new AddPage();
