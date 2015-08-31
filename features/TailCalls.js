// 末尾での再帰呼び出しに限り、スタックオーバーフローが起きないことを保証
function factorial(n, acc){
    if(typeof acc == 'undefined')
    {
      acc = 1;
    }
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

factorial(100000)
