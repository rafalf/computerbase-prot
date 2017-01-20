describe('back base test', function() {

    // Pages
    var main = require('../pages/main.po.js');
    var add = require('../pages/add.po.js');
    var EC = protractor.ExpectedConditions;

    beforeEach(function(){

        console.log('\n**********  test spec: ' + __filename + '  **********')

        browser.ignoreSynchronization = true;

        browser.get('http://computer-database.herokuapp.com/computers')
    });

    afterEach(function () {
        console.log('\n**********')
    });

    xit('should add computer -1', function() {

        var headingBefore = main.getComputerH1Header();

        expect(headingBefore).toContain('computers found')

        main.getAddNewComputer().click();

        add.waitForPage();

        var compName = add.getComputerNameInput();
        var computerName = add.getRandomNum(1, 100000) + 'COM';
        compName.sendKeys(computerName);

        add.getCreatThisComputerButton().click();

        main.waitForPage();

        var headingAfter = main.getComputerH1Header();

        expect(headingAfter).toContain('computers found')

        expect(headingAfter).not.toBe(headingBefore)

    });

    xit('should not add computer - 2', function() {

        main.getAddNewComputer().click();

        add.waitForPage();

        add.getIntroducedInput().sendKeys('2016-01-04');

        add.getDiscontinuedInput().sendKeys('2017-04-26');

        add.getSelectCompany('Apple Inc.').click();

        add.getCreatThisComputerButton().click();

        expect(add.getErrorText()).toBe('Required');

    });


    xit('should add computer - 4', function() {

        var headingBefore = main.getComputerH1Header();

        expect(headingBefore).toContain('computers found')

        main.getAddNewComputer().click();

        add.waitForPage();

        var compName = add.getComputerNameInput();
        compName.sendKeys('aaTest');

        add.getIntroducedInput().sendKeys('2016-01-04');

        add.getDiscontinuedInput().sendKeys('2017-04-26');

        add.getSelectCompany('Apple Inc.').click();

        add.getCreatThisComputerButton().click();

        main.waitForPage();

        var headingAfter = main.getComputerH1Header();

        expect(headingAfter).toContain('computers found')

        expect(headingAfter).not.toBe(headingBefore)

    });


    it('should not add computer - 5', function() {

        var headingBefore = main.getComputerH1Header();

        expect(headingBefore).toContain('computers found')

        main.getAddNewComputer().click();

        add.waitForPage();

        var compName = add.getComputerNameInput();
        compName.sendKeys('aaTest');

        add.getIntroducedInput().sendKeys('2016-01-04');

        add.getDiscontinuedInput().sendKeys('2017-04-26');

        add.getSelectCompany('Apple Inc.').click();

        add.getCancelButton().click();

        main.waitForPage();

        var headingAfter = main.getComputerH1Header();

        expect(headingAfter).toContain('computers found')

        expect(headingAfter).toBe(headingBefore)

    });

});
