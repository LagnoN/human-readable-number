module.exports = function toReadable (number) {
  let x = number.toString(10);
  let len = x.length;
  const switcherOnes = (n) => {
    switch (n) {
        case '0': return 'zero'; 
        case '1': return 'one'; 
        case '2': return 'two'; 
        case '3': return 'three' 
        case '4': return 'four'; 
        case '5': return 'five'; 
        case '6': return 'six'; 
        case '7': return 'seven'; 
        case '8': return 'eight'; 
        case '9': return 'nine';
    }
}

  const switcherTen = (n) => {
    switch (n) {
        case '0': return 'ten'; 
        case '1': return 'eleven'; 
        case '2': return 'twelve'; 
        case '3': return 'thirteen' 
        case '4': return 'fourteen'; 
        case '5': return 'fifteen'; 
        case '6': return 'sixteen'; 
        case '7': return 'seventeen'; 
        case '8': return 'eighteen'; 
        case '9': return 'nineteen';
    }
}

  const switcherDec = (n) => {
    switch (n) {
        case '2': return 'twenty';
        case '3': return 'thirty';
        case '4': return 'forty';
        case '5': return 'fifty';
        case '6': return 'sixty';
        case '7': return 'seventy';
        case '8': return 'eighty';
        case '9': return 'ninety';
    }
}

  switch (x.length) {
    case 1: return switcherOnes(x);
    case 2: {
        let y1 = Number(x[0]);
        let y2 = Number(x[1]);
        if (y1 == 1) {
            return switcherTen(x[1]); 
        }
        else if ((y1 > 1) & (y2 == 0)) {
            return switcherDec(x[0]);
        }
            return (`${switcherDec(x[0])} ${switcherOnes(x[1])}`);
        }
        
    case 3: {
        let y1 = Number(x[1]);
        let y2 = Number(x[2]);
        if ((y1 == 0) & (y2 == 0)) {
            return (`${switcherOnes(x[0])} hundred`);
        }
        else if (y1 == 1) {
            return (`${switcherOnes(x[0])} hundred ${switcherTen(x[2])}`);
        }
        else if (y1 == 0) {
            return (`${switcherOnes(x[0])} hundred ${switcherOnes(x[2])}`);
        }
        else if ((y1 > 1) & (y2 > 0)) {
            return (`${switcherOnes(x[0])} hundred ${switcherDec(x[1])} ${switcherOnes(x[2])}`);
        }
        
        return (`${switcherOnes(x[0])} hundred ${switcherDec(x[1])}`);
    }
}
}
