const Employee = require("./employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email, school);
        this.school = school;
    }
// gets what school the intern attends
    getSchool() {
        return this.school
    }
// overrides Employee role
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;