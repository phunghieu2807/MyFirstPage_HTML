/**
 * ApexCraft - Wireframe Web & Mobile Layout Script
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mainHeader = document.getElementById('main-header');
    const backToTopBtn = document.getElementById('back-to-top');

    // --- 1. Mobile Drawer Menu Toggle ---
    function openDrawer() {
        mobileDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        mobileDrawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openDrawer);
    }

    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener('click', closeDrawer);
    }

    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', closeDrawer);
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });


    // --- 2. Header Scroll Effect ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });


    // --- 3. Portfolio Category Filtering ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });


    // --- 4. Search Bar Alert & Keyboard Support ---
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    function performSearch() {
        const query = searchInput ? searchInput.value.trim() : '';
        if (query) {
            alert(`Đang tìm kiếm với từ khóa: "${query}"`);
        }
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    console.log("Layout_GiaoDien script loaded successfully!");
});
