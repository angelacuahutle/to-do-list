import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

const button = document.querySelector('button');
const listArr = [{
  index: 0,
  duties: 'Finish repo',
  completed: false,
},
{
  index: 1,
  duties: 'Study session',
  completed: false,
},
{
  index: 2,
  duties: 'Meet partner',
  completed: true,
},
];

function displaylistArr() {
  listArr.forEach((itemElement) => {
    const li = document.createElement('li');
    li.innerHTML = `<div class="flex">
<div><input type="checkbox"><span class="margin-left">${itemElement.duties}</span></div><span class="material-icons">more_vert
</span>
</div>
<hr>`;
    button.parentElement.insertBefore(li, button);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  displaylistArr();
});
