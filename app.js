const tl = gsap.timeline({ defaults: { ease: 'power1.out'}});

tl.to('.text', {y:"0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-100%", duration: 1.5, delay:0.5});
tl.to('.intro', {y:"-100%", duration: 1}, "=-1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, '=-1');


//breakdown of code
//tl (timeline variable)
//tl.to('attribute', {effect, duration: (time in seconds)}, "=-(delay in seconds)"
//tl.fromto('attribute', {starting effect}, {ending effect, duration: (time in seconds)}, "=-(delay in seconds")

// *delay how faster/slower you want it to move.
// **possible to move attributes together with delay.