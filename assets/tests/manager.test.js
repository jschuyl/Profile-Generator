const Manager = require("../js/classes/manager")

describe("Manager", () => {
    describe("Initialization", () => {
        it("Should return an object upon initialization containing name, id, and email", () => {
            let obj = new Manager();
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
    let obj = new Manager(id, name, email)

    expect(obj.name).toEqual(name);
    expect(obj.id).toEqual(id);
    expect(obj.email).toEqual(email);
});

describe("getName", () => {
    it("returns the name of new Manager", () => {
        let id = 16;
        let name = 'beans';
        let obj = new Manager(id, name);
        expect(obj.getName()).toEqual(name);
    })
});

describe("getEmail", () => {
    it("returns the email of new Manager", () => {
        let email = "beansandtoast@gmail.com";
        let obj = new Manager(4, "john", email);
        expect(obj.getEmail()).toEqual(email);
    })
});

describe("getId", () => {
    it("returns the id of new Manager", () => {
        let id = 24;
        let obj = new Manager(id, "Phil", "break@gmail.com");
        expect(obj.getId()).toEqual(id);
    })
});

describe("getOfficeNum", () => {
    it("returns the office number of new Manager", () => {
        let officeNum = "markymark";
        let obj = new Manager(15, "Max", "email@email.com", officeNum)
        expect(obj.getOfficeNum()).toEqual(officeNum)
    })
})

describe("getRole", () => {
    it("returns Manager", () => {
        let obj = new Manager();
        expect(obj.getRole()).toEqual("Manager")
    })
});