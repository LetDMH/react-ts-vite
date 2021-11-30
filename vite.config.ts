/*
 * @Author: dingminghui
 * @Date: 2021-11-30 14:08:38
 * @LastEditTime: 2021-11-30 15:54:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react/vite.config.ts
 */
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  plugins: [reactRefresh()],
});