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
    }, 2345);
    // title element updated
    var titleElement = document.querySelector('title');
    titleElement.textContent = 'Tamim Ahmad - Portfolio';
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

// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function () {
    // Set X-Content-Type-Options header
    document.defaultView.addEventListener("load", function () {
        document.defaultView.addEventListener("load", function () {
            document.defaultView.addEventListener("load", function () {
                // Set Content-Security-Policy header
                var meta = document.createElement('meta');
                meta.httpEquiv = "Content-Security-Policy";
                meta.content = "frame-ancestors 'none'";
                document.head.appendChild(meta);

                // Set Referrer-Policy header
                meta = document.createElement('meta');
                meta.name = "referrer";
                meta.content = "same-origin";
                document.head.appendChild(meta);
            });
            // Set X-XSS-Protection header
            document.defaultView.document.execCommand("Stop", false);
        });
        // Set X-Frame-Options header
        document.defaultView.document.execCommand("Stop", false);
    });
    document.defaultView.document.execCommand("Stop", false);
});
