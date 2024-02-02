import { calculateAge } from './module.js'

/**
 * @function calculateAge
 */

describe('calculateAge Unit Test Suites', () => {
    it('should return a correct age', () => {
        const mike = {
            birth: new Date("1992-01-31")
        };
        const currentYear = new Date().getUTCFullYear();
        const age = currentYear - mike.birth.getUTCFullYear();

        expect(calculateAge(mike)).toEqual(age);
    })
    it('should throw a "missing param p" error', () => {
        expect(() => calculateAge()).toThrow('missing param p');
    })
    it('should throw a "p should be an object" error', () => {
        expect(() => calculateAge(1)).toThrow('p should be an object');
    })
    it('should throw a "missing param p.birth" error', () => {
        expect(() => calculateAge({})).toThrow('missing param p.birth');
    })
    it('should throw a "p.birth should be a Date" error', () => {
        expect(() => calculateAge({birth: 1})).toThrow('p.birth should be a Date');
    })
    it('should throw a "p.birth should be invalid" error', () => {
        expect(() => calculateAge({birth: new Date('18/15/2032')})).toThrow('p.birth should be invalid');
    })

})