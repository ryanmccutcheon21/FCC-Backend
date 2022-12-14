require('dotenv').config();

// Step 1 Solution
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Step 2 Solution
// assign mongoose Schema to a variable
const Schema = mongoose.Schema

// create Person schema
const personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
})

// create Person model from the schema
const Person = mongoose.model('Person', personSchema)


// Step 3 Solution
const createAndSavePerson = (done) => {
    const ryanMcC = new Person({
        name: 'Ryan McCutcheon',
        age: 27,
        favoriteFoods: [
            'mac & cheese',
            'fried chicken',
            'mashed potatoes and brown gravy'
        ]
    })
    ryanMcC.save((err, data) => {
        if (err) return console.error(err)
        done(null, data);
    })
};

// Step 4 Solution
const arrayOfPeople = [
    {
        name: 'Ryan',
        age: 27,
        favoriteFoods: ['mac & cheese',
            'fried chicken',
            'mashed potatoes and brown gravy']
    },
    {
        name: 'Kayla',
        age: 26,
        favoriteFoods: ['mac & cheese',
            'fried chicken',
            'mashed potatoes and brown gravy']
    },
    {
        name: 'Nolan',
        age: 27,
        favoriteFoods: ['mac & cheese',
            'fried chicken',
            'mashed potatoes and brown gravy']
    }
]

const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, people) => {
        if (err) return console.error(err)
        done(null, people)
    })
};


// Step 5 Solution
const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, (err, personFound) => {
        if (err) return console.error(err)
        done(null, personFound)
    }
    )
};


// Step 6 Solution
const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: food }, (err, personFound) => {
        if (err) return console.error(err)
        done(null, personFound)
    })
};


// Step 7 Solution
const findPersonById = (personId, done) => {
    Person.findById(personId, (err, personFound) => {
        if (err) return console.log(err)
        done(null, personFound)
    })
};


// Step 8 Solution
const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";
    // .findById() method to find a person by _id with the parameter personId as search key. 
    Person.findById(personId, (err, person) => {
        if (err) return console.error(err)
        // Array.push() method to add "hamburger" to the list of the person's favoriteFoods
        person.favoriteFoods.push(foodToAdd)
        // inside of the callback - save() the updated Person 
        person.save((err, updatedPerson) => {
            if (err) console.error(err)
            done(null, updatedPerson)
        })
    })
};


// Step 9 Solution
const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    Person.findByIdAndUpdate({ name: personName }, { age: ageToSet }, { new: true }, (err, updatedDoc) => {
        if (err) console.error(err)
        done(null, updatedDoc)
    })
};

const removeById = (personId, done) => {
    done(null /*, data*/);
};

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";

    done(null /*, data*/);
};

const queryChain = (done) => {
    const foodToSearch = "burrito";

    done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;