const urlParams = new URLSearchParams(window.location.search);
window.history.replaceState({}, document.title, "timeline.html");

const currentUrl = window.location.href;
const urlStart = currentUrl.slice(0, currentUrl.lastIndexOf("/")+1);

const linkIndex = document.getElementById("link-index");
linkIndex.href = `${urlStart}index.html`

const endpoint = urlParams.get('tl');
const urlEnd = endpoint ? endpoint.slice(0, endpoint.lastIndexOf("/")+1): "";

const options = {
  start_at_slide: 0, 
  // initial_zoom: 4,
  hash_bookmark: false
};

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    // Change the base url to the same as json file
    document.head.innerHTML = document.head.innerHTML + `<base href="${urlStart}${urlEnd}" />`;

    window.timeline = new TL.Timeline('timeline-embed', data, options);
  })
  .catch((error) => {
    console.error('Error123:', error);
  });