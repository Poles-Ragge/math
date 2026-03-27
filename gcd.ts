

export function gcdBruteForce(a: number, b: number): number{

    var i:number = 2;

    while (a / i != b / i ){
        if (a % i == 0 || b % i == 0){
            i++
        }
        

    }
    return i;
}