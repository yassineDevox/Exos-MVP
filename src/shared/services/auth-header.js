export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("auth-user"));
  const accessToken = JSON.parse(localStorage.getItem("auth-token"));
  if (user && accessToken)
    return { Authorization: "Bearer " + accessToken };
  return {};
}
