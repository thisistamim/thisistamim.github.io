// stop pinch-to-zoom //


var viewportMetaTag = document.querySelector('meta[name="viewport"]');
var newViewportMetaTag = document.createElement('meta');

newViewportMetaTag.name = 'viewport';
newViewportMetaTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

if (viewportMetaTag) {
    viewportMetaTag.parentNode.replaceChild(newViewportMetaTag, viewportMetaTag);
}
else {
    document.head.appendChild(newViewportMetaTag);
}


// created DOMContent //

document.addEventListener('DOMContentLoaded', function () {
    try {

        const starsDiv = document.createElement('div');
        starsDiv.className = 'stars';
        starsDiv.setAttribute('aria-hidden', 'true');

        const stars2Div = document.createElement('div');
        stars2Div.className = 'stars2';
        stars2Div.setAttribute('aria-hidden', 'true');

        const stars3Div = document.createElement('div');
        stars3Div.className = 'stars3';
        stars3Div.setAttribute('aria-hidden', 'true');


        const greetingCardDiv = document.createElement('div');
        greetingCardDiv.className = 'greetingCard';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'img';

        const h2Element = document.createElement('h2');
        h2Element.textContent = 'Tamim Ahmmad';

        const pElement = document.createElement('p');
        pElement.innerHTML = "<hr style='width: 56%; margin: auto;'><br><br>Industrial Digital Transformation Specialist<br><br>Passionate about IIoT, Smart Manufacturing & Cybersecurity<br><br>";

        const buttonElement = document.createElement('button');
        buttonElement.className = 'waves-effect';


        for (let i = 0; i < 4; i++) {
            const spanElement = document.createElement('span');
            buttonElement.appendChild(spanElement);
        }


        const buttonText = document.createTextNode("Let's Collaborate");
        buttonElement.appendChild(buttonText);


        buttonElement.addEventListener("click", function () {
            window.location.assign("https://www.linkedin.com/messaging/compose/?recipient=tamim-ahmmad");
        });


        greetingCardDiv.appendChild(imgDiv);
        greetingCardDiv.appendChild(h2Element);
        greetingCardDiv.appendChild(pElement);
        greetingCardDiv.appendChild(buttonElement);


        document.body.appendChild(starsDiv);
        document.body.appendChild(stars2Div);
        document.body.appendChild(stars3Div);
        document.body.appendChild(greetingCardDiv);


        if (!(document.body.contains(starsDiv) && document.body.contains(greetingCardDiv))) {
            throw new Error('Failed to append elements to the document.');
        }
    } catch (error) {
        console.error(error);
    }
});


// I <3 cursor //

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

let mouseMoved = false;

const pointer = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
}
const params = {
    pointsNumber: 15,
    widthFactor: .3,
    mouseThreshold: .6,
    spring: .4,
    friction: .5
};

const trail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
    trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
    }
}

window.addEventListener("click", e => {
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", e => {
    mouseMoved = true;
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", e => {
    mouseMoved = true;
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}

setupCanvas();
update(0);
window.addEventListener("resize", setupCanvas);


function update(t) {
    if (!mouseMoved) {
        pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
        pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? .4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
    });

    ctx.strokeStyle = "#fff";
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);

    for (let i = 1; i < trail.length - 1; i++) {
        const xc = .5 * (trail[i].x + trail[i + 1].x);
        const yc = .5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
    }
    ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
    ctx.stroke();

    window.requestAnimationFrame(update);
}

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


// Disable Console //

(function blockConsoleUse() {
    console.log = function () {
        //alert("Hi, welcome to my world!");
    };
    console.warn = console.log;
    console.error = console.log;
    console.info = console.log;
    console.debug = console.log;

    let devtoolsOpened = false;
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            devtoolsOpened = true;
            throw new Error("Console is not allowed!");
        }
    });

    setInterval(function () {
        devtoolsOpened = false;
        console.log(element);
        if (devtoolsOpened) {
            console.clear();
            //alert("good day!");
        }
    }, 1000);
})();

// Happy coding :D
