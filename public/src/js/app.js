var defferedPrompt;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function() {
    console.log('Service worker registered!');
  });
}
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallpromt fired');
  event.preventDefault();
  defferedPrompt = false;
  return false;
});

// var promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     //resolve('This is exectued inside settimeout');
//     reject({ code: 300, message: 'Wrong parameter' });
//     //console.log('This is exectued inside settimeout');
//   }, 3000);
// });
fetch('https://httpbin.org/ip')
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));

fetch('https://httpbin.org/post', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  mode: 'cors',
  body: JSON.stringify({ message: 'Does this work' })
})
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));

// promise
//   .then(function(text) {
//     console.log(text);
//   })
//   .then(function() {
//     console.log('This is exectued after settimeout');
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://httpbin.org/ip');
xhr.onload = function() {
  console.log('HXR', xhr.response);
};
xhr.onerror = function() {
  console.log('error');
};
xhr.send();
