function sumFibs (num) {
  let sum = 0;
  const fibSeq = [0, 1];
  const addToSeq = () => {
    let nextNum = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
    return nextNum;
  }

  const checkLastTwoSum = (num) => {
    if (addToSeq() <= num) {
      return true;
    } else {
      return false;
    }
  }

  while (checkLastTwoSum(num)) {
    fibSeq.push(addToSeq());
  }

  for (let i = 0; i < fibSeq.length; i++) {
    console.log(fibSeq[i] % 2);
    if (fibSeq[i] % 2 === 1) {
      console.log(fibSeq[i])
      sum += fibSeq[i];
    } else {
      continue;
    }
  }

  console.log(fibSeq);
  return sum;
}

let testVar = sumFibs(75025);
console.log(testVar);