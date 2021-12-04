/*
 * @Author: dingminghui
 * @Date: 2021-11-30 14:18:45
 * @LastEditTime: 2021-12-03 00:45:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react/src/main.tsx
 */
// import 'antd/dist/antd.css';
import { Button, message } from 'antd';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from '../src/router';
import http from './apis';

console.log(import.meta.env);

function fetchData() {
  http.get('/api/sys/_user_info').then((res: any) => {
    console.log(res);
    let str = '';
    for (let i = 0; i < res.data.data.length; i++) {
      str += `用户：${res.data.data[i]._user_name} 你好;`;
    }
    message.success(str);
  });
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route exact key={route.path} path={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
    <Button type="primary" onClick={() => fetchData()}>
      fetch data
    </Button>
  </React.StrictMode>,
  document.getElementById('root'),
);
