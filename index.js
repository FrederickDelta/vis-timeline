const loader = 'timeline.html'

function openLink(e) {
  e.preventDefault();
  tl = e.target.getAttribute('data-tl');
  window.location.href = `${loader}?tl=${tl}`;
}

const links = Array.from(document.querySelectorAll('a'));
links.forEach(link => link.addEventListener('click', openLink));