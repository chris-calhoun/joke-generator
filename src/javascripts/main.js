import '../styles/main.scss';

const init = () => {
  $('#app').append('<div id="joke-card"></div>');
  $('#joke-card').append(`<div class="card">
  <div class="card-header">
    Jokes
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button type="button" class="btn btn-primary">Get Joke</button>
    <button type="button" class="btn btn-primary">Get Punchline</button>
  </div>
</div>`);
};

init();
