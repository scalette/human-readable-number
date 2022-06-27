module.exports = function toReadable (number) {
    if (number >= 0 && number <= 20){
        return base_case(number)
    }
    else if (number < 100){
        const strRepresent = number.toString();
        return number % 10 === 0 
            ? base_case(number) 
            : base_case(+(strRepresent[0] + '0')) +' '+ base_case(+strRepresent[1])
    }
    let humanReadable = '';
    const digit = number.toString();
    if (digit.length === 3){
        return number % 100 === 0 
            ? humanReadable += base_case(+digit[0]) + " hundred" 
            : humanReadable += base_case(+digit[0]) + " hundred " + toReadable(+digit.slice(1))
    }
    return humanReadable;
}

function base_case(digit){
    switch (digit) {
        case 0:
            return 'zero'
        case 1:
            return 'one'
        case 2:
            return 'two'
        case 3:
            return 'three'
        case 4:
            return 'four'
        case 5:
            return 'five'
        case 6:
            return 'six'
        case 7:
            return 'seven'
        case 8:
            return 'eight'
        case 9:
            return 'nine'
        case 10:
            return 'ten'
        case 11:
            return 'eleven'
        case 12:
            return 'twelve'
        case 13:
            return 'thirteen'
        case 14:
            return 'fourteen'
        case 15:
            return 'fifteen'
        case 16:
            return 'sixteen'
        case 17:
            return 'seventeen'
        case 18:
            return 'eighteen'
        case 19:
            return 'nineteen'
        case 20:
            return 'twenty'
        case 30:
            return 'thirty'
        case 40:
            return 'forty'
        case 50:
            return 'fifty'
        case 60:
            return 'sixty'
        case 70:
            return 'seventy'
        case 80:
            return 'eighty'
        case 90:
            return 'ninety'
      }
}
