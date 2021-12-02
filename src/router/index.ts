/*
 * @Author: your name
 * @Date: 2021-12-01 23:37:08
 * @LastEditTime: 2021-12-01 23:43:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react/src/router/index.ts
 */
// router/index.js
import App from '../App';
import About from '../components/about';

const routes = [
  {
    path: '/',
    component: App,
  },
  {
    path: '/about',
    component: About,
  },
];

export default routes;
