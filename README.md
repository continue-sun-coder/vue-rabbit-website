# 小兔鲜 vue-rabbit

基于 Vue 3 的电商前台，实现首页浏览、分类、商品详情、购物车、登录、结算、支付和会员中心。

仓库：[continue-sun-coder/vue-rabbit-website](https://github.com/continue-sun-coder/vue-rabbit-website)

接口：`https://pcapi-xiaotuxian-front-devtest.itheima.net`

## 功能

- **首页**：顶部分类导航、轮播图、新鲜好物、人气推荐、商品楼层
- **分类**：一级分类、二级分类、商品列表
- **详情**：主图预览、SKU 规格选择、加入购物车
- **购物车**：未登录时保存在本地；登录后与服务端购物车合并，支持增删改
- **登录**：表单校验、Token 鉴权，登录状态本地持久化
- **结算 / 支付**：确认订单、跳转支付宝、支付结果回跳
- **会员中心**：用户信息、订单列表

## 技术栈

- Vue 3（Composition API）+ Vite 4
- Vue Router 4：History 模式、嵌套路由
- Pinia + pinia-plugin-persistedstate：用户信息和购物车持久化
- Axios：统一 `baseURL`、请求头带 Token、错误提示
- Element Plus：按需引入
- Sass、VueUse（图片懒加载）

## 主要实现

**购物车**  
未登录写入 Pinia 本地列表；登录后调用合并接口，再拉取服务端最新购物车。合并失败时登录仍然成功。

**请求**  
Axios 请求拦截器自动加上 `Bearer Token`。响应拦截器取出业务数据；接口或网络出错时用 Element Plus 提示，避免 `response` 为空导致页面报错。

**组件**  

- `XtxSku`：商品规格选择  
- `XtxImageView`：详情页主图预览  
- `v-img-lazy`：图片进入视口后再加载

**路由**  
`Layout` 为整站布局。首页、分类、详情、购物车、结算、会员是子路由；登录页独立。会员中心下再分「资料」和「订单」。

**工程配置**  
`@` 指向 `src`，Element Plus 自动按需导入，Sass 全局变量注入，ESLint 检查。

## 运行

需要 Node.js 16+（建议 18）和 npm。

```sh
npm install
npm run dev
```

浏览器打开终端里的地址，一般是 `http://localhost:5173/`。端口被占用时会改用 `5174`。

```sh
npm run build
npm run preview
npm run lint
```

测试账号：

```
账号：xiaotuxian001
密码：123456
```

分类、轮播和商品图都由接口返回。接口慢或不可用时，导航和商品可能暂时是空的。

## 目录

```text
src/
├── apis/          # 接口
├── assets/        # 静态图片
├── components/    # 全局组件（SKU、图片预览）
├── composables/   # 组合式函数
├── directives/    # 自定义指令（图片懒加载）
├── router/        # 路由
├── stores/        # Pinia：用户 / 分类 / 购物车
├── styles/        # 全局样式、Element 主题
├── utils/http.js  # Axios 封装
└── views/         # 页面
```

