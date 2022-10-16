const Intern = require("../js/classes/intern")

describe("Intern", () => {
    describe("Initialization", () => {
        it("Should return an object upon initialization containing name, id, and email", () => {
            let obj = new Intern();
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
    let obj = new Intern(id, name, email)

    expect(obj.name).toEqual(name);
    expect(obj.id).toEqual(id);
    expect(obj.email).toEqual(email);
});

describe("getName", () => {
    it("returns the name of new Intern", () => {
        let id = 16;
        let name = 'beans';
        let obj = new Intern(id, name);
        expect(obj.getName()).toEqual(name);
    })
});

describe("getEmail", () => {
    it("returns the email of new Intern", () => {
        let email = "beansandtoast@gmail.com";
        let obj = new Intern(4, "john", email);
        expect(obj.getEmail()).toEqual(email);
    })
});

describe("getId", () => {
    it("returns the id of new Intern", () => {
        let id = 24;
        let obj = new Intern(id, "Phil", "break@gmail.com");
        expect(obj.getId()).toEqual(id);
    })
});

describe("getSchool", () => {
    it("returns the school of new Intern", () => {
        let school = "markymark";
        let obj = new Intern(15, "Max", "email@email.com", school)
        expect(obj.getSchool()).toEqual(school)
    })
})

describe("getRole", () => {
    it("returns Intern", () => {
        let obj = new Intern();
        expect(obj.getRole()).toEqual("Intern")
    })
});