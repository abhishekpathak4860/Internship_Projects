const function_line = document.querySelector('.function_line');
const head = document.querySelector('.head');

const activenav = () => {
    head.classList.toggle('active');
}


function_line.addEventListener("click", () => {
    activenav();
})


// handling skills section

const skill_1_buttons = document.querySelector('.skill_1_buttons');
const skill_2_buttons = document.querySelector('.skill_2_buttons');
const skill_3_buttons = document.querySelector('.skill_3_buttons');

const skills_section = document.querySelector('.skills_section');



const active_skill_1 = () => {
    skills_section.classList.toggle('active_skill_1');
    skills_section.classList.remove('active_skill_2');
    skills_section.classList.remove('active_skill_3')

}

const active_skill_2 = () => {
    skills_section.classList.toggle('active_skill_2');
    skills_section.classList.remove('active_skill_1');
    skills_section.classList.remove('active_skill_3');

}

const active_skill_3 = () => {
    skills_section.classList.toggle('active_skill_3');
    skills_section.classList.remove('active_skill_1');
    skills_section.classList.remove('active_skill_2');

}

skill_1_buttons.addEventListener("click", () => {
    active_skill_1()
})
skill_2_buttons.addEventListener("click", () => {
    active_skill_2()
})
skill_3_buttons.addEventListener("click", () => {
    active_skill_3()
})

// handling qualification section

const education = document.querySelector('.educationbtn');
const experience = document.querySelector('.experiencebtn');
const box1 = document.querySelector('.box1');


const active_education = () => {
    box1.classList.add('activeeducation');
    box1.classList.remove('activeexperience');
    education.style.color = 'rgba(28, 116, 179, 0.808)';
    experience.style.color = 'grey';
}

const active_experience = () => {
    box1.classList.add('activeexperience');
    box1.classList.remove('activeeducation');
    experience.style.color = 'rgba(28, 116, 179, 0.808)';
    education.style.color = 'grey';
}

education.addEventListener("click", () => {
    active_education();
})
experience.addEventListener("click", () => {
    active_experience();
})

/* handling form*/
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.querySelector('input[name="name"]').value;
    var phone = document.querySelector('input[name="Phone"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    if (!name || !phone || !email || !message) {
        alert('Please enter details');
        event.preventDefault(); 
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // 
    }
});

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// handling body color 

const sunIcon = document.getElementById('sun');
const moonIcon = document.getElementById('moon');
const buttons=document.querySelector('.buttons');

moonIcon.addEventListener('click', function() {
    document.body.style.backgroundColor = 'darkslategrey';
    moonIcon.style.display = 'none';
     sunIcon.style.display = 'block';
     sunIcon.style.color='white'
    buttons.classList.add('active1')
     buttons.classList.remove('active2')
});

 sunIcon.addEventListener('click', function() {
     document.body.style.backgroundColor = 'white';
    sunIcon.style.display = 'none';
     moonIcon.style.display = 'block';
    buttons.classList.add('active2')
    buttons.classList.remove('active1')
 });