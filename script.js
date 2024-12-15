// Scroll to Top Button
const scrollButton = document.querySelector('.scroll-to-top');
window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
