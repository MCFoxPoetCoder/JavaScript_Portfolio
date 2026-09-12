function sumAll (arr) {
    let sum = 0;
    const duration = Math.abs(arr[0] - arr[1]) + 1;
    let lowNum;
    if (arr[0] < arr[1]) {
        lowNum = arr[0];
    } else {
        lowNum = arr[1];
    }
    for (let i = lowNum; i < duration + lowNum; i++) {
        sum += i;
        console.log(sum);
    }
    return sum;
}

let testVar = sumAll([10, 5]);
console.log(testVar);
