const images = [{
  src: 'img/space_camera.png',
  title: 'Space-Camera',
  description: 'Space-Camera is a captivating artwork that immerses viewers in a cosmic ballet of light and darkness. At the heart of the composition is a sleek, futuristic camera, its lens fixed on the enigmatic allure of a massive black hole. Positioned against the backdrop of vibrant hues and swirling nebulae, the camera appears to be on a daring voyage through the depths of space.\n\nSpace-Camera is a testament to the eternal dance between light and darkness in the cosmos. It invites viewers to contemplate the mysteries of the universe and the infinite possibilities that lie beyond the boundaries of human understanding.'
}, {
  src: 'img/explode_camera.png',
  title: 'Explosion Camera',
  description: ''
}, {
  src: 'img/fire_text.png',
  title: 'Pen On Fire',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt velit adipisci reprehenderit! Tenetur, id autem doloremque perspiciatis provident sed eius nisi veniam natus deleniti atque, soluta quisquam exercitationem delectus nam ratione tempore totam! Ea dolorem voluptates dolor et quam laudantium laboriosam perspiciatis dolorum officiis, incidunt, quos iure odio vitae esse sunt quia ratione commodi harum. Incidunt sit qui ipsa? Harum quia ex, commodi exercitationem fugiat nihil, nesciunt, voluptatibus corporis sunt a deleniti sapiente veritatis illo dolorem dignissimos perspiciatis sequi maxime voluptatem eius debitis. Assumenda quisquam esse molestias nisi quo earum nesciunt. Consequatur, dolorem quod. Veniam ex, recusandae numquam veritatis ullam sequi eos illo nesciunt blanditiis iusto non error laudantium laborum quidem dolor? Temporibus tempore, magnam necessitatibus maiores exercitationem molestiae ut veniam quidem illo nihil, reiciendis, cumque hic repellendus facere iste harum. Qui officia eius ea minima suscipit ducimus odit quaerat, similique repellat. Pariatur cum voluptatibus veritatis nulla fugiat, iste excepturi optio dolore quam atque voluptate, vero provident ratione perferendis facere repudiandae molestias consectetur illo delectus sunt, deserunt id? Dolores eligendi illum dolor a suscipit possimus reprehenderit nostrum, in porro aliquam qui sint recusandae repudiandae deserunt repellendus animi veritatis unde corrupti culpa magni eum dignissimos vero! Sequi laudantium fuga earum!'
}, {
  src: 'img/first_zaza.png',
  title: 'Genghis',
  description: '2009'
}, {
  src: 'img/drumms.jpg',
  title: 'Trummor',
  description: '2009'
}];

var i = 0;

const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')

const page_image = document.getElementById('img');
const description = document.getElementById('desc');
const header = document.getElementById('title');


function updateUrl() {
  const newUrl = window.location.pathname + '?i=' + i;
  window.history.pushState({ path: newUrl }, '', newUrl);
}

function prev(){
  if(i <= 0) i = images.length;   
  i--;
  setImg();
  updateUrl(); // Update the URL when image changes
}

function next(){
  if(i >= images.length-1) i = -1;
  i++;
  setImg();
  updateUrl(); // Update the URL when image changes
}

function setImg(){
  const image = images[i];
  // Replace \n characters with <br>
  const formattedDescription = image.description.replace(/\n/g, '<br>');
  description.innerHTML = formattedDescription;  
  header.innerHTML = image.title;
  page_image.src = image.src;
}

button1.addEventListener('click', prev)
button2.addEventListener('click', next)

// Retrieve the value for i from the URL parameter
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramI = urlParams.get('i');
  if (paramI !== null) {
    i = parseInt(paramI);
    setImg();
  }
};