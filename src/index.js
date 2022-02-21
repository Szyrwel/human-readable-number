module.exports = function toReadable(number) {
    let result;
    let from1to19 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let from20to90 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        result = from1to19[number];
    } else if (number < 100) {
        if (number % 10 === 0) {
            result = from20to90[Math.floor(number / 10) - 2];
        } else {
            result =
                from20to90[Math.floor(number / 10) - 2] +
                " " +
                from1to19[number % 10];
        }
    } else if (number % 100 === 0) {
        result = from1to19[number / 100] + " hundred";
    } else if (number % 100 < 20) {
        result =
            from1to19[Math.floor(number / 100)] +
            " hundred " +
            from1to19[number % 100];
    } else if (number % 10 === 0) {
        result =
            from1to19[Math.floor(number / 100)] +
            " hundred " +
            from20to90[Math.floor((number / 10) % 10) - 2];
    } else {
        result =
            from1to19[Math.floor(number / 100)] +
            " hundred " +
            from20to90[Math.floor((number / 10) % 10) - 2] +
            " " +
            from1to19[number % 10];
    }

    return result;
};
