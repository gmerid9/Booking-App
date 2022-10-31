
import * as usersAPI from './users-api';



export function getToken() {
  const token = localStorage.getItem('token')
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));

  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null
  }

  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

  
  
  export async function signUp(userData) {
    const response = await usersAPI.signUp(userData);
  
    localStorage.setItem('token', response.jwt_token)
  
    return getUser();
  }
  

  export async function logIn(userData) {
    const response = await usersAPI.logIn(userData);
    localStorage.setItem('token', response.jwt_token)
  
    return getUser();
  }
  