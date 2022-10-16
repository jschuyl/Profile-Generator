const Engineer = require("../js/classes/engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should return an object upon initialization containing name, id, and email", () => {
            let obj = new Engineer();
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
    let obj = new Engineer(id, name, email)

    expect(obj.name).toEqual(name);
    expect(obj.id).toEqual(id);
    expect(obj.email).toEqual(email);
});

describe("getName", () => {
    it("returns the name of new Engineer", () => {
        let id = 16;
        let name = 'beans';
        let obj = new Engineer(id, name);
        expect(obj.getName()).toEqual(name);
    })
});

describe("getEmail", () => {
    it("returns the email of new Engineer", () => {
        let email = "beansandtoast@gmail.com";
        let obj = new Engineer(4, "john", email);
        expect(obj.getEmail()).toEqual(email);
    })
});

describe("getId", () => {
    it("returns the id of new Engineer", () => {
        let id = 24;
        let obj = new Engineer(id, "Phil", "break@gmail.com");
        expect(obj.getId()).toEqual(id);
    })
});

describe("getGithub", () => {
    it("returns the github of new Engineer", () => {
        let github = "markymark";
        let obj = new Engineer(15, "Max", "email@email.com", github)
        expect(obj.getGithub()).toEqual(github)
    })
})

describe("getRole", () => {
    it("returns Engineer", () => {
        let obj = new Engineer();
        expect(obj.getRole()).toEqual("Engineer")
    })
});