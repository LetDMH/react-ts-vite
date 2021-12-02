/*
 * @Author: dingminghui
 * @Date: 2021-11-30 14:18:45
 * @LastEditTime: 2021-12-02 23:58:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react/src/main.tsx
 */
// import 'antd/dist/antd.css';
import { Button } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from '../src/router';

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
    <Button type="primary">Index</Button>
  </React.StrictMode>,
  document.getElementById('root'),
);
