import CoordinateNumber from "../src/CoordinateNumber";

describe('CoordinateNumber', () => {
    it('will return a distance of 1 between two CoordinateNumber 1 and 2', () => {
        const left = new CoordinateNumber(1);
        const right = new CoordinateNumber(2);

        expect(left.distance(right)).toBe(1);
    });

    it('will return a distance of 2 between two CoordinateNumber 3 and 1', () => {
        const left = new CoordinateNumber(3);
        const right = new CoordinateNumber(1);

        expect(left.distance(right)).toBe(2);
    });

    it('will return a distance of 0 between two CoordinateNumber 1 and 1', () => {
        const left = new CoordinateNumber(1);
        const right = new CoordinateNumber(1);

        expect(left.distance(right)).toBe(0);

    });

    it('will throw a InvalidNumberException if coord is negative', () => {
        expect(() => new CoordinateNumber(-1))
            .toThrow(new CoordinateNumber.InvalidCoordinateException())
    })
});
