document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidebar a');
    const contentDiv = document.getElementById('content');
    const detailsDiv = document.getElementById('details-content');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Load note content
            if (link.getAttribute('href').startsWith('#note')) {
                fetch('notes/' + link.getAttribute('href').substring(1) + '.html')
                    .then(response => response.text())
                    .then(data => {
                        contentDiv.innerHTML = data;
                        // Optionally load detailed content here
                        detailsDiv.innerHTML = "<p>Detailed content for " + link.textContent + "</p>";
                    })
                    .catch(error => console.error('Error loading content:', error));
            }
        });
    });
});

