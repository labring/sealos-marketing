// script.js
function showTools (toolId) {
  // 隐藏所有工具内容
  const tools = document.querySelectorAll('.tool-item')
  tools.forEach(tool => {
    tool.style.display = 'none'
  })

  // 显示选中的工具内容
  const selectedTool = document.getElementById(toolId)
  if (selectedTool) {
    selectedTool.style.display = 'block'
  }
}

// 默认只显示工具1的内容，其它的全部隐藏
showTools('tool1') // Assuming 'tool1' is the ID of Tool 1

// 显示二级菜单
const dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('mouseenter', () => {
    dropdown.querySelector('.submenu').style.display = 'block'
  })
  dropdown.addEventListener('mouseleave', () => {
    dropdown.querySelector('.submenu').style.display = 'none'
  })
})

//导航样式end

document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item')

  navItems.forEach(item => {
    const navLink = item.querySelector('.nav-link')
    const subMenu = item.querySelector('.sub-menu')

    if (navLink && subMenu) {
      navLink.addEventListener('click', function (e) {
        e.preventDefault()
        item.classList.toggle('active')
        subMenu.style.display = item.classList.contains('active') ? 'block' : 'none'

        // Close other open submenus
        navItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active')
            const otherSubMenu = otherItem.querySelector('.sub-menu')
            if (otherSubMenu) {
              otherSubMenu.style.display = 'none'
            }
          }
        })
      })
    }
  })
})

let currentIndex = 0
const items = document.querySelectorAll('.carousel-item')
const totalItems = items.length

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

if (nextButton) {
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems
    updateCarousel()
  })
}

if (prevButton) {
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems
    updateCarousel()
  })
}

function updateCarousel () {
  items.forEach((item, index) => {
    item.style.transform = `translateX(-${currentIndex * 100}%)`
  })
}

// ... existing code ...

// 将滚动监听代码包装在 DOMContentLoaded 事件监听器中
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  const navbar = document.getElementById('navbar-container');
  console.log('Navbar element:', navbar);
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      console.log('Scrolling', window.scrollY);
      if (window.scrollY > 0) {
        navbar.classList.add('nav-fixed');
      } else {
        navbar.classList.remove('nav-fixed');
      }
    });
  }
});

// ... existing code ...
