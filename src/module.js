/**
 * 
 * @param {object} p 
 * @returns {number}
 */

function calculateAge(p){
    switch(true){
        case !p:
            throw new Error('missing param p');
        case typeof p !== 'object':
            throw new Error('p should be an object');
        case !p.birth:
            throw new Error('missing param p.birth');
        case !(p.birth instanceof Date):
            throw new Error('p.birth should be a Date');
        case isNaN(p.birth):
            throw new Error('p.birth should be invalid');
    }

    
    let dateDiff = new Date(Date.now() - p.birth.getTime());
    let age = Math.abs(dateDiff.getUTCFullYear() - 1970);
    return age;
}

var Person = function(name, surname, birth){
    this.name = name;
    this.surname = surname;
    this.birth = birth;
    this.age = calculateAge(this);
}

var p = new Person("Mickael", "Mike", new Date("1992-02-21"));



module.exports = {
    calculateAge,
    Person
}

