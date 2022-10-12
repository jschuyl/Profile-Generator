const Employee = require("./employee");

class Engineer extends Employee {
    constructor (id, name, email, github) {
        super(id, name, email)
        this.github = github;
    }
}
module.exports = Engineer;