# 小兔鲜 vue-rabbit

基于 Vue 3 的电商前台项目，覆盖首页浏览、分类、详情、购物车、登录、结算、支付和会员中心。

仓库：[continue-sun-coder/vue-rabbit-website](https://github.com/continue-sun-coder/vue-rabbit-website)

## 技术栈

- Vue 3 + Vite
- Vue Router
- Pinia（含持久化）
- Element Plus
- Axios
- Sass

## 功能

- 首页：分类导航、轮播、新鲜好物、人气推荐
- 分类 / 二级分类、商品详情
- 购物车、结算、支付宝支付回调
- 登录、会员中心、订单列表

商品分类、轮播和商品数据来自黑马小兔鲜接口：

`http://pcapi-xiaotuxian-front-devtest.itheima.net`

## 运行

```sh
npm install
npm run dev
```

浏览器打开终端里提示的本地地址（端口被占用时可能是 `http://localhost:5174/`）。

```sh
npm run build
npm run preview
npm run lint
```

## 开发建议

VS Code + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（禁用 Vetur）。
