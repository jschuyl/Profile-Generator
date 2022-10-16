const Employee = require("../js/classes/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should return an object upon initialization containing name, id, and email", () => {
            let obj = new Employee();
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        })
    })
});

it("sets name, id, and email to true", () => {
    let name = "beans";
    let id = 96;
    let email = "beansandtoast@gmail.com";
    let obj = new Employee(id, name, email)

    expect(obj.name).toEqual(name);
    expect(obj.id).toEqual(id);
    expect(obj.email).toEqual(email);
});

