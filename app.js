const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

console.log(open);
console.log(modal);

open.addEventListener('click', () => {
  modal.style.display = 'block';
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
