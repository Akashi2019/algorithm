## algorithm
### 算法练习

#### 1.安装

```js
npm install jest --save-dev
npm install babel-jest babel-core babel-preset-env regenerator-runtime -D
```

编辑package.json

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

编辑 .babelrc

```json
{
  "presets": ["env"]
}
```

#### 2.创建js文件

```js
function sum(a, b) {
    return a + b;
}
export default sum
```

```js
import sum from './index'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})
```

#### 3.启动测试

```js
npm test
```

#### 4.工具安装

- vscode