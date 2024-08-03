document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.left-column a');
    const keywordList = document.getElementById('keyword-list');
    const progressBar = document.getElementById('progress-bar');
    const sections = document.querySelectorAll('.middle-column section');

    const keywordData = {
        section1: ['Introduction', 'Basics'],
        section2: ['Analysis', 'Statistics'],
        section3: ['Machine Learning', 'Algorithms']
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            updateContent(sectionId);
            updateKeywords(sectionId);
            updateProgress(sectionId);
        });
    });

    function updateContent(sectionId) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            document.querySelector('.middle-column').scrollTo({
                top: sectionElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    function updateKeywords(sectionId) {
        keywordList.innerHTML = '';
        keywordData[sectionId].forEach(keyword => {
            keywordList.innerHTML += `<li>${keyword}</li>`;
        });
    }

    function updateProgress(sectionId) {
        const totalSections = sections.length;
        const currentSectionIndex = Array.from(sections).findIndex(section => section.id === sectionId) + 1;
        const progressValue = (currentSectionIndex / totalSections) * 100;
        progressBar.value = progressValue;
    }
});
