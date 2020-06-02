/**
 * Fill the markdown-content div with markdown content
 * 
 * @param {string} url
 */
function fillContentUsingMarkdown(url) {
    fetch(url)
        .then(response => response.text())
        .then(content => {
            document.getElementById('markdown-content').innerHTML = marked(content);
        });
}

const navigationLinks = document.getElementsByClassName('content-link');

for (let linkElement of navigationLinks) {
    linkElement.addEventListener('click', function (event) {
        event.preventDefault();
        fillContentUsingMarkdown(linkElement.href);
    })
}

fillContentUsingMarkdown(navigationLinks[0].href);