document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        { id: "html", level: "90%" },
        { id: "css", level: "80%" },
        { id: "javascript", level: "70%" },
    ];

    skills.forEach(skill => {
        const skillBar = document.getElementById(skill.id);
        skillBar.style.width = skill.level;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        { id: "html", level: "90%" },
        { id: "css", level: "80%" },
        { id: "javascript", level: "70%" },
    ];

    skills.forEach(skill => {
        const skillBar = document.getElementById(skill.id);
        skillBar.style.width = skill.level;
    });

    // Trigger slide-down effect for education entries
    const educationEntries = document.querySelectorAll('.education-entry');
    educationEntries.forEach((entry, index) => {
        setTimeout(() => {
            entry.classList.add('show');
        }, index * 300); // Stagger the appearance of entries
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        { id: "html", level: "90%" },
        { id: "css", level: "80%" },
        { id: "javascript", level: "70%" },
    ];

    skills.forEach(skill => {
        const skillBar = document.getElementById(skill.id);
        skillBar.style.width = skill.level;
    });

    // Trigger slide-down effect for education entries
    const educationEntries = document.querySelectorAll('.education-entry');
    educationEntries.forEach((entry, index) => {
        setTimeout(() => {
            entry.classList.add('show');
        }, index * 300); // Stagger the appearance of entries
    });

    // Trigger slide-down effect for working experience entries
    const experienceEntries = document.querySelectorAll('.experience-entry');
    experienceEntries.forEach((entry, index) => {
        setTimeout(() => {
            entry.classList.add('show');
        }, index * 300); // Stagger the appearance of entries
    });
});

