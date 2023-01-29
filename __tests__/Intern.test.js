//--- importing intern class from lib ---//
const Intern = require('../lib/Intern');

//--- passing specific parameters for testing ---//
const intern = new Intern('Jon Snow','6160','info@lordsnow.com','Winterfell High');

//--- first test verifies the values passed to the object constructor and are assigned to the right properties ---//
test('test if the values passed to the intern object constructor are being correctly assign to the properties', () => {
    expect(intern.name).toBe('Jon Snow');
    expect(intern.id).toBe('6160');
    expect(intern.email).toBe('info@lordsnow.com');
    expect(intern.school).toBe('Winterfell High');
});


//--- the remaining tests verify if the methods return the expected values ---//
test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Jon Snow');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('6160');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('info@lordsnow.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Winterfell High');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});
