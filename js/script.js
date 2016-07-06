$(document).ready(function(){
    $('.buttonBookmark').click(function(e) {
    loadTemplate(e);
    });

	$('.closeMe').click(function(e) {
	  e.preventDefault();
	  $('.bookmarklet').remove();
	})

	function createiFrame(e) {
	  e.preventDefault();
	  var element = document.createElement('iframe');
	  element.src = 'http://knightlab.northwestern.edu/projects/'
	  document.body.appendChild(element);
	  closeIframe();
	}

	function loadTemplate(e){
	  e.preventDefault();
	  var element = document.createElement('div');
	  document.body.appendChild(element);
	  var xhr = new XMLHttpRequest();
	  xhr.onload = function() {
	    element.innerHTML = this.response;
	  };
	  xhr.open("GET", '/template.html');
	  xhr.send();
	}

	function closeIframe() {
	  $('.closeMe').on('click', function(e) {
		  e.preventDefault();
		  $('.bookmarklet').remove();
		});
	};
});
