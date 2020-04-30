// An object can represent a real life thing in code
// Create an object that defines you to someone you're meeting for the first time. 
// What properties describe you? Name? Hair color? Myers-Briggs personality?



// After you create the JS object version of you, make one for someone else you know 
// using the same keys, but values unique to them.

// Bonus: Make one of the properties an action you can take, ie a method.

const wildWes = {

    firstName: "Wes",
    surname: "Waters",
    age: 30,
    myersBriggs: "INTJ",
    hairColor: "brown",
    hobbie1: "biking",
    hobbie2: "video games",
    hobbie3: "reading",

    fullName: function () {
        return this.firstName + " " + this.surname;
    }
}

const emilyW = {

    firstName: "Emily",
    surname: "Waters",
    age: 30,
    myersBriggs: "ENTJ",
    hairColor: "bleached blonde",
    hobbie1: "guitar",
    hobbie2: "cooking",
    hobbie3: "power lifting",

    fullName: function () {
        return this.firstName + " " + this.surname;
    }
}


console.log(`Howdy, my name is ${wildWes.fullName()}, I'm ${emilyW.fullName()}'s husband. My hobbies include ${wildWes.hobbie3}, ${wildWes.hobbie1}, ${wildWes.hobbie2}`);
console.log(`Howdy, I'm ${emilyW.fullName()}, I'm ${wildWes.fullName()}'s wife. My hobbies include ${emilyW.hobbie2}, ${emilyW.hobbie3}, and ${emilyW.hobbie1}.`);