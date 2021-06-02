# 手动搭建项目结构

## 安装webpack

``` cmd
npm install --save-dev webpack webpack-cli
```

## 安装React

``` cmd
npm install react react-dom
```

## 安装TypeScript

``` cmd
npm install --save-dev typescript 
```

## 安装TypeScript声明文件

``` cmd
npm i --save-dev @types/react @types/react-dom
```

## 安装相关loader

### 1. cssloader 和 styleloader

``` cmd
npm install --save-dev style-loader css-loader
```

### 2. urlloader 和 fileloader

``` cmd
npm install --save-dev url-loader file-loader
```

### 3. 安装babel

``` cmd
// babel内核及环境：
npm install --save-dev @babel/core @babel/preset-env

// react和ts支持
npm install --save-dev @babel/preset-react @babel/preset-typescript

// loader：
npm install --save-dev babel-loader
```

## 安装相关插件

### 1. 安装 html-webpack-plugin

``` cmd
npm install --save-dev html-webpack-plugin
```

### 2. 安装 webpack-dev-server

``` cmd
npm install --save-dev webpack-dev-server
```

### 3. 安装 webpack-merge

``` cmd
npm install --save-dev webpack-merge
```

### 4. 安装 copy-webpack-plugin

``` cmd
npm install --save-dev copy-webpack-plugin
```

### 5. 安装 clean-webpack-plugin

``` cmd
npm install --save-dev clean-webpack-plugin
```
