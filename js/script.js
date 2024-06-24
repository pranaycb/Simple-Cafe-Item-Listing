/**
 * Dynamically Show Hide Tabs
 * @author Pranay Chakraborty
 * @link https://github.com/pranaycb
 */
document.addEventListener('DOMContentLoaded', function () {
    function initPage() {
        let pageId = location.hash;

        if (pageId) {
            highlightMenu(document.querySelector(`.page-link[href^="${pageId}"]`));
            showPage(document.querySelector(pageId));
        } else {
            pageId = document.querySelector('.page-link.active').getAttribute('href');
            showPage(document.querySelector(pageId));
        }
    }

    function highlightMenu(menuItem) {
        document.querySelectorAll('.page-link').forEach(link => link.classList.remove('active'));
        menuItem.classList.add('active');
    }

    function showPage(page) {
        document.querySelectorAll('.page-content').forEach(content => content.style.display = 'none');
        page.style.display = 'block';
    }

    initPage();

    document.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', function (event) {
            if (window.innerWidth > 991) {
                event.preventDefault();
            }
            highlightMenu(event.currentTarget);

            showPage(document.querySelector(event.currentTarget.getAttribute('href')));
        });
    });
});