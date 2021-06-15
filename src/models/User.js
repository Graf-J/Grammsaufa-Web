export default class User {

    constructor(name) {
        this.name = name;
        this.id = 0;
        this._points = [];
        this._totalPoints = 0;
        this._weights = [];
        this._totalWeight = 0;
    }

    // Weights
    get weights() {
        return this._weights;
    }

    set addToWeights(weight) {
        this._weights.push(weight);
        this._totalWeight += weight;
    }

    get totalWeight() {
        return this._totalWeight;
    }

    // Points
    get points() {
        return this._points;
    }

    set addToPoints(points) {
        this._points.push(points);
        this._totalPoints += points;
    }

    get totalPoints() {
        return this._totalPoints;
    }
}