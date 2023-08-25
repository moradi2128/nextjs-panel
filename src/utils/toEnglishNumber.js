import { separationOfNumbers } from "./separationOfNumbers";

const EnDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// export function toPersianNumberWithComma(n) {
//   const numWithCommas = separationOfNumbers(n);
//   const persianNumbers = PersianNumbers(numWithCommas);
//   return persianNumbers;
// }

// export function separationOfNumbers(n) {
//   return n.toString().replace(/\B(?=(\d{3}+(?!\d)))/g, ",");
// }
export function toEnglishNumber(n) {
  return n
    .toString()
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
}
