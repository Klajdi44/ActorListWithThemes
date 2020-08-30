//get the main
const main = document.getElementById('main');

//fetch the url (get url then response and give it back as json and then get the data inside of the json.)
const fetchActors = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchActors('https://raw.githubusercontent.com/Klajdi44/actors/master/actors.json').then(dataInside => dataInside.forEach(actor => {
  //get and clone the template
  const clone = document.querySelector('#template').content.cloneNode(true);
  //get the h1 and change the text content of it to be = actor.fullname;
  const actorName = clone.querySelector('.actor-name').textContent = actor.fullname;
  //this is the div that is wrapping everything inisde the template
  const contentdiv = clone.querySelector('.content');
  // create a button element
  const btn = document.createElement('button');
  //add the text read more to it.
  btn.appendChild(document.createTextNode('Read More'));
  // let the class be btn
  btn.classList = 'btn';
  //apend it to the content div
  contentdiv.appendChild(btn);
  //get the modal.
  const modal = document.getElementById('modal');
  //add event listener to the button that will open the modal
  btn.addEventListener('click', openModal);
  // get close button and add event listener
  const closeBtn = document.querySelector('.close-btn').addEventListener('click', closeModal);
  // append everything to the cloned template
  main.appendChild(clone);


  const bodytheme = document.querySelector('.bodyTheme').addEventListener('change', changeBodyColor);
  const body = document.querySelector('#body');

  function changeBodyColor() {
    const selectedTheme = this.value;
    //remove classes from body
    body.classList.remove('pulpfiction');
    body.classList.remove('fightclub');
    body.classList.remove('goodfellas');
    body.classList.remove('inception');
    //if the selected theme is = to one of the values then add a class.
    if (selectedTheme === 'pulpfiction') {
      body.classList.add('pulpfiction');
    } else if (selectedTheme === 'fightclub') {
      body.classList.add('fightclub');
    }
    else if (selectedTheme === 'inception') {
      body.classList.add('inception');
    }
    else if (selectedTheme === 'goodfellas') {
      body.classList.add('goodfellas');
    }
  }

  // get the data inside the modal
  function openModal() {
    //when the read more button is clicked the modal will be displayed as block and not none.
    modal.style.display = 'block';
    //set the actor name 
    const modalActorName = document.querySelector('.modal-actor-name').textContent = actor.fullname;
    // set the movie name
    const modalActorMovie = document.querySelector('.modal-actor-movie').textContent = actor.movie;

    //themes
    const modalContent = document.querySelector("#modal .modal-content");
    //change color automatically when you open the modal
    function autoBackground() {
      //remove classes from modal
      modalContent.classList.remove('pulpfiction');
      modalContent.classList.remove('fightclub');
      modalContent.classList.remove('goodfellas');
      modalContent.classList.remove('inception');
      //if the movie is equal to a value then change background.
      if (modalActorMovie === 'Pulp Fiction') {
        modalContent.classList.add('pulpfiction');
      } else if (modalActorMovie === 'Fight Club') {
        modalContent.classList.add('fightclub');
      }
      else if (modalActorMovie === 'Inception') {
        modalContent.classList.add('inception');
      }
      else if (modalActorMovie === 'Goodfellas') {
        modalContent.classList.add('goodfellas');
      }
    }
    autoBackground();
  }



  //get the contentInsideModal
  const modalContent = document.querySelector("#modal .modal-content");

  // when its clicked close the modal
  function closeModal() {
    modal.style.display = 'none';
  }
  //close modal if user clicks outside.
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

}));


