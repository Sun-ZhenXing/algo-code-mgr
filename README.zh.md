# Nuxt 3 题库管理

使用 MDC 构建动态渲染的 MarkDown + Vue 组件。

## 1. 环境依赖

需要安装 `pnpm` 8+，且要求 Node.js >= 16，安装方法：

```bash
npm i -g pnpm
```

或者在启用 `corepack` 时使用 `corepack` 安装最新版本：

```bash
corepack prepare pnpm@latest --activate
```

安装依赖：

```bash
pnpm i
```

升级全部依赖项目：

```bash
pnpm up
```

删除不需要的依赖：

```bash
pnpm store prune
```

## 2. 开发部署

开发：

```bash
pnpm dev
```

构建：

```bash
pnpm build
```

静态构建：

```bash
pnpm generate
```
