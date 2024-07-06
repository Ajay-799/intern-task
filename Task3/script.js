// script.js

// Show course details
const coursesSection = document.getElementById('courses');
const courseDetailsSection = document.getElementById('course-details');
const courseTitle = document.getElementById('course-title');
const courseDescription = document.getElementById('course-description');

coursesSection.addEventListener('click', (e) => {
    if (e.target.classList.contains('enroll')) {
        const courseName = e.target.getAttribute('data-course');
        showCourseDetails(courseName);
    }
});

function showCourseDetails(courseName) {
    coursesSection.classList.add('hide');
    courseDetailsSection.classList.remove('hide');
    courseTitle.innerText = courseName;
    // You can fetch course details dynamically from a server or use predefined data
    switch (courseName) {
        case 'Course 1':
            courseDescription.innerText = "Detailed description of Course 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
            break;
        case 'Course 2':
            courseDescription.innerText = "Detailed description of Course 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            break;
        // Add more cases as needed for additional courses
        default:
            courseDescription.innerText = "Description not available.";
    }
}

// Back to courses button
const backToCoursesButton = document.getElementById('back-to-courses');
backToCoursesButton.addEventListener('click', () => {
    courseDetailsSection.classList.add('hide');
    coursesSection.classList.remove('hide');
});

// Start course button (example)
const startCourseButton = document.getElementById('start-course');
startCourseButton.addEventListener('click', () => {
    alert('Starting course...');
    // Add functionality to navigate to course content page or start interactive elements
});
