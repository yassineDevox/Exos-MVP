export default function authHeader(user) {
  
  const accessToken = JSON.parse(localStorage.getItem("auth-token"));
  if (user && accessToken)
    return { Authorization: "Bearer " + accessToken };
  return {};
}
