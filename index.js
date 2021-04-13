// Write your code here!
const body = document.getElementById('main');
body.remove();

const newHeader = document.createElement('h1')
document.body.appendChild(newHeader);

newHeader.id = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion"

const h1 = document.createElement('victory')
h1.innerHTML = "victory"

newHeader.appendChild(h1);
