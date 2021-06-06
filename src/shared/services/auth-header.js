export default function authHeader() {
  
  const accessToken = JSON.parse(localStorage.getItem("auth-token"));
  const user = JSON.parse(localStorage.getItem("user-token"));
  if (user && accessToken)
    return { Authorization: "Bearer " + accessToken };
  return {};
}
