const person = {
    firstName: "Imran",
    lastName: "Parthib",
    jobStatus: "SelfEmployed",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

console.log(person.fullName());