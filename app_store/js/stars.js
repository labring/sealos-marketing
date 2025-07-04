// Function to fetch and display the star count from GitHub
async function fetchGitHubStars() {
  // 首先检查缓存
  const cachedData = localStorage.getItem('github-stars');
  const cacheTimestamp = localStorage.getItem('github-stars-timestamp');
  const CACHE_DURATION = 86400000; // 24小时的缓存时间（以毫秒为单位），增加缓存时间减少API调用

  // 如果有缓存且未过期，直接使用缓存数据
  if (cachedData && cacheTimestamp) {
    const now = new Date().getTime();
    if (now - parseInt(cacheTimestamp) < CACHE_DURATION) {
      const starElement = document.getElementById('github-stars');
      if (starElement) {
        starElement.textContent = cachedData;
        return;
      }
    }
  }

  // 如果没有缓存或缓存已过期，则获取新数据
  try {
    // 添加自定义头部减少被限制的可能性
    const response = await fetch('https://api.github.com/repos/labring/sealos', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Sealos-Website'
      },
      cache: 'no-store' // 避免浏览器缓存
    });

    if (!response.ok) {
      // 如果API调用失败，使用缓存的值（如果有）或默认值
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const starCount = data.stargazers_count;
    const starCountInK = (starCount / 1000).toFixed(1) + 'k';

    // 更新DOM
    const starElement = document.getElementById('github-stars');
    if (starElement) {
      starElement.textContent = starCountInK;
    } else {
      console.error('找不到 github-stars 元素，请检查 HTML');
      return;
    }

    // 保存到缓存
    localStorage.setItem('github-stars', starCountInK);
    localStorage.setItem('github-stars-timestamp', new Date().getTime().toString());
  } catch (error) {
    console.error('获取 GitHub stars 时出错:', error);

    // 使用缓存的值（如果有）或默认值
    const starElement = document.getElementById('github-stars');
    if (starElement) {
      if (cachedData) {
        // 如果有缓存，即使过期也使用它
        starElement.textContent = cachedData;
      } else {
        // 没有缓存，使用默认值
        const defaultStars = '8.3k'; // 更新的默认值
        starElement.textContent = defaultStars;

        // 即使是默认值也缓存起来，避免频繁出现错误日志
        localStorage.setItem('github-stars', defaultStars);
        localStorage.setItem('github-stars-timestamp', new Date().getTime().toString());
      }
    }
  }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchGitHubStars);
window.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar-container');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        navbar.classList.add('nav-fixed');
      } else {
        navbar.classList.remove('nav-fixed');
      }
    });
  }
});
