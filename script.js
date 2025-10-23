// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// simple contact form demo handler
function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const mail = form.email.value.trim();
  const msg = form.message.value.trim();
  if(!name || !mail || !msg){
    alert('Please fill all fields.');
    return;
  }
  // demo behaviour
  alert('Thanks, ' + name + '! This is a demo form.\nTo make it live, connect to an email backend or Formspree/Netlify Forms.');
  form.reset();
}

// small fade-in on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.12});

document.querySelectorAll('.section, .project-card, .card, .about-left, .photo-wrap').forEach(el=>{
  el.classList.add('pre-reveal');
  observer.observe(el);
});
