// var open = document.getElementById('menuBtn');
// var close = document.getElementById('closeBtn');

// open.onclick = function () {
//     document.getElementById('head-nav').style.display = 'block';
// };


document.onclick = function (e) {
    if(e.target.getAttribute('id') === 'menuBtn')  {
      document.getElementById('head-nav').style.display = 'block';
      document.body.style.overflow = 'hidden'
  } else if(e.target.getAttribute('id') === 'closeBtn'){
        document.getElementById('head-nav').style.display = 'none';
        document.body.style.overflow = 'scroll'

    }
};