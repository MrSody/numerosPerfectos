// divisibility
function divisibility (num) {
    let result = new Array(),
        numBase = num - 1;
    do {
        if ( !(num % numBase) ) {
            result.push(numBase);
        }
    } while (numBase--);
    
    return result;
}

function rankNumbers (num1, num2) {
    let result = "";

    if (num1 > num2) { 
        let numBig = num1;
        num1 = num2;
        num2 = numBig;
    }

    for (let count = num1; count <= num2; count++) {
        let arraydivisibility = divisibility(count),
            sum = 0;

        arraydivisibility.map((num)=>{
            sum += num;
        });

        if (sum == count) {
            result += count +"\n";
        }
    }

    return result;
}

//Show perfect numbers on screen
function showScreen(res){
    document.getElementById('TxtResponse').value = res;
}

function main (num1, num2) {
    let result = rankNumbers(num1, num2);

    if (result != '') {
        showScreen('The perfect natural numbers between '+ num1 +' and '+ num2 +' are: \n'+ result);
    } else {
        showScreen('There are no perfect numbers between '+ num1 +' and '+ num2);
    }
}