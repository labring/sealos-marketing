# Sealos 营销网站字体粗细优化更新

## 优化概述

为了解决字体粗细设置中的问题，我们进行了以下优化：

1. **使用系统字体替代单一字体文件**
   - 移除了单一的 `pingfang.ttf` 文件引用
   - 使用系统原生的 PingFang SC 字体（macOS/iOS）
   - 添加了适当的回退字体机制，确保跨平台显示一致性

2. **标准化字体粗细值**
   - 将非标准字重值（如550、450）替换为标准字重值（400、500、600）
   - 确保所有浏览器都能正确渲染字体粗细

3. **建立清晰的字重层级**
   - 标题（h1）: 600 - 加粗突出
   - 二级标题（h2）: 500 - 中等强调
   - 三级标题（h3）: 500 - 中等强调
   - 正文文本（p, li）: 400 - 标准正文
   - 强调元素（统计数字）: 500 - 适度强调
   - 按钮文本: 500 - 清晰可见
   - 交互状态（悬停、活动）: 600 - 明显强调

4. **改进字体回退**
   - 添加了 "PingFang SC Fallback" 字体族
   - 针对 Windows 用户优化了微软雅黑的加载

5. **解决特定显示问题**
   - 修复了 `ys-fz` 类文本内容在某些视图断点处换行的问题
   - 移除了 hero-content 区域的视差效果，以消除鼠标移动时的变形效果

## 技术实现

1. **优化的字体声明**

   ```css
   @font-face {
     font-family: 'PingFang SC';
     src: local('PingFang SC');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }

   @font-face {
     font-family: 'PingFang SC';
     src: local('PingFang SC Medium'), local('PingFang-SC-Medium');
     font-weight: 500;
     font-style: normal;
     font-display: swap;
   }

   @font-face {
     font-family: 'PingFang SC';
     src: local('PingFang SC Semibold'), local('PingFang-SC-Semibold');
     font-weight: 600;
     font-style: normal;
     font-display: swap;
   }
   ```

2. **字体堆栈优化**

   ```css
   font-family:
     'PingFang SC', 'PingFang SC Fallback', 'Helvetica Neue', 'Hiragino Sans GB', 'Microsoft YaHei',
     '微软雅黑', Arial, sans-serif;
   ```

3. **特定显示问题解决方案**

   ```css
   /* ys-fz类显示优化 */
   .ys-fz {
     display: inline-block;
     white-space: nowrap;
   }
   ```

4. **移除不必要的视差效果**
   从 JS 代码中移除了对 hero-content 应用 transform 的视差效果，解决了鼠标移动时产生的变形问题。

## 效果与优势

1. **更好的跨平台一致性**
   - 在Mac、Windows和移动设备上有一致的字体显示效果
   - 无需下载额外的字体文件，加快页面加载速度

2. **更精准的字重分级**
   - 使用标准字重值确保浏览器能准确渲染
   - 建立了清晰的视觉层次结构

3. **更好的性能**
   - 减少了额外的字体文件加载
   - 利用用户系统已有的字体资源

4. **改进的布局稳定性**
   - 防止文本换行造成的布局偏移
   - 移除不必要的视觉效果，提高用户体验一致性

## 未来优化建议

1. **考虑添加可变字体支持**
   - 如果需要更细腻的字重控制，可考虑添加可变字体（Variable Font）支持
   - 可变字体允许在单个文件中支持多种字重和样式

2. **为不同语言添加更专门的字体**
   - 针对英文内容，可添加更专门的西文字体
   - 为数字添加等宽字体选项以改善对齐

3. **优化交互动画**
   - 使用 CSS 动画替代 JavaScript 实现的效果
   - 尽量减少对 DOM 元素样式的直接操作，提高性能
