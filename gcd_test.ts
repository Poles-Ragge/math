import { gcdBruteForce } from "./gcd.ts";
import {assertEquals } from "@std/assert";

Deno.test("Von 18/27 ist der ggT 9", () => {

    const a:number = 18;
    const b:number = 27;
    

    const i = gcdBruteForce(a, b,);
    

    assertEquals(i, 9);


});

