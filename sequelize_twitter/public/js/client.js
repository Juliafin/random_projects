console.log('hello');

function postTweet (tweet, author) {
  const options = {
    method: 'POST',
    url: '/tweets',
    data: {tweet, author}
  };

  return $.ajax(options)
    .then((response) => {
      console.log('response from post', response);
    })
    .catch((error) => {console.log(error);})

}


function tweetListener() {
  $('body').on('click', '#submittweet', (event) => {
    event.preventDefault();
    console.log('The button has been clicked');

    var tweet = $('#tweetInput').val();
    var author = $('#authorInput').val();
    console.log(tweet, author);

    postTweet(tweet, author);

  })
}


function navBarListener() {

$('nav.navbar li').click((event) => {
  console.log('hello');

  if ($(this).find('li').text() === 'Home' ) {
    $('body').find('#tweetForm').remove();
    renderForm();
  }
})

}

function renderForm() {

  var form = `<form id="tweetForm">
  <label for="tweetInput">Input your Tweet</label>
  <input type="text" id="tweetInput">

  <label for="authorInput">Author Name</label>
  <input type="text" id="authorInput">

  <button id="submittweet" type="button">Send Tweet</button>
</form>`

$('body').append(form);


}


tweetListener();
navBarListener();