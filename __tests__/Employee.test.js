//--- importing Employee class ---//
const Employee = require('../lib/Employee');

//--- passing specific parameters for testing ---//
const employee = new Employee('Mauxi', '62442', 'mauxi.moncada10@gmail.com');

//--- first test verifies the values passed to the object constructor and are assigned to the right properties ---//
test('test if the values passed to the employe object constructor are being correctly assign to the properties', () => {
    expect(employee.name).toBe('Mauxi');
    expect(employee.id).toBe('62442');
    expect(employee.email).toBe('mauxi.moncada10@gmail.com');
});

//--- the remaining tests verify if the methods return the expected values ---//
test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Mauxi');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('62442');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('mauxi.moncada10@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});