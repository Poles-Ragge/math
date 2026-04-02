

export function gcdBruteForce(a: number, b: number): number{

    let gcd = 1;

    for (let i = 1; i <= Math.min(a, b); i++) { //notiz: || bedeutet "or", nicht "and". 
        
        if (a % i === 0 && b % i === 0) {

            gcd = i;

        }

    }

    return gcd;
}

