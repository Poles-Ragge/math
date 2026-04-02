import { roundTo } from "./utils.ts";

export class Fraction {
  toNumber(): any {
    throw new Error("Method not implemented.");
  }
  constructor(
    private numerator: number,
    private denominator: number,

  ) {
    if (denominator == 0) {
      throw new Error("Denominator can't be 0")
    }

    this.cancel();
  }

  public add(other: Fraction) {
    const newNumerator =
      this.numerator * other.denominator + other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
    this.cancel();
  }

  public subtract(other: Fraction) {
    const newNumerator =
      this.numerator * other.denominator - other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
    this.cancel();
  }

  public multiply(other: Fraction) {
    const newNumerator = this.numerator * other.numerator;
    const newDenominator = this.denominator * other.denominator;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
    this.cancel();
  }

  public divide(other: Fraction) {
    const newNumerator = this.numerator * other.denominator;
    const newDenominator = this.denominator * other.numerator;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
    this.cancel();
  }

  public toFloat(precision: number): number {
    return roundTo(this.numerator / this.denominator, precision);
  }

  public toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }

  public static parse(expression: string): Fraction {
    const parts = expression.split("/");
    if (parts.length != 2) {
      throw new Error(`illegal syntax: "[numerator]/[denominator]" required`);
    }
    const numerator = Number.parseInt(parts[0].trim());
    const denominator = Number.parseFloat(parts[1].trim());
    if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
      throw new Error(`non-numeric numerator/denominator`);
    }
    return new Fraction(numerator, denominator);
    this.cancel();
  }

  public cancel(): void{

    let gcd = (a: number, b: number): number => {
      while (b !== 0) {

        let i = b;
        b = a % b;
        a = i;

      }
      return a;
    };

    // Unten: Wird benötigt da ansonsten das resultat nicht von z.b 18/27 zu 2/3 verkleinert wird.
    let commonDivisor = gcd(this.numerator, this.denominator);
    this.numerator /= commonDivisor;
    this.denominator /= commonDivisor;

  }

  
}
