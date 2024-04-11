export function toFa(input?: string | number | null): string {
  if (!(typeof input === "number" || typeof input === "string")) {
    return "";
  }
  return (input + "").replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

export function formatNumberWithCommas(
  number: number,
  convertToFa = true
): string {
  const newNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (convertToFa) return toFa(newNumber);
  return newNumber;
}

export function isNumber(value: unknown): value is number {
  if (typeof value === "number") return true;
  else if (typeof value === "string") return !isNaN(Number(value));
  return false;
}

export function isObject(val: unknown) {
  return (
    val !== null &&
    typeof val === "object" &&
    Array.isArray(val) === false &&
    Object.prototype.toString.call(val) === "[object Object]"
  );
}

export const isEmpty = (data: unknown): data is never | undefined | null =>
  (!data && !isNumber(data)) ||
  (Array.isArray(data) && data.length === 0) ||
  (isObject(data) && Object.keys(data).length === 0);
