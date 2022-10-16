const Employee = require("./employee");

class Manager extends Employee {
   constructor(id, name, email, officeNum) {
    super(id, name, email);
    this.officeNum = officeNum;
   }
   // gets office number
   getOfficeNum() {
      return this.officeNum
   }
   // overrides Employee role
   getRole() {
      return "Manager"
   }
}
module.exports = Manager;