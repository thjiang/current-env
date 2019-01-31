import getEnv from "../src/index";

describe('UNIT TEST', function() {
    it('prodTest', function() {
        expect(getEnv('www.163.com')).toBe('prod');
    });
});
