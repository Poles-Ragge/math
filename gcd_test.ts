import { gcdBruteForce, gcdEuclid } from "./gcd.ts";
import { assertEquals } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("Von 18/27 ist der ggT 9", () => {

    const a:number = 18;
    const b:number = 27;
    

    const i = gcdBruteForce(a, b,);
    

    assertEquals(i, 9);


});

Deno.test("Von 28/56 ist der ggT 28", () => {

    const a:number = 28;
    const b:number = 56;
    

    const i = gcdBruteForce(a, b,);
    

    assertEquals(i, 28);


});

Deno.test("Von 69/126 ist der ggT 3", () => {

    const a:number = 69;
    const b:number = 126;
    

    const i = gcdBruteForce(a, b,);
    

    assertEquals(i, 3);


});


Deno.test("Von 18/27 ist der ggT 9", () => {

  const i = new Fraction(18, 27);

  i.cancel();

  assertEquals(i.toString(), "2/3");
});

Deno.test("Von 69/126 ist der ggT 3", () => {

  const i = new Fraction(69, 126);

  i.cancel();

  // 69/126 reduced = 23/42
  assertEquals(i.toString(), "23/42");
});

Deno.test("Von 18/27 ist der ggt 9", () => {

  assertEquals(gcdEuclid(18, 27), 9);


});

Deno.test("Von 69/126 ist der ggt 3", () => {

  assertEquals(gcdEuclid(69, 126), 3);

});

Deno.test("Von 50/100 ist der ggt 50", () => {

  assertEquals(gcdEuclid(50, 100), 50);

});

