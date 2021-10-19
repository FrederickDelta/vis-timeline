const urlParams = new URLSearchParams(window.location.search);
let endpoint = urlParams.get('tl');

window.history.replaceState({}, document.title, "timeline.html");

const options = {
  start_at_slide: 0, 
  // initial_zoom: 4,
  hash_bookmark: false
};

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    // Change the base url to the same as json file
    currentUrl = window.location.href;
    let urlStart = currentUrl.slice(0, currentUrl.lastIndexOf("/")+1);
    let urlEnd = endpoint.slice(0, endpoint.lastIndexOf("/")+1);
    document.head.innerHTML = document.head.innerHTML + `<base href="${urlStart}${urlEnd}" />`;

    window.timeline = new TL.Timeline('timeline-embed', data, options);
  });

  