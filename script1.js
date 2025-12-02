function showPage(pageName) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(pageName).classList.add('active');
            window.scrollTo(0, 0);
        }
 
        function toggleDarkMode() {
            const body = document.body;
            const header = document.getElementById('header');
            const toggle = document.getElementById('darkModeToggle');
            
            body.classList.toggle('dark-mode');
            header.classList.toggle('dark-mode');
            toggle.classList.toggle('active');
        }