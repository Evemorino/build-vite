/*
 * @Author: navalercon
 * @Date: 2023-01-09 16:17:57
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 16:18:09
 * @Description:
 */
const TokenKey = 'experiment';
const TokenPrefix = 'Hello ';

const isLogin = () => {
  return !!localStorage.getItem(TokenKey);
};

const getToken = () => {
  return localStorage.getItem(TokenKey);
};

const setToken = (token: string) => {
  localStorage.setItem(TokenKey, token);
};

const clearToken = () => {
  localStorage.removeItem(TokenKey);
};

export { TokenPrefix, isLogin, getToken, setToken, clearToken };
