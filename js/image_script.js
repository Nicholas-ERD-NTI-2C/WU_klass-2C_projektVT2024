const images = [{
  src: 'img/space_camera.jpg',
  title: 'Space-Camera',
  description: 'Space-Camera is a captivating artwork that immerses viewers in a cosmic ballet of light and darkness. At the heart of the composition is a sleek, futuristic camera, its lens fixed on the enigmatic allure of a massive black hole. Positioned against the backdrop of vibrant hues and swirling nebulae, the camera appears to be on a daring voyage through the depths of space.\n\nSpace-Camera is a testament to the eternal dance between light and darkness in the cosmos. It invites viewers to contemplate the mysteries of the universe and the infinite possibilities that lie beyond the boundaries of human understanding.'
}, {
  src: 'img/explode_camera.jpg',
  title: 'Explosion Camera',
  description: 'is provident sed eius nisi veniam natus deleniti atque, soluta quisquam exercitationem delectus nam ratione tempore totam! Ea dolorem voluptates dolor et quam lauda amet consectetur adipisicing elit. Debitis nesciunt velit adipisci reprehenderit! Tenetur, id autem doloremque perspiciatis provident sed eius nisi veniam natus deleniti atque, soluta quisquam exercitationem delectus nam ratione tempore totam! Ea dolorem voluptates dolor et quam laudantium laboriosam perspiciatis dolorum officiis, incidunt, quos iure odio vitae esse sunt quia ratione commodi harum. Incidunt sit qui ipsa? Harum quia ex, commodi exercitationem fnesciunt, voluptatibus corporis sunt a deleniti sapiente veritatis illo d'
}, {
  src: 'img/fire_text.jpg',
  title: 'Pen On Fire',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt velit adipisci reprehenderit! Tenetur, id autem doloremque perspiciatis provident sed eius nisi veniam natus deleniti atque, soluta quisquam exercitationem delectus nam ratione tempore totam! Ea dolorem voluptates dolor et quam laudantium laboriosam perspiciatis dolorum officiis, incidunt, quos iure odio vitae esse sunt quia ratione commodi harum. Incidunt sit qui ipsa? Harum quia ex, commodi exercitationem fugiat nihil, nesciunt, voluptatibus corporis sunt a deleniti sapiente veritatis illo dolorem dignissimos perspiciatis sequi maxime voluptatem eius debitis. Assumenda quisquam esse molestias nisi quo earum nesciunt. Consequatur, dolorem quod.'
}, {
  src: 'img/first_zaza.jpg',
  title: 'Genghis',
  description: 'is provident sed eius nisi veniam natus deleniti atque, soluta quisquam exercitationem delectus nam ratione tempore totam! Ea dolorem voluptates dolor et quam laudantium laboriosam perspiciatis dolorum officiis, incidunt, quos iure odio vitae esse sunt quia ratione commodi harum. Incidunt sit qui ipsa? Harum quia ex, commodi exercitationem fugiat nihil, nesciunt, voluptatibus corporis sunt a deleniti sapiente veritatis illo d'
}, {
  src: 'img/drumms.jpg',
  title: 'Trummor',
  description: 'TRUMMOR'
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