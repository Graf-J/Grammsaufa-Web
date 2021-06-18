export default class User {

    constructor(name) {
        this.name = name;
        this.id = 0;
        this.points = [];
        this.totalPoints = 0;
        this.weights = [0];
        this.totalWeight = 0;
    }

}