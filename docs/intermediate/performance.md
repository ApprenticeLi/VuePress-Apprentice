# 性能优化

## 指标

### 真实指标

- [First Contentful Paint (FCP)](https://web.dev/fcp/)
- [Largest Contentful Paint (LCP)](https://web.dev/lcp/)
- [First Input Delay (FID)](https://web.dev/fid/)
- [Cumulative Layout Shift (CLS)](https://web.dev/cls/)

### 实验室指标

- [Total Blocking Time (TBT)](https://web.dev/tbt)
- [Time to Interactive (TTI)](https://web.dev/tti/)

## 评估工具

- Chrome DevTools
  - [Chrome 开发者工具官方文档](https://developer.chrome.com/docs/devtools/)
- [LightHouse](https://developers.google.com/web/tools/lighthouse?hl=zh-cn)
- [PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about)
- [WebPageTest](https://www.webpagetest.org/)

## 优化方案

### 压缩

- 代码压缩
  - [UglifyJS](https://github.com/mishoo/UglifyJS)
- 文本压缩（gzip、Brotli、Zopfli 等）
- [Tree-shaking](https://webpack.docschina.org/guides/tree-shaking)
- [Code-splitting](https://webpack.docschina.org/guides/code-splitting/)

### 图片优化

- 小图优化（css sprite、iconfont、dataURI、svg）
- 图片格式选择
- 压缩（如 tinypng）
- 响应式

### 加载策略

- 懒加载
- DNS 预解析、预加载、预渲染
- 离线化（ServiceWorker、AppCache、离线包等）
- [HTTP 缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)
- [数据缓存（localStorage、sessionStorage）](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- 资源加载（顺序、位置、异步等）
  - [async、defer](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script)
- 请求合并
- HTTP2
- CDN
- 服务端渲染

### 执行渲染

- css 代码优化（选择器、启用 GPU、避免表达式等）
- 使用 requestAnimationFrame 实现视觉变化
- 降低复杂度或使用 Web Worker
- 避免大型、复杂的布局和布局抖动
- 简化绘制复杂度、减少绘制区域
- 输入处理程序防抖

## 感官体验优化

- 骨架屏
- Snapshot
- Loading
