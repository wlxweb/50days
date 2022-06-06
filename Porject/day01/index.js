const list = document.querySelectorAll('.img-list');
list.forEach(item => {
  item.addEventListener('click', () => {
    removeActive();
    item.classList.add('active');
  });
});

function removeActive() {
  list.forEach(item => {
    item.classList.remove('active');
  });
}
