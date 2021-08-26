var i = 0;
var txt = 'Irshaduddin Chowdhury.'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.getElementById('about').onscroll = typeWriter()

const section_heads = document.querySelectorAll('.display-4');
const appearOptions = {};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        } else {
            entry.target.classList.add('head_appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
},appearOptions);

section_heads.forEach(section_head => {
    appearOnScroll.observe(section_head);
})

const left_sections = document.querySelectorAll('.left_div');
const leftOptions = {};
const leftOnScroll = new IntersectionObserver(function(members, leftOnScroll){
    members.forEach(member => {
        if(!member.isIntersecting){
            return
        } else {
            member.target.classList.add('left_sliders');
            leftOnScroll.unobserve(member.target);
        }
    })
},leftOptions);

left_sections.forEach(left_section => {
    appearOnScroll.observe(left_section);

})