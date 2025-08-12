document.addEventListener('DOMContentLoaded', function() {
    const scrollingBackground = document.getElementById('scrolling-background');
    const numRows = 5;
    const duplications = 20;
    const speed = 40;
    
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('div');
        row.className = 'scrolling-row';
        
        const content = document.createElement('div');
        content.className = 'scrolling-content';
        
        for (let j = 0; j < duplications; j++) {
            const textSpan = document.createElement('span');
            textSpan.textContent = 'RELAY';
            content.appendChild(textSpan);
        }
        
        content.style.animationDuration = `${speed}s`;
        row.appendChild(content);
        scrollingBackground.appendChild(row);
    }
});