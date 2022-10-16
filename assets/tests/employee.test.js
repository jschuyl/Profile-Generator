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

describe("getName", () => {
    it("returns the name of new Employee", () => {
        let id = 16;
        let name = 'beans';
        let obj = new Employee(id, name);
        expect(obj.getName()).toEqual(name);
    })
});

describe("getEmail", () => {
    it("returns the email of new Employee", () => {
        let email = "beansandtoast@gmail.com";
        let obj = new Employee(4, "john", email);
        expect(obj.getEmail()).toEqual(email);
    })
});

describe("getId", () => {
    it("returns the id of new Employee", () => {
        let id = 24;
        let obj = new Employee(id, "Phil", "break@gmail.com");
        expect(obj.getId()).toEqual(id);
    })
});

describe("getRole", () => {
    it("returns Employee", () => {
        let obj = new Employee();
        expect(obj.getRole()).toEqual("Employee")
    })
});