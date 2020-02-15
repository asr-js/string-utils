# String Utils

_字符串工具_

<br/>

## 安装

### npm

```sh
npm install git+https://github.com/asr-js/string-utils.git#v1.0.0
```

### yarn

```sh
yarn add git+https://github.com/asr-js/string-utils.git#v1.0.0
```

<br/>

## 简介

字符串工具类，提供字符串相关的操作。

<br/>

## 方法

### limit(value: string, cLimit?: number, cSuffix?: string): string

#### 描述

限制字符串长度

#### 接收参数

- `value: string` 字符串
- `cLimit?: number` 限制长度
- `cSuffix?: string` 尾缀

#### 返回数据类型

`string`

#### 演示

```typescript
import { limit } from 'string-utils';

const date = limit('1234567890', 4, '...'); // 1234...
```
