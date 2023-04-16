function addingEventListener() {
const input = document.getElementById('button');

function clickAlert() {
  alert('I was clickled! The horror!!');
}

input.addEventListener('click', clickAlert);
}
