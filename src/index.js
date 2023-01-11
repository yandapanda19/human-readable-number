module.exports = function toReadable (number) {
 let toTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine'];
      
 let toTwenty = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

  let num = number.toString();
  if(num < 10) {
      return(toTen[num]);
  }
  if(num.length == 2) {
      if(num > 10 && num < 20) {
        return(toTwenty[num[1] - 1]);
    }   
    if (num >= 10 && num[1] == 0) {
       return(dozens[num[0] - 1]);
    }
    else {
        return(dozens[num[0] - 1] + ' ' + toTen[num[1]]);
    }
  }
  if(num.length == 3) {
      if (num[1] == 0 && num[2] == 0) {
          return(hundreds[num[0] - 1]);
      }
      if (num[1] == 0 && num[2] > 0) {
          return(hundreds[num[0] - 1] + ' ' + toTen[num[2]]);
      }   
      if (num[1] == 1 && num[2] > 0) {
          return(hundreds[num[0] - 1] + ' ' + toTwenty[num[2] -1]);
      }
      if (num[1] >= 1 && num[2] == 0) {
          return(hundreds[num[0] - 1] + ' ' + dozens[num[1] - 1]);
      }
      if (num[1] > 1 && num[2] >= 1) {
          return(hundreds[num[0] - 1] + ' ' + dozens[num[1] - 1] + ' ' + toTen[num[2]]);
      }
      if (num == 1000) {
          return('thousand');
      }
      }
    }



