const Employee = require("../js/classes/employee");

test("Start employee object creation", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object")
});
