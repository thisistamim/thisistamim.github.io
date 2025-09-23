var viewportMetaTag = document.querySelector('meta[name="viewport"]');
var newViewportMetaTag = document.createElement('meta');
var styleElement = document.createElement('style');

// meta
newViewportMetaTag.name = 'viewport';
newViewportMetaTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

if (viewportMetaTag) {
    viewportMetaTag.parentNode.replaceChild(newViewportMetaTag, viewportMetaTag);
}
else {
    document.head.appendChild(newViewportMetaTag);
}

// loader
document.querySelector(".LinkedInLoader").style.display = 'block';
window.onload = function () {
    setTimeout(() => {
        document.querySelector(".LinkedInLoader").remove();
        // title element updated
        var titleElement = document.querySelector('title');
        titleElement.textContent = 'Tamim Ahmmad: My Portfolio';
    }, 3456);
};

// profile
styleElement.innerHTML = `
    .linkedinCard {
        display: block;
        animation: fullyloaded 2.345s linear both;
    }

    @keyframes fullyloaded {

        0%,
        99% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;

document.head.appendChild(styleElement);
