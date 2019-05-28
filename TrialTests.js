const assert = require('assert');
const Trials = require('./Trials');


class TestCase {
    constructor(parameters, result) {
        this.parameters = parameters;
        this.result = result;
    }
}

class TrialTests {
    constructor() {
        this.trials = new Trials();
    }

    trial01() {
        const title = 'Trial01';
        const cases = [
            new TestCase([5], '*****'),
            new TestCase([7], '*******')
        ];
        let current = 0;
        try {
            cases.forEach((c, index) => {
                current = index;
                assert.equal(this.trials.trial01.apply(null, c.parameters), c.result);
            });
            this.successHandler(title);
        } catch (error) {
            this.errorHandler(title, cases[current].parameters, error);
        }
    }

    trial02() {
        const title = 'Trial02';
        const cases = [
            new TestCase([5], '<><><><><>'),
            new TestCase([4], '<><><><>')
        ];
        let current = 0;
        try {
            cases.forEach((c, index) => {
                current = index;
                assert.equal(this.trials.trial02.apply(null, c.parameters), c.result);
            });
            this.successHandler(title);
        } catch (error) {
            this.errorHandler(title, cases[current].parameters, error);
        }
    }

    trial03() {
        const title = 'Trial03';
        const cases = [
            new TestCase([3], '***\n***\n***'),
            new TestCase([2], '**\n**')
        ];
        let current = 0;
        try {
            cases.forEach((c, index) => {
                current = index;
                assert.equal(this.trials.trial03.apply(null, c.parameters), c.result);
            });
            this.successHandler(title);
        } catch (error) {
            this.errorHandler(title, cases[current].parameters, error);
        }
    }

    successHandler(title) {
        console.log(`[${title} - SUCCESS]`);
        console.log(`The function got the correct result !!`);
        console.log(new Array(20).join('='));
    }

    errorHandler(title, parameter, error) {
        console.log(`[${title} - ERROR]`);
        console.log(`The function didn't get the correct result !!`);
        console.log(`Parameters: ${parameter.join(', ')}`);
        console.log(`Actual:\n${error.actual}`);
        console.log(`Expected:\n${error.expected}`);
        console.log(new Array(20).join('='));
    }
}

module.exports = TrialTests;