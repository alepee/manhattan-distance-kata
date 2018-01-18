class CoordinateNumber {
    static InvalidCoordinateException;

    private coord: number;

    constructor(coord: number) {
        if (coord < 0) throw new CoordinateNumber.InvalidCoordinateException();

        this.coord = coord;
    }

    distance(otherCoordinateNumber: CoordinateNumber) {
        return Math.abs(this.coord - otherCoordinateNumber.coord);
    }
}

class InvalidCoordinateException extends TypeError {}
CoordinateNumber.InvalidCoordinateException = InvalidCoordinateException;

export default CoordinateNumber;
