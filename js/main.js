
const sendbtn = document.getElementById('send');
const msg = document.getElementById('notify');
const contact = document.getElementById('form');

contact.addEventListener('submit',function(e){
    e.preventDefault();
    sendEmail();
    contact.reset();
})
function sendEmail() {
    sendbtn.innerHTML="Sending..."
    Email.send({
        SecureToken: "a392d1c2-1a05-420a-9599-ab84d92a9b08",//must be your smtpjs token
        To: 'sharathmurugan28@gmail.com',
        From: document.getElementById('email_id').value,
        Subject: "Contact Form Enquiry",
        Body: "Hello Sharath, you got an email from " + document.getElementById('from_name').value
            + "<br> their Email ID is " + document.getElementById('email_id').value
            + "<br> regarding - " + document.getElementById('message').value
    }).then(res => {
        sendbtn.innerHTML="Send"
        msg.innerHTML="Hey buddy❤️ i have received your message lemme contact you soon bye👋"
        setTimeout(function () {
            msg.innerHTML = ""
        }, 4000)
    });
}

const filterBtn = document.querySelectorAll('.filter-btn');
filterBtn.forEach(btn => btn.addEventListener('click', function () {
    filterBtn.forEach(button => button.classList.remove('active'));
    btn.classList.add('active');
    const filterValue = btn.dataset.filter;
    $('.grid').isotope({ filter: filterValue });
}));

const navul = document.getElementById('navbar-links');
const navli = navul.querySelectorAll('li');

navli.forEach(links => {
    links.addEventListener('click', function () {
        navul.querySelector('.active').classList.remove('active');
        links.classList.add('active');
    });
});

const wrapper = document.getElementById('wrapper')
const menuicon = document.getElementById('menu-icon')

menuicon.addEventListener('click', () => {
    navul.classList.toggle('active');
    menuicon.classList.toggle('active');
    wrapper.classList.toggle('active');
});
