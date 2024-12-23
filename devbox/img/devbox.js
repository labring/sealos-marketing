
function showTooltip(e) {
    const tooltip = e.currentTarget.querySelector('#tooltip');
    tooltip.style.display = 'block';
}

function hideTooltip() {
    const tooltip = document.querySelector('#tooltip');
    if (tooltip) tooltip.style.display = 'none';
}


function updateButtonPositions() {
    const buttonConfigs = [
        { selector: '.icon-salesforce', topRange: [20, 20], leftRange: [23.5, 23.5] },
        { selector: '.icon-intercom', topRange: [49, 49], leftRange: [6, 6] },
        { selector: '.icon-mailchimp', topRange: [49, 49], leftRange: [16.5, 17] },
        { selector: '.icon-stripe', topRange: [77, 80], leftRange: [23.5, 23] },
        { selector: '.icon-intercom2', topRange: [94, 95], leftRange: [10, 10] },
        { selector: '.icon-segment', topRange: [3, 3], left: 10 },
        { selector: '.connect-btn', topRange: [49, 49], leftRange: [28.5, 28.5] },
        { selector: '.connect-btn2', topRange: [49, 49], leftRange: [73.5, 73] },
        { selector: '.icon-salesforce2', topRange: [32.5, 32.5], left: 86 },
        { selector: '.icon-salesforce3', topRange: [0, 0], left: 86 },
        { selector: '.icon-salesforce4', topRange: [65.5, 65.5], left: 86 },
        { selector: '.icon-salesforce5', topRange: [97.5, 98.5], left: 86 },
        { selector: '.hower-id', topRange: [-100, -100], leftRange: [100, 140] },
        { selector: '.commit', topRange: [49.5, 45], leftRange: [50, 50], widthRange: [320, 500], heightRange: [200, 280] },
        { selector: '.commit2', topRange: [49.5, 45], leftRange: [50, 50], widthRange: [340, 520], heightRange: [220, 300] },
        { selector: '.commit-devbox', topRange: [89, 75], leftRange: [50, 50], widthRange: [50, 80], heightRange: [50, 80] },
   
    ];

    const minViewWidth = 1023;
    const maxViewWidth = 1921;
    const vw = document.documentElement.clientWidth;

    buttonConfigs.forEach(config => {
        const button = document.querySelector(config.selector);

        // Calculate new top value
        if (config.topRange) {
            let newTop;
            if (vw < minViewWidth) {
                newTop = config.topRange[0];
            } else if (vw > maxViewWidth) {
                newTop = config.topRange[1];
            } else {
                newTop = config.topRange[0] + ((config.topRange[1] - config.topRange[0]) * (vw - minViewWidth) / (maxViewWidth - minViewWidth));
            }
            button.style.top = `${newTop}%`;
        }

        // Calculate new left/right value
        if (config.leftRange) {
            let newLeft;
            if (vw < minViewWidth) {
                newLeft = config.leftRange[0];
            } else if (vw > maxViewWidth) {
                newLeft = config.leftRange[1];
            } else {
                newLeft = config.leftRange[0] + ((config.leftRange[1] - config.leftRange[0]) * (vw - minViewWidth) / (maxViewWidth - minViewWidth));
            }
            button.style.left = `${newLeft}%`;
        } else if (config.left !== undefined) {
            button.style.left = `${config.left}%`;
        }

        // Apply width if needed
        if (config.widthRange) {
            let newWidth;
            if (vw < minViewWidth) {
                newWidth = config.widthRange[0];
            } else if (vw > maxViewWidth) {
                newWidth = config.widthRange[1];
            } else {
                newWidth = config.widthRange[0] + ((config.widthRange[1] - config.widthRange[0]) * (vw - minViewWidth) / (maxViewWidth - minViewWidth));
            }
            button.style.width = `${newWidth}px`;
        } else if (config.width !== undefined) {
            button.style.width = `${config.width}px`;
        }

        // Calculate new height value
        if (config.heightRange) {
            let newHeight;
            if (vw < minViewWidth) {
                newHeight = config.heightRange[0];
            } else if (vw > maxViewWidth) {
                newHeight = config.heightRange[1];
            } else {
                newHeight = config.heightRange[0] + ((config.heightRange[1] - config.heightRange[0]) * (vw - minViewWidth) / (maxViewWidth - minViewWidth));
            }
            button.style.height = `${newHeight}px`;
        } else if (config.height !== undefined) {
            button.style.height = `${config.height}px`;
        }

    });
}

// 初始化时调用一次更新按钮位置
updateButtonPositions();

// 监听窗口大小变化事件，实时更新按钮位置
window.addEventListener('resize', () => {
    // 使用防抖函数避免频繁触发
    if (window.resizeTimer) {
        clearTimeout(window.resizeTimer);
    }
    window.resizeTimer = setTimeout(() => {
        updateButtonPositions();
    }, 100);
});

function switchTab(tabName) {
    if (!tabName) return; // 添加参数检查

    try {
        // 移除所有标签的激活状态
        const tabs = document.querySelectorAll('.stack-tab');
        tabs.forEach(tab => tab.classList.remove('active'));

        // 找到被点击的标签并添加active类f
        const clickedTab = event.target;
        clickedTab.classList.add('active');

        // 隐藏所有内容组
        const stackGroups = document.querySelectorAll('.stack-group');
        stackGroups.forEach(group => group.style.display = 'none');

        // 显示选中的内容组
        const selectedGroup = document.querySelector(`.stack-group[data-stack="${tabName}"]`);
        if (selectedGroup) {
            selectedGroup.style.display = 'grid';
        }
    } catch (error) {
        console.error('切换标签时出错:', error);
    }
}