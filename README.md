![预览](https://user-images.githubusercontent.com/103173720/237040800-c6b5174a-adc8-4362-986d-9d630770e10e.jpg)

# 项目技术点总结

## 1. 技术栈

**vue3 + elementPlus + node express + 全栈项目**

*** 后端代码:

(后端代码)[https://github.com/youxiaobei666/my-cms-node]

## 2. 项目准备

- 安装 `element-plus`、`i18n` 等依赖

- 把 `vuex`、`vue-store` 初始化

## 2. 登陆页面搭建

- 创建 views -> login -> `index.vue`,写入内容后, 在 styles -> login -> `index.scss` 写样式

- 体验用户名： `amdin` ； 密码： `123456`

## 3. utils 工具

- 配置环境变量封装 `axios` 模块

- 封装登录请求动作，封装到 `vuex` 的 `action` 中

> 在 `store` 下创建 `modules` 文件夹，创建 `user.js` 模块，用于处理所有和 **用户相关** 的内容

- 登录触发动作,在 `login` 中，触发定义的 `action`

## 4. 本地缓存

- 本地缓存处理方案

通常情况下，在获取到 `token` 之后，我们会把 `token` 进行缓存，而缓存的方式将会分为两种：

1. 本地缓存：`LocalStorage`
2. 全局状态管理：`Vuex`

保存在 `LocalStorage` 是为了方便实现 **自动登录功能**

保存在 `vuex` 中是为了后面在其他位置进行使用

在 `vuex` 的 `user` 模块下，处理 `token` 的保存

## 5. interceptors 响应拦截器

- 成功提示和错误提示
- 返回数据 data, 无须在 store 中使用多个 data.data.

## 6. 登录鉴权解决方案

在处理了登陆后操作之后，接下来我们就来看一下最后的一个功能，也就是 **登录鉴权**

首先我们先去对 **登录鉴权** 进行一个定义，什么是 **登录鉴权** 呢？

> 当用户未登陆时，不允许进入除 `login` 之外的其他页面。
>
> 用户登录后，`token` 未过期之前，不允许进入 `login` 页面

而想要实现这个功能，那么最好的方式就是通过 [路由守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB) 来进行实现。

## 7. Layout 页面架构

把页面分为了三个部分，分别是：

1. 左侧的 `Menu` 菜单
2. 顶部的 `NavBar`
3. 中间的内容区 `Main`

还有一些其他的小功能，比如：

1. 退出的通用逻辑封装
2. 伸缩侧边栏动画
3. `vue3` 动画
4. 组件状态驱动的动态 `CSS` 值等等

> tip
> 为了在 `script` 中获取变量：在使用 `scss` 的 `variables.scss `变量时，文件名改为 `variables.module.scss`

## 8. 获取用户基本信息

实现一下 `navbar` 中的 **头像菜单** 功能

功能主要分为三个部分：

1. 获取并展示用户信息
2. `element-plus` 中的 `dropdown` 组件使用
3. 退出登录的方案实现

**获取并展示用户信息** 把它分为三部分进行实现：

1. 定义接口请求方法
2. 定义调用接口的动作
3. 在权限拦截时触发动作

> 通过路由导航拦截器确定是不是要发起请求（因为有可能存在用户信息，就是用户已经登陆过）

## 9. 渲染用户头像菜单

拿到了 **用户数据，并且在 `getters` 中做了对应的快捷访问** ，那么接下来我们就可以根据数据渲染出 **用户头像内容**

渲染用户头像，我们将使用到 `element-plus` 的两个组件：

1. `avatar`
2. `Dropdown`

## 10. 退出登录方案实现

**退出登录** 一直是一个通用的前端实现方案，对于退出登录而言，它的触发时机一般有两种：

1. 用户**主动**退出
2. 用户**被动**退出

其中：

1. 主动退出指：用户点击登录按钮之后退出
2. 被动退出指：`token` 过期或被 其他人”顶下来“ 时退出

那么无论是什么退出方式，在用户退出时，所需要执行的操作都是固定的：

1. 清理掉当前用户缓存数据
2. 清理掉权限相关配置
3. 返回到登录页

#### 用户被动退出

1. 主动处理：主要应对 `token` 失效
2. 被动处理：同时应对 `token` 失效 与 **单用户登录**

> 我们知道 `token` 表示了一个用户的身份令牌，对 服务端 而言，它是只认令牌不认人的。所以说一旦其他人获取到了你的 `token` ，那么就可以伪装成你，来获取对应的敏感数据。
>
> 所以为了保证用户的信息安全，那么对于 `token` 而言就被制定了很多的安全策略，比如：
>
> 1. 动态 `token`（可变 `token`）
> 2. 刷新 `token`
> 3. 时效 `token`
> 4. ...

而我们此时所选择的方案就是 **时效 `token`**

代码中的实现方案为：

1. 在用户登陆时，记录当前 **登录时间**
2. 制定一个 **失效时长**
3. 在接口调用时，根据 **当前时间** 对比 **登录时间** ，看是否超过了 **时效时长**
   1. 如果未超过，则正常进行后续操作
   2. 如果超过，则进行 **退出登录** 操作

单用户登陆方案：

在响应拦截器中判读特点的状态码，例如 401

## 11. 动态 menu 菜单处理方案解析

> 前后端的配合思路：
>
> - 后端的职责是返回 permission 字段
> - 前端根据此字段，在用户登录成功之后，把对应的路由添加到私有路由中。动态渲染对应的侧边栏。

制定：

1. 对于单个路由规则而言（循环）：
   1. 如果`meta && meta.title && meta.icon` ：则显示在 `menu` 菜单中，其中 `title` 为显示的内容，`icon` 为显示的图标
      1. 如果存在 `children` ：则以 `el-sub-menu（子菜单）` 展示
      2. 否则：则以 `el-menu-item（菜单项）` 展示
   2. 否则：不显示在 `menu` 菜单中

#### 生成动态 menu 菜单

整个 `menu` 菜单，分成三个组件来进行处理

1. `SidebarMenu`：处理数据，作为最顶层 `menu` 载体
2. `SidebarItem`：根据数据处理 **当前项为 `el-submenu` || `el-menu-item`**
3. `MenuItem`：处理 `el-menu-item` 样式

## 12. 动态面包屑

**根据当前的 `url` 自动生成面包屑导航菜单**

无论之后路径发生了什么变化，**动态面包屑** 都会正确的进行计算

会分成三大步来实现

1. 创建、渲染基本的面包屑组件
2. 计算面包屑结构数据
3. 根据数据渲染动态面包屑内容

## 13. Icon 图标处理方案：封装 SvgIcon 组件

一共分为两类：

1. `element-plus` 的图标
2. 自定义的 `svg` 图标

对于 `element-plus` 的图标我们可以直接通过 `el-icon` 来进行显示，但是自定义图标的话，我们暂时还缺少显示的方式，所以说我们需要一个自定义的组件，来显示我们自定义的 `svg` 图标。

那么这种自定义组件处理 **自定义 `svg` 图标的形式**，就是我们在面临这种问题时的通用解决方案。

那么对于这个组件的话，它就需要拥有两种能力：

1. 显示外部 `svg` 图标
2. 显示项目内的 `svg` 图标

处理 **内部的 `svg` 图标展示。**

1.  首先导入所有的 `svg` 图标，导入到 `src -> icons -> svg` 处

2.  在 `icons` 下创建 `index.js` 文件，该文件中需要完成两件事情：

    1. 导入所有的 `svg` 图标
    2. 完成 `SvgIcon` 的全局注册

**使用 svg-sprite-loader 处理 svg 图标**

```js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}
```

最后全局注册组件就可以了

## 14. 国际化切换语言

**国际化实现原理**

```html
<script>
  // 1. 定义 msg 值的数据源
  const messages = {
    en: {
      msg: 'hello world',
    },
    zh: {
      msg: '你好世界',
    },
  }
  // 2. 定义切换变量
  let locale = 'en'
  // 3. 定义赋值函数
  function t(key) {
    return messages[locale][key]
  }
  // 4. 为 msg 赋值
  let msg = t('msg')
  console.log(msg)
  // 修改 locale， 重新执行 t 方法，获取不同语言环境下的值
</script>
```

1. 通过一个变量来 **控制** 语言环境
2. 所有语言环境下的数据源要 **预先** 定义好
3. 通过一个方法来获取 **当前语言** 下 **指定属性** 的值
4. 该值即为国际化下展示值

**基于 vue-i18n 的国际化实现方案**

1. 创建 `messages` 数据源
2. 创建 `locale` 语言变量
3. 初始化 `i18n` 实例
4. 注册 `i18n` 实例

**封装 langSelect 组件**

**刷新页面后，当前的国际化选择可以被保留**，所以想要实现这个功能，那么就需要进行 **国际化的缓存处理**

此处的缓存，我们依然通过两个方面进行：

1. `vuex` 缓存
2. `LocalStorage` 缓存

## 15. 动态换肤功能 *

在 `scss` 中，我们可以通过 `$变量名:变量值` 的方式定义 `css 变量`，然后通过该 `css 变量` 来去指定某一块 `DOM` 对应的颜色。

这个就是实现 **动态换肤** 的原理。

但在我们的项目中想要实现动态换肤，需要同时处理两个方面的内容：

1. `element-plus` 主题
2. 非 `element-plus` 主题

**创建 ThemeSelect 组件**

查看完成之后的项目我们可以发现，`ThemeSelect` 组件将由两部分组成：

1. `navbar` 中的展示图标
2. 选择颜色的弹出层

**创建 SelectColor 组件**

在有了 `ThemeSelect ` 之后，接下来我们来去处理颜色选择的组件 `SelectColor`，在这里我们会用到 `element` 中的 `el-color-picker` 组件

对于 `SelectColor` 的处理，我们需要分成两步进行：

1. 完成 `SelectColor` 弹窗展示的双向数据绑定
2. 把选中的色值进行本地缓存

对于 `element-plus` 的主题变更，相对比较复杂，所以说整个过程我们会分为三部分：

1. 实现原理
2. 实现步骤
3. 实现过程

**实现原理：**

核心的原理是：**通过修改 `scss` 变量 ** 的形式修改主题色完成主题变更

但是对于 `element-plus` 而言，我们怎么去修改这样的主题色呢？

> 1.  对于 `element-plus`：因为 `element-plus` 是第三方的包，所以它 **不是完全可控** 的，那么对于这种最简单直白的方案，就是直接拿到它编译后的 `css` 进行色值替换，利用 `style` **内部样式表** 优先级高于 **外部样式表** 的特性，来进行主题替换
> 2.  对于自定义主题：因为自定义主题是 **完全可控** 的，所以我们实现起来就轻松很多，只需要修改对应的 `scss`变量即可

其实整体的原理非常简单，分为三步：

1. 获取当前 `element-plus` 的所有样式
2. 找到我们想要替换的样式部分，通过正则完成替换
3. 把替换后的样式写入到 `style` 标签中，利用样式优先级的特性，替代固有样式

**实现步骤：**

对应原理总体可分为四步：

1. 获取当前 `element-plus` 的所有样式
2. 定义我们要替换之后的样式
3. 在原样式中，利用正则替换新样式
4. 把替换后的样式写入到 `style` 标签中

## 16. screenfull （全屏） 功能实现

整体的方案实现分为两步：

1. 封装 `screenfull` 组件
   1. 展示切换按钮
   2. 基于 [screenfull](https://www.npmjs.com/package/screenfull) 第三方库实现切换功能
2. 在 `navbar` 中引入该组件

## 17. 页面搜索

`headerSearch` 是复杂后台系统中非常常见的一个功能，它可以：**在指定搜索框中对当前应用中所有页面进行检索，以 `select` 的形式展示出被检索的页面，以达到快速进入的目的**

整个 `headerSearch` 其实可以分为三个核心的功能点：

1. 根据指定内容对所有页面进行检索
2. 以 `select` 形式展示检索出的页面
3. 通过检索页面可快速进入对应页面
4. **根据指定内容检索所有页面，把检索出的页面以 `select` 展示，点击对应 `option` 可进入**

**方案：**

1. 创建 `headerSearch` 组件，用作样式展示和用户输入内容获取
2. 获取所有的页面数据，用作被检索的数据源
3. 根据用户输入内容在数据源中进行 [模糊搜索](https://fusejs.io/)
4. 把搜索到的内容以 `select` 进行展示
5. 监听 `select` 的 `change` 事件，完成对应跳转

进行  [模糊搜索](https://fusejs.io/)  的话，那么需要依赖一个第三方的库  [fuse.js](https://fusejs.io/)

数据源处理完成之后，最后我们就只需要完成:

1. 渲染检索出的数据
2. 完成对应跳转

> 注意：需要在语言改变的时候，切换我们的数据源，以完成英文状态的搜索。