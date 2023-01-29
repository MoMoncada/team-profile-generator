//--- importing Engineer class from lib ---//
const Engineer = require('../lib/Engineer');

//--- passing specic parameters for testing ---//
const engineer = new Engineer('Hermione Granger', '62442','queen@ministryofmagic.com','hGranger');


//--- first test verifies the values passed to the object constructor and are assigned to the right properties ---//
test('test if the values passed to the engineer object constructor are being correctly assign to the properties', () => {
    expect(engineer.name).toBe('Hermione Granger');
    expect(engineer.id).toBe('62442');
    expect(engineer.email).toBe('queen@ministryofmagic.com');
    expect(engineer.githubUserName).toBe('hGranger');
});


//--- the remaining tests verify if the methods return the expected values ---//
test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Hermione Granger');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('62442');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('queen@ministryofmagic.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGitHub()).toBe('hGranger');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});