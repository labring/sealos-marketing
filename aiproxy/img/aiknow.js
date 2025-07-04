window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // 处理链接点击
  const modelGalleryLink = document.querySelector('a[href="#moxinggc"]');
  if (modelGalleryLink) {
    modelGalleryLink.addEventListener('click', function (e) {
      e.preventDefault();

      // 获取目标元素
      const targetElement = document.getElementById('moxinggc');
      if (targetElement) {
        // 计算目标位置，减去顶部留白（例如200px）
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 300;

        // 平滑滚动
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
});
