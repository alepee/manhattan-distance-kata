import CoordinateNumber from "./CoordinateNumber";



class Point {
    private x: CoordinateNumber;
    private y: CoordinateNumber;

    static InvalidCoordinateException;
    static coordinatesFromNumbers(x: number, y: number): Point {
        return new Point(
            new CoordinateNumber(x),
            new CoordinateNumber(y),
        );
    }

    constructor(x: CoordinateNumber, y: CoordinateNumber) {
        this.x = x;
        this.y = y;
    }

    public distance(point: Point): number {
        return this.x.distance(point.x) + this.y.distance(point.y);
    }

}

class InvalidCoordinateException extends TypeError {}
Point.InvalidCoordinateException = InvalidCoordinateException;

export default Point;
