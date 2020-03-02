module.exports = function toReadable(number) {
    const words = {
        units: {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
        },
        dozens: {
            1: 'twen',
            2: 'thir',
            3: 'for',
            4: 'fif',
            5: 'six',
            6: 'seven',
            7: 'eigh',
            8: 'nine',
        }
    };
    if (number === 0) {
        return 'zero';
    } else if (number >= 1 && number <= 19) {
        return words.units[(number)];
    } else if (number > 19 && number < 100 && number % 10 == 0) {
        return words.dozens[(number / 10) - 1] + 'ty';
    } else if (number > 19 && number < 100) {
        return words.dozens[Math.floor((number / 10) - 1)] + 'ty ' + words.units[(number % 10)];
    } else if (number % 100 === 0) {
        return words.units[number / 100] + ' hundred';
    } else if (number % 100 <= 19 && number % 100 >= 1) {
        return words.units[(number - number % 100) / 100] + ' hundred ' + words.units[(number % 100)];
    } else if (number % 100 > 19 && number % 100 < 100 && (number % 100) % 10 == 0) {
        return words.units[Math.floor((number / 100))] + ' hundred ' + words.dozens[Math.floor((number % 100) / 10) - 1] + 'ty';
    } else {
        return words.units[Math.floor((number / 100))] + ' hundred ' + words.dozens[Math.floor((number % 100) / 10) - 1] + 'ty ' + words.units[(number % 10)]
    }
}