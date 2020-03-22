# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## ABOUT ISSUE

在 `.umirc` 配置插件参数如下，发现 `exclude` 配置未生效, 第三方包 `@kiwicom/orbit-components` 未被转换

```ts
{
  extraBabelPlugins: [
    [
      'styled-components-px2rem',
      {
        rootValue: 32,
        unitPrecision: 5,
        minPixelValue: 0,
        multiplier: 1,
        transformRuntime: true,
        exclude: /!\/node_modules\//
      },
    ],
  ]
}
```
