//Dans le cas où nous accédons à des ressources protégées, la requête HTTP a besoin de l'en-tête Authorization.
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
}