const Employee = require("./employee");

class Engineer extends Employee {
    constructor (id, name, email, github) {
        super(id, name, email)
        this.github = github;
    }
    //get Github
    getGithub() {
        return this.github
    }
    // gets the role, has to be Engineer
    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer;