# 手动搭建项目结构

## 安装 webpack

```node
npm install --save-dev webpack webpack-cli
```

## 安装 React

```node
npm install --save react react-dom
```

## 安装与配置 TypeScript

- 安装 TypeScript

  ```node
  npm install --save-dev typescript
  ```

- 安装 TypeScript 声明文件

  ```node
  npm install --save-dev @types/react @types/react-dom
  ```

- [TypeScript 配置](../tsconfig.json)

## 安装 Webpack 插件与 loader

- 安装 babel

  1. babel 内核及环境：

     ```node
     npm install --save-dev @babel/core @babel/preset-env
     ```

  2. react 和 ts 支持

     ```node
     npm install --save-dev @babel/preset-react @babel/preset-typescript
     ```

  3. loader：

     ```node
     npm install --save-dev babel-loader
     ```

- 安装 html-webpack-plugin

  ```node
  npm install --save-dev html-webpack-plugin
  ```

- cssloader 和 styleloader

  ```node
  npm install --save-dev style-loader css-loader
  ```

- urlloader 和 fileloader

  ```node
  npm install --save-dev url-loader file-loader
  ```

- 安装 webpack-dev-server

  ```node
  npm install --save-dev webpack-dev-server
  ```

- 安装 webpack-merge

  ```node
  npm install --save-dev webpack-merge
  ```

- 安装 copy-webpack-plugin

  ```node
  npm install --save-dev copy-webpack-plugin
  ```

- 安装 clean-webpack-plugin

  ```node
  npm install --save-dev clean-webpack-plugin
  ```

## 安装 AntDesign

```node
  npm install antd --save
```
