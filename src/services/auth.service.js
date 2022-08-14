import axios from "axios";

const API_URL = "https://webcup.iteam-s.mg/";

const register = (username, email, password) => {

  return axios.post(API_URL + "auth/register", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  
  return axios
    .post(API_URL + "auth/login", {
      email,
      password,
    })
    .then((response) => {
      // if (response.data.accessToken) {
      //   alert(response)
      //   localStorage.setItem("user", JSON.stringify(response.data));
      // }
      // return response.data;
      console.log(response)
    }).catch((error) => {
      console.log(error)
      alert("AAA")
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;