# Turborepo

### 安装
```sh
npx create-turbo@latest
```

### 构建
```
cd menorepo-turborepo
pnpm build
```

### 开发

```
cd menorepo-turborepo
pnpm dev
```

### 远程缓存

```
cd menorepo-turborepo
npx turbo login
```

```
npx turbo link
```

### 新建包 或 app

```
turbo generate
```

```
turbo generate <generator> [options]
```

#### 生成子包
```
turbo generate package my-package
```


#### 生成新的 React 组件
```
turbo generate component MyComponent
```

#### 生成一个新的页面
```
turbo generate page HomePage
```
