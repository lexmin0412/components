# Components

基于 Stencil 构建的 Web Components 组件库。

![Repobeats](https://repobeats.axiom.co/api/embed/e9ec37705b8b3bbd0b6dd4c32f43da91ba9f9b3c.svg "Repobeats analytics image")

## Packages

| 子包                                                                         | 信息                                                                                                                                    | 说明                                |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| [@lexmin0412/wc](https://www.npmjs.com/package/@lexmin0412/wc)               | ![version](https://img.shields.io/npm/v/@lexmin0412/wc)  ![downloads-month](https://img.shields.io/npm/dm/@lexmin0412/wc)               | Web Component 组件库                |
| [@lexmin0412/wc-react](https://www.npmjs.com/package/@lexmin0412/wc-react)   | ![version](https://img.shields.io/npm/v/@lexmin0412/wc-react)  ![downloads-month](https://img.shields.io/npm/dm/@lexmin0412/wc-react)   | Web Component 组件库的 React 包装器 |
| [@lexmin0412/wc-vue](https://www.npmjs.com/package/@lexmin0412/wc-vue)       | ![version](https://img.shields.io/npm/v/@lexmin0412/wc-vue)  ![downloads-month](https://img.shields.io/npm/dm/@lexmin0412/wc-vue)       | Web Component 组件库的 Vue 包装器   |
| [@lexmin0412/wc-themes](https://www.npmjs.com/package/@lexmin0412/wc-themes) | ![version](https://img.shields.io/npm/v/@lexmin0412/wc-themes)  ![downloads-month](https://img.shields.io/npm/dm/@lexmin0412/wc-themes) | 主题                                |
| [@lexmin0412/wc-icons](https://www.npmjs.com/package/@lexmin0412/wc-icons)   | ![version](https://img.shields.io/npm/v/@lexmin0412/wc-icons)  ![downloads-month](https://img.shields.io/npm/dm/@lexmin0412/wc-icons)   | 图标                                |

## Roadmap

- [x] 第一个组件
- [x] React 包装器
- [x] Vue 包装器
- [ ] 组件库文档
- [ ] 主题应用

## Development

### 本地开发

```shell
pnpm dev
```

### 新增组件

```shell
pnpm new
```

### 版本发布

新增/修改组件代码后提交到远程，Github Actions 会自动通过运行 lerna publish patch --yes 脚本发布新版本。
