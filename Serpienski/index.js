const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let atoms = []
let triangle = []

//utils 

function getRandomPoint(max) {
    return Math.floor(Math.random() * max);
}
//classes declaration
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Atom {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 1;
        //this.speedX = Math.random() * 4 - 2;
        //this.speedY = Math.random() * 4 - 2;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'white'
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }
}
/* canvas.addEventListener('mousemove', (e) => {
    for (let i = 0; i < 20; i++) {
        atoms.push(new Atom(e.x, e.y))
    }

}); */


// DESSINER 3 POINTS

//définition du triangle
let a = new Point(window.innerWidth / 2, 20);
let b = new Point(50, window.innerHeight - 20)
let c = new Point(window.innerWidth - 20, window.innerHeight - 20)
triangle.push(a, b, c);
triangle.forEach(point => {
    atoms.push(new Atom(point.x, point.y))
})
atoms.forEach(atom => {
    atom.draw()

})
//ajout de poouints

function drawRest(firstPoint) {
    for (let i = 0; i < 1000000; i++) {
        //select random point of tirangle 
        //let currentPoint = firstPoint
        let currentTrianglePoint = triangle[getRandomPoint(3)]
        //get point at mid distance of triangle point and current point
        let newPoint = new Point((currentTrianglePoint.x + firstPoint.x) / 2, (currentTrianglePoint.y + firstPoint.y) / 2)
        let atom = new Atom(newPoint.x, newPoint.y)
        firstPoint = newPoint;
        atom.draw()

    }



}
serpienski = () => {
    //draw a point 
    let firstPoint = new Point(a.x, b.x)
    let atom1 = new Atom(firstPoint.x, firstPoint.y)
    atom1.draw()
    drawRest(firstPoint)
}
serpienski()

//dessin du triangle
/* ctx.beginPath()
ctx.moveTo(triangle[0].x, triangle[0].y)
ctx.lineTo(triangle[1].x, triangle[1].y)
ctx.lineTo(triangle[2].x, triangle[2].y)
ctx.fill() */

//atom 


/* 



const animate = () => {
    atoms.forEach((atom, index) => {
        ctx.fillStyle = 'white';
        atom.draw();
        atom.update();
        if (atom.radius < 0.3) {
            atoms.splice(index, 1);
        }
    })
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.restore()
    requestAnimationFrame(animate)
}
animate()
class Atom {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 6 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.updateSpeed()

    }
    updateSpeed() {
        this.radius -= 0.1
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }
}
const generateAtoms = () => {

    atoms.push(new Atom(Math.random() * canvas.width, Math.random() * canvas.height))
    requestAnimationFrame(generateAtoms)

}
generateAtoms() */