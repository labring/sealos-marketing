document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.partner-track');
  const items = document.querySelectorAll('.partner-item');

  // 初始克隆一些item作为缓冲
  for (let i = 0; i < 3; i++) {
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  }

  let position = 0;
  const speed = 0.2; // 控制速度
  let isPaused = false;

  function scroll() {
    if (!isPaused) {
      position -= speed;
      track.style.transform = `translateX(${position}px)`;

      // 获取第一个item的宽度
      const firstItem = track.querySelector('.partner-item');
      const itemWidth = firstItem.offsetWidth + 20; // 20是gap的值

      // 当滚动距离超过一个item的宽度时
      if (Math.abs(position) >= itemWidth) {
        track.removeChild(firstItem);
        const clone = firstItem.cloneNode(true);
        track.appendChild(clone);
        position += itemWidth;
        track.style.transform = `translateX(${position}px)`;
      }
    }
    requestAnimationFrame(scroll);
  }

  track.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  track.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  scroll();
});

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.partner-track-2');
  const items = document.querySelectorAll('.partner-item-2');

  // 初始克隆一些item作为缓冲
  for (let i = 0; i < 3; i++) {
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  }

  // 修改这里：设置初始位置为140px
  let position = 115;
  const speed = 0.2;
  let isPaused = false;

  // 立即应用初始位置
  track.style.transform = `translateX(${position}px)`;

  function scroll() {
    if (!isPaused) {
      position -= speed;
      track.style.transform = `translateX(${position}px)`;

      const firstItem = track.querySelector('.partner-item-2');
      const itemWidth = firstItem.offsetWidth + 20;

      if (Math.abs(position) >= itemWidth) {
        track.removeChild(firstItem);
        const clone = firstItem.cloneNode(true);
        track.appendChild(clone);
        position += itemWidth;
        track.style.transform = `translateX(${position}px)`;
      }
    }
    requestAnimationFrame(scroll);
  }

  track.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  track.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  scroll();
});
