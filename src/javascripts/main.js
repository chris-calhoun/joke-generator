import '../styles/main.scss';
import JokeData from './data';

const eventListener = () => {
  $('body').on('click', '#joke-btn', () => {
    $('#joke-line').html('');
    $('#punch-line').html('');
    $('#punch-btn').show();
    JokeData.getJoke().then((response) => {
      if (response.length) {
        $('#joke-line').html(`${response[2]}`);
      }
    });
  });

  $('body').on('click', '#punch-btn', () => {
    JokeData.getJoke().then((response) => {
      if (response.length) {
        $('#punch-line').html(`${response[3]}`);
        $('#punch-btn').hide();
      }
    });
  });
};

const init = () => {
  $('#app').append('<div id="joke-card"></div>');
  $('#joke-card').append(`<div class="card">
  <div class="card-header">
    Jokes
  </div>
  <div class="card-body">
    <h5 class="card-title">Joke Generator</h5>
    <h5 class="card-title">Punchline</h5>
    <button type="button" id="joke-btn" class="btn btn-primary">Get Joke</button>
    <p id="joke-line">Joke</p>
    <button type="button" id="punch-btn" class="btn btn-primary">Get Punchline</button>
    <p id="punch-line">Punchline</p>
  </div>
</div>`);

  eventListener();
};

init();
