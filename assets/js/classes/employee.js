class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    // gets the id from new Employee
    getId(){
        return this.id;
    }
    // gets the name from new Employee
    getName(){
        return this.name;
    }
    // gets the email from new Employee
    getEmail(){
        return this.email;
    }
    // gets the role from new Employee
    getRole(){
        return "Employee";
    }
}
module.exports = Employee;