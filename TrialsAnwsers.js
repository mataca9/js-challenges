class Trial {
    /*
    Description: Return a line of n asterisks using a number as parameter
    Example: 
        - Invokation: trial01(6)
        - Result: ******
    */
    trial01(n) {
        return new Array(n + 1).join('*');
    }

    /*
    Description: Return a line of n pairs of less and greater symbol using a number as parameter
    Example: 
        - Invokation: trial02(6)
        - Result: <><><><><><>
    */
    trial02(n) {
        return new Array(n + 1).join('<>');
    }

    /*
    Description: Return a square of size n made of asterisks using a number as parameter
    Example: 
        - Invokation: trial03(3)
        - Result:   ***
                    ***
                    ***
    */
    trial03(n) {
        let square = new Array(n + 1).join('*');
        for(let i = 0; i < n - 1; i++) {
            square += '\n' + new Array(n + 1).join('*');
        }
        return square;
    }
}

module.exports = Trial;