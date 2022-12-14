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
    })
    done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
    done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
    done(null /*, data*/);
};

const findOneByFood = (food, done) => {
    done(null /*, data*/);
};

const findPersonById = (personId, done) => {
    done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";

    done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    done(null /*, data*/);
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