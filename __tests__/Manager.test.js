//--- importing Manager class from lib ---//
const Manager = require('../lib/Manager');

//--- passing specific parameters for testing ---//
const manager = new Manager('Daenerys', '333','info@motherofdragons.com','777');

//--- first test verifies the values passed to the object constructor and are assigned to the right properties ---//
test('test if the values passed to the manager object constructor are being correctly assign to the properties', () => {
    expect(manager.name).toBe('Daenerys');
    expect(manager.id).toBe('333');
    expect(manager.email).toBe('info@motherofdragons.com');
    expect(manager.officeNumber).toBe('777');
});


//--- the remaining tests verify if the methods return the expected values ---//
test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Daenerys');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('333');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('info@motherofdragons.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('777');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});