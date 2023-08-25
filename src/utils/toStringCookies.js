export function toStringCookies(cookies) {
  let strCookie = "";
  cookies.getAll().forEach((element) => {
    strCookie += `${element?.name}=${element?.value}; `;
  });

  return strCookie;
}
