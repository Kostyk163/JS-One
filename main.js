
let numb = 1;
let numbArr = [];

while (numb <= 100) {
    if (numb == 1) {
        numbArr.push(1)
    } else {
        let result = 2;
        let i = 2;
        while (numb % i !== 0 ){
            i += 1;
            result +=1;
            } 
            if (result == numb) {
                numbArr.push(result);
            }
        }
        numb += 1;
    }

alert(numbArr);