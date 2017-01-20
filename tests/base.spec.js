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

    it('should add computer -1', function() {

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

    it('should not add computer - 2', function() {

        main.getAddNewComputer().click();

        add.waitForPage();

        add.getIntroducedInput().sendKeys('2016-01-04');

        add.getDiscontinuedInput().sendKeys('2017-04-26');

        add.getSelectCompany('Apple Inc.').click();

        add.getCreatThisComputerButton().click();

        expect(add.getErrorText()).toBe('Required');

    });


    it('should add computer - 4', function() {

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

    it('should add computer - 7', function() {

        var headingBefore = main.getComputerH1Header();

        expect(headingBefore).toContain('computers found')

        main.getAddNewComputer().click();

        add.waitForPage();

        var compName = add.getComputerNameInput();
        compName.sendKeys('aaTest');

        add.getIntroducedInput().sendKeys('2016-01-04');

        add.getDiscontinuedInput().sendKeys('2017-04-26');

        add.getCreatThisComputerButton().click();

        main.waitForPage();

        var headingAfter = main.getComputerH1Header();

        expect(headingAfter).toContain('computers found')

        // count increased
        expect(headingAfter).not.toBe(headingBefore)

    });


    it('should click on a computer - 1', function() {

        var headingBefore = main.getComputerH1Header();

        expect(headingBefore).toContain('computers found')

        main.getComputersByName();

        var c = 'AN/FSQ-32';
        main.clickComputerByName(c);

        add.waitForPage();

        var headingAfter = main.getComputerH1Header();

        expect(headingAfter).toContain('Edit computer')

        expect(add.getComputerNameInput().getAttribute('value')).toEqual(c)

        expect(add.getIntroducedInput().getAttribute('value')).toEqual('1960-01-01')

        expect(add.getDiscontinuedInput().getAttribute('value')).toEqual('')

    });


    it('should change dates -2', function() {

        var headingBefore = main.getComputerH1Header();

        expect(headingBefore).toContain('computers found')

        main.getComputersByName();

        var c = 'AN/FSQ-32';
        main.clickComputerByName(c);

        add.waitForPage();

        var headingAfter = main.getComputerH1Header();

        expect(headingAfter).toContain('Edit computer')

        expect(add.getComputerNameInput().getAttribute('value')).toEqual(c)

        expect(add.getIntroducedInput().getAttribute('value')).toEqual('1960-01-01')

        expect(add.getDiscontinuedInput().getAttribute('value')).toEqual('')

        // change dates
        add.getIntroducedInput().clear()
        add.getDiscontinuedInput().clear()

        add.getIntroducedInput().sendKeys('2016-01-04');
        add.getDiscontinuedInput().sendKeys('2017-04-26');

        add.getSelectCompany('Apple Inc.').click();

        add.getSaveComputerButton().click();

        var headingAfter = main.getComputerH1Header();
        expect(headingAfter).toContain('computers found')

        // count has not increased
        expect(headingAfter).toBe(headingBefore)

        main.clickComputerByName(c);

        add.waitForPage();

        // verify dates
        expect(add.getIntroducedInput().getAttribute('value')).toEqual('2016-01-04')
        expect(add.getDiscontinuedInput().getAttribute('value')).toEqual('2017-04-26')

        // restore defaults
        add.getIntroducedInput().clear()
        add.getDiscontinuedInput().clear()

        add.getIntroducedInput().sendKeys('1960-01-01');
        add.getDiscontinuedInput().sendKeys('');

        add.getSelectCompany('IBM').click();

        add.getSaveComputerButton().click();

        var headingAfter = main.getComputerH1Header();
        expect(headingAfter).toContain('computers found')

        // count has not increased
        expect(headingAfter).toBe(headingBefore)

        browser.pause();

    });


    it('should delete computer - 3, filter by Name - 1', function() {

        var headingBefore = main.getComputerH1Header();

        expect(headingBefore).toContain('computers found')

        main.getAddNewComputer().click();

        add.waitForPage();

        var compName = add.getComputerNameInput();
        compName.sendKeys('deleteMe');

        add.getIntroducedInput().sendKeys('2016-01-04');

        add.getDiscontinuedInput().sendKeys('2017-04-26');

        add.getCreatThisComputerButton().click();

        main.waitForPage();

        var headingAfter = main.getComputerH1Header();

        expect(headingAfter).toContain('computers found')

        // count increased
        expect(headingAfter).not.toBe(headingBefore)

        main.getSearchBox().sendKeys('deleteMe');

        main.getFilterButton().click();

        main.clickComputerByName('deleteMe');

        add.waitForPage();

        add.getDeleteComputerButton().click();

        main.waitForPage()

        var headingAfterDelete = main.getComputerH1Header();
        expect(headingAfterDelete).toContain('computers found')

        // count decreased
        expect(headingAfterDelete).toBe(headingBefore)

    });

    it('should filter by non existent name - 2', function() {

        var headingBefore = main.getComputerH1Header();

        expect(headingBefore).toContain('computers found')

        main.getSearchBox().sendKeys('NONEXISTING%^%@2');

        main.getFilterButton().click();

        expect(main.getNoResults()).toBe('Nothing to display');

    });


});
