### 项目介绍

这是GlobalMarket网站类(如portal, small order等)项目所用到的基于*react*实现的页面部件的部件项目

举个例子:

small order是一个独立的react网站类项目(依赖于该部件项目), 里面有一个商品桥页, 商品桥页的页面是由这里的部件拼凑而成的, small order项目里面是不实现这些部件的, 只实现这些部件所需要的后台逻辑.

所以这里包含所有网站类项目的页面部件, 而具体的网站类项目只负责组装. 这样的好处显而易见, 部件可以重用.

再举个例子:

北美渠道的商品桥页可以重用small order的商品桥页的某些部件, 如商品图片部件, 商品详情部件等

### 代码规范

参考: [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

实际的规范约束请看*.eslintrc*的配置

### 如何开发

一样的准备工作:
```
npm install
```

开始开发

1. 运行以下命令
```
gulp
```

2. 打开浏览器访问
http://localhost:3000/demo/[component name]/index.html


### 安装代码生成器
```bash
npm install -g yo
npm install -g generator-react-components
```

### 如何增加一个部件 (子部分请往下看)
```
yo react-components:add-component [component name]

例子:

yo react-components:add-component goods-item
```

### 如何增加一个子部分
```
yo react-components:add-subcomp
```

然后按提示操作

### 如何发布

注意：这里发布出去的都是源文件, 压缩合并等动作由依赖的项目自己处理

### 一些约定

. 部件文件夹命名

以中横线连接单词, 如goods-item

. entry的声明

key为首字母大写的驼峰式格式, 如:
```
  entry: {
    GoodsItem: './goods-item/index',
  },
```

子组件的命名为父级文件夹+自身文件夹名, 去掉*-*分隔符, 改用驼峰式写法, 如
```
  entry: {
    GoodsItemDetails: ['./goods-item/details/index'],
  },
```

. 部件层级结构

只允许两层(文件夹的层级是两层,一个父级文件夹+很多的子级文件夹), 即一个默认拼好的主部件和它的子部件(子部件是最小单位, 不会再有子部件的子部件)

. 图片/font字体等静态资源

统一存放在静态资源服务器上, 这里仅需引用其链接即可

### 使用方

. 需要提供的基础库

1. react
2. lodash

. 覆盖样式

组件全部是基于bootstrap样式的, 可通过覆盖变量等来改变样式, 使用方需要指定自身依赖的bootstrap的路径, 如:

```
@bootstrapPath: "node_modules/bootstrap";
```



