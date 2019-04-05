import axios from 'axios';

//  http://easy-mock.ncgame.cc/mock/5c9f3149f274710a8d2161ac/smzdm

const _axios = axios.create({
  baseURL: "http://easy-mock.ncgame.cc/mock/5c9f3149f274710a8d2161ac/smzdm",
  timeout: 10 * 1000
});

_axios.interceptors.request.use(async function (config) {
  // console.log("请求拦截：", config);

  return config;
});

_axios.interceptors.response.use(async function (res) {
  // console.log("响应拦截", res);
  const status = res.status;

  if (status !== 200 && status !== 304) {
    throw new Error("服务器接口错误");
  }
  const { code, data } = res.data;

  if (code !== "000") {
    throw new Error("接口数据出现错误");
  }

  return data;
});

export default ({ }, inject) => {
  inject("axios", _axios);
}