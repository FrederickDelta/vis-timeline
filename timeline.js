const urlParams = new URLSearchParams(window.location.search);
let endpoint = urlParams.get('tl');

window.history.replaceState({}, document.title, "timeline.html");

const options = {
  start_at_slide: 0, 
  // initial_zoom: 4,
  hash_bookmark: false
}

fetch(endpoint)
  .then(res => res.json())
  .then(data => window.timeline = new TL.Timeline('timeline-embed', data, options))