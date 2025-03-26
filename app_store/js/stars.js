        // Function to fetch and display the star count from GitHub
        async function fetchGitHubStars() {
            // 首先检查缓存
            const cachedData = localStorage.getItem('github-stars');
            const cacheTimestamp = localStorage.getItem('github-stars-timestamp');
            const CACHE_DURATION = 3600000; // 1小时的缓存时间（以毫秒为单位）

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
                const response = await fetch('https://api.github.com/repos/labring/sealos');
                if (!response.ok) {
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
                const starElement = document.getElementById('github-stars');
                if (starElement) {
                    starElement.textContent = '8.2k'; // 设置一个默认值
                }
            }
        }

        // Call the function when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', fetchGitHubStars);
        window.addEventListener('DOMContentLoaded', function() {
            const navbar = document.getElementById('navbar-container');
            if (navbar) {
                window.addEventListener('scroll', function() {
                    if (window.scrollY > 0) {
                        navbar.classList.add('nav-fixed');
                    } else {
                        navbar.classList.remove('nav-fixed');
                    }
                });
            }
        });
