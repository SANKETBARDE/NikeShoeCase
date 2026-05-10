document.addEventListener('DOMContentLoaded', () => {
    const sideBtn = document.querySelector('.side-nav-btn');
    const panel = document.querySelector('.shoe-panel');
    
    if (sideBtn && panel) {
        sideBtn.addEventListener('click', () => {
            panel.classList.toggle('open');
        });
        
        // Close panel when clicking outside
        document.addEventListener('click', (e) => {
            if (!panel.contains(e.target) && !sideBtn.contains(e.target)) {
                panel.classList.remove('open');
            }
        });
    }
});
