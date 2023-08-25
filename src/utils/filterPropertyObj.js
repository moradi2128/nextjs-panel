export function filterPropertyObj(obj, keyTarget) {
  const newObj = Object.fromEntries(
    Object.entries(obj).filter(([key]) => !key.includes(keyTarget))
  );
  return newObj;
}
