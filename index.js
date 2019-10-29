'use strict';
function getDogImg(inputValue) {
  fetch(`https://dog.ceo/api/breed/${inputValue}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson, inputValue))
    .catch(error => alert('something went wrong, try again later'));
}

function displayResults(responseJson, inputValue) {
  console.log(responseJson.message);
  if (responseJson.message === 'Breed not found (master breed does not exist)') {
    $('.resultMessage').html('<h3>Breed not found, try a different breed</h3>');        
  } else {
    $('.resultsImg').html(`<img src="${responseJson.message}" class='resultImg'>`);
    $('.resultsImg').removeClass('hidden');
  }
}

function watchForm() {
  $('form').on('submit', function() {
    event.preventDefault();
    let inputValue = $('#breedInput').val();
    $('.result').empty();
    getDogImg(inputValue);
  });
}

$(function() {
  console.log('App loaded. Waiting for input');
  watchForm();
});