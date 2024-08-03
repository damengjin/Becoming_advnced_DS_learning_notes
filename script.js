document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.left-column a');
    const keywords = document.getElementById('keywords');
    
    // Example keywords
    const keywordData = {
        chapter1: ['Introduction', 'Overview'],
        chapter2: ['Analysis', 'Statistics'],
        chapter3: ['Machine Learning', 'Algorithms']
    };

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const chapterId = link.getAttribute('href').substring(1);
            updateKeywords(chapterId);
        });
    });

    function updateKeywords(chapterId) {
        keywords.innerHTML = '<h2>Keywords:</h2><ul>';
        keywordData[chapterId].forEach(keyword => {
            keywords.innerHTML += `<li>${keyword}</li>`;
        });
        keywords.innerHTML += '</ul>';
    }
});



