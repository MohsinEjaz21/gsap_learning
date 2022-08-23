// gsap.to("h1", { x: 400, duration: 2 })

// using stagger to run animation one by one
// duration is special property which tells duration of animation
// gsap.to("h1", { x: 400, duration: 2, color: "red", scale: 1.8, stagger: 1 })

// Gsap timeline is container for the multiple tweens (i.e star, circle etc)

// ======== GSAP practice 1============
// behind the scene inline style is updated i.e translate over the time
gsap.to(".fred2", { x: 400, y: 200, scale: 3, duration: 3, rotation: 360 })

// change default duration
gsap.defaults({ duration: 1 })

// For Best Performance animate these
/*
- x and y (TranslateX and TranslateY)
- rotationX and rotationY
- scaleX and scaleY
- skewX and skewY
*/

// Some more numeric values
/*
- width and height
- top and left (for position: absolute ,relative, fixed)
- use camel case for css properties for gsap i.e borderRadius
- color, backgroundColor
- vh, vw and more.
*/

//  Exercise 1

gsap.to(".fred", { x: 700, y: 400, scale: 3, rotation: 360, duration: 3 });
