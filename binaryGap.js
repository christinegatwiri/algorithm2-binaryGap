function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    // 1. convert to binary first
    const binaryNum = N.toString(2)
    console.log(binaryNum)

    // 2. Count how many times a number appears consequtively
    // i. convert int to array
    let myFunc = num => Number(num);
  
    var intArr = Array.from(String(binaryNum), myFunc);
    console.log("my array",intArr)
    
    // count number of zeros next to each other
    let count = 0
    let max = 0

    intArr.forEach(element => {
        element == 0 ? count++ : count = 0;
        if (count > max) max = count;
    })
   
    return max
}
solution(200)