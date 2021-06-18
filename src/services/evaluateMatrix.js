export default function evaluateMatrix(users, rounds) {
    users = resetUsers(users);
    rounds.forEach(round => {
        let pointsArr = getPointsArray(round.values, round.expectation);
        applyPoints(users, pointsArr);
        let valuesArr = round.values;
        applyValues(users, valuesArr)
    })
    return users;
}

// Applies Points to Users
const applyPoints = (users, points) => {
    for (let i = 0; i < users.length; i++) {
        users[i].points.push(points[i]);
        users[i].totalPoints += points[i];
    }
}

// Applies Weights/Values to Users
const applyValues = (users, values) => {
    for (let i = 0; i < users.length; i++) {
        users[i].weights.push(values[i]);
        users[i].totalWeight += values[i];
    }
}

// Resets all Propertys of all Users
const resetUsers = (users) => {
    let newUsers = [];
    users.forEach(user => {
        let newUser = {};
        newUser.id = user.id;
        newUser.name = user.name;
        newUser.points = [];
        newUser.totalPoints = 0;
        newUser.weights = [];
        newUser.totalWeight = 0;

        newUsers.push(newUser)
    })
    return newUsers;
}

// Returns for Example: [1, 0, 2, 3]
const getPointsArray = (values, expectation) => {
    let diffs = getDiffs(values, expectation);
    let dict = getDictonary(diffs);
    let diffSortedDict = getDiffSortedDictonary(dict);
    let pointedDict = getPointedDictonary(diffSortedDict);
    let indexSortedDict = getIndexSortedDictonary(pointedDict);
    return getFlattenDict(indexSortedDict);
}

// Calculates the Differences between Value and Expectation
const getDiffs = (values, expectation) => {
    let diffs = [];
    values.forEach(value => {
        let diff = expectation - value;
        if (diff < 0) {
            diff = diff * (-1);
        }
        diffs.push(diff);
    }) 
    return diffs;
}

// Returns for Example: [{ id: 0, diff: 63, points: 0 }, { id: 1, diff: 50, points: 0 }]
const getDictonary = (diffs) => {
    let dictonary = [];
    for (let i = 0; i < diffs.length; i++) {
        dictonary.push({
            id: i,
            diff: diffs[i],
            points: 0
        })
    }
    return dictonary;
}

// Returns for Example: [{ id: 1, diff: 30, points: 0 }, { id: 0, diff: 20, points: 0 }, { id: 2, diff: 10, points: 0 }], so the best one is in the last Spot
const getDiffSortedDictonary = (dict) => {
    return dict.sort((a, b) => a.diff > b.diff ? -1 : 1);
}

// Gives the Objects its Points
const getPointedDictonary = (sortedDict) => {
    for (let i = 0; i < sortedDict.length; i++) {
        if (i !== 0) {
            if (sortedDict[i].diff === sortedDict[i - 1].diff) {
                sortedDict[i].points = sortedDict[i - 1].points;
            }
            else {
                sortedDict[i].points = sortedDict[i - 1].points + 1;
            }
        }
    }
    return sortedDict;
}

// Sorts Dict by id from 0 to x
const getIndexSortedDictonary = (pointedDict) => {
    return pointedDict.sort((a, b) => a.id > b.id ? 1 : -1);
}

// Returns the Array by its Points, for Example: [0, 2, 1, 3]
const getFlattenDict = (indexSortedDict) => {
    let flattenDict = [];
    indexSortedDict.forEach(obj => {
        flattenDict.push(obj.points);
    })
    return flattenDict;
}

