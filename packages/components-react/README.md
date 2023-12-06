# @lexmin0412/wc-react

基于 Stencil 构建的通用 Web Components 组件库。

## 安装

```shell
pnpm add @lexmin0412/wc-react
```

## 用法

```tsx
import { defineCustomElements, LexminFooter } from '@lexmin0412/wc-react';
// 声明自定义组件
defineCustomElements()

export default function App() {
  return (
    <LexminFooter />
  );
}

```
