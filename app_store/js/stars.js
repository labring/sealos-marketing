        // Function to fetch and display the star count from GitHub
        async function fetchGitHubStars() {
            try {
                const response = await fetch('https://api.github.com/repos/labring/sealos');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const starCount = data.stargazers_count;
                const starCountInK = (starCount / 1000).toFixed(1) + 'k';
                const starElement = document.getElementById('github-stars');
                if (starElement) {
                    starElement.textContent = `${starCountInK}`;
                }
            } catch (error) {
                console.error('Error fetching GitHub stars:', error);
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
