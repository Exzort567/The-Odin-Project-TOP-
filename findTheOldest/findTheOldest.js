 const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear;
    } else {
        return death - birth;
    };

    const findTheOldest = function(people) {
        return people.reduce((oldest, currPerson) => {
            const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
            const currPersonAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath)

            return oldestAge < currPersonAge ? currPerson : oldest;
        })
    }

 }