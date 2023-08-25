import { separationOfNumbers } from "./separationOfNumbers";

const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumberWithComma(n) {
  const numWithCommas = separationOfNumbers(n);
  const persianNumbers = PersianNumbers(numWithCommas);
  return persianNumbers;
}

// export function separationOfNumbers(n) {
//   return n.toString().replace(/\B(?=(\d{3}+(?!\d)))/g, ",");
// }
export function PersianNumbers(n) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
