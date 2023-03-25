const content = document.getElementById('content');

const speedEl = document.getElementById('speed');

const text = 'I am a computer engineering student and front-end developer';

let idx = 1;

let speed = 300 / speedEl.value;

const writeText = () => {

  content.innerText = text.slice(0 ,idx);

  idx++;

  if(idx > text.length){

    idx = 1;
  }

  setTimeout(writeText, speed);
}

writeText();

speedEl.addEventListener('input', (e) => {

  speed = 300 / e.target.value;
})































// const content = document.getElementById('content')
// const speedEl = document.getElementById('speed')
// const text = 'I am a computer engineering student and front-end developer'

// // idx ekranda kac adet gözüktüğünü görürüz

// let idx = 1
// let speed = 300 / speedEl.value

// // sayıUret fonksiyonu cağırmazsak yazı gelmez görünmesi icin yazmamız lazım

// writeText()

// function writeText() {
//   content.innerText = text.slice(0, idx)
//   idx++

//   if (idx > text.length) {
//     idx = 1
//   }

//   setTimeout(writeText, speed)
// }

// speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value))