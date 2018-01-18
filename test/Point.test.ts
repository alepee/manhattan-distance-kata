import Point from '../src/Point';

describe('Point', () => {
    it('will return a distance of 2 between two points 0,0 and 1,1', () => {
        const a = Point.coordinatesFromNumbers(0, 0);
        const b = Point.coordinatesFromNumbers(1, 1);
        const distance = a.distance(b);

        expect(distance).toBe(2);
    });

    it('will return a distance of 3 between two points 0,0 and 1,2', () => {
        const a = Point.coordinatesFromNumbers(0,0);
        const b = Point.coordinatesFromNumbers(1,2);
        const distance = a.distance(b);

        expect(distance).toBe(3);
    });

    it('will return a distance of 5 between two points 1,1 and 3,4', () => {
        const a = Point.coordinatesFromNumbers(1,2);
        const b = Point.coordinatesFromNumbers(3,4);
        const distance = a.distance(b);

        expect(distance).toBe(4);
    })

    it('will return a distance of 5 between two points 3,4 and  1,1 ', () => {
        const a = Point.coordinatesFromNumbers(3,4);
        const b = Point.coordinatesFromNumbers(1,1);
        const distance = a.distance(b);

        expect(distance).toBe(5);
    })

    it('will return a distance of 0 between two points 1,1 and 1,1', () => {
        const a = Point.coordinatesFromNumbers(1,1);
        const b = Point.coordinatesFromNumbers(1,1);
        const distance = a.distance(b);

        expect(distance).toBe(0);
    })
});
