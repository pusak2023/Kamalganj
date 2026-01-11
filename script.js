<script>
    const dropBtn = document.querySelector('.dropbtn');
    const dropdown = document.querySelector('.dropdown');

    // Toggle dropdown on click
    dropBtn.addEventListener('click', () => {
        dropdown.classList.toggle('show');
        const expanded = dropBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
        dropBtn.setAttribute('aria-expanded', expanded);
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
            dropBtn.setAttribute('aria-expanded','false');
        }
    });
</script>
