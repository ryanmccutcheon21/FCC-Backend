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
    done(null, data);
};


// Step 5 Solution
const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, (err, personFound) => {
        if (err) return console.error(err)
        done(null, personFound)
    }
    )
    done(null, data);
};


// Step 6 Solution
const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: food }, (err, personFound) => {
        if (err) return console.error(err)
        done(null, personFound)
    })
    done(null, data);
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