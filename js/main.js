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
    var params={
        from_name:document.getElementById('from_name').value,
        email_id:document.getElementById('email_id').value,
        message:document.getElementById('message').value
    };
    emailjs.send('service_st7yhno','template_ijotbwe',params).then(res => {
        sendbtn.innerHTML="Send"
        msg.innerHTML="Hey buddy❤️ i have received your message lemme contact you soon bye👋"
        setTimeout(function () {
            msg.innerHTML = ""
        }, 4000)
    });
}

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
