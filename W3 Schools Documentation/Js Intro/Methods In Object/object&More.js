const person = {
    firstName : "Imran",
    lastName : "Parthib",
    jobStatus : "SelfEmployed",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

let date = Date();
console.log(date);

let descript =      `      About
       Enjoy Programming C++" is a repository featuring diverse coding challenges from platforms like LeetCode and Codeforces. Join to solve problems, share solutions, and enhance your C++ skills collaboratively.`;
console.log(typeof descript);
 let campus = new String("Daffodil");
 console.log(campus);
 let hobbies = "Football, Cricket, Reading, Coding";
 let mostFavrt = hobbies.substr(28,27);
 console.log(mostFavrt);