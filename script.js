
const piggy = document.getElementById('flyingPig');
let links = document.getElementById('links-2');
let paragraph3 = document.getElementById('paragraph-3');
let paragraph1 = document.getElementById('paragraph-1');
let paragraph2 = document.getElementById('paragraph-2');



const mediaQuery = window.matchMedia('(min-width: 450px)');

// about page
piggy.addEventListener('mouseover', function() {
  if (mediaQuery.matches){
  links.style.display = 'block';
   paragraph3.style.display = 'none';
  } else {
  links.style.display = 'block';
   paragraph1.style.display = 'none';
   paragraph2.style.display = 'none';
   paragraph3.style.display = 'none';
  }
});

piggy.addEventListener('mouseout', function() {
  if (mediaQuery.matches) {
    timeoutId = setTimeout(function() {
      links.style.display = 'none';
      paragraph3.style.display = 'block';
    }, 2500);
  } else {
    timeoutId = setTimeout(function() {
      links.style.display = 'none';
      paragraph1.style.display = 'block';
      paragraph2.style.display = 'block';
      paragraph3.style.display = 'block';
    }, 2500);
  }
});


//projects page
let projects = document.getElementById('projects');
let projects2 = document.getElementById('projects-2');

piggy.addEventListener('mouseover', function() {
    projects.style.display = 'none';
    projects2.style.display = 'none';
})

piggy.addEventListener('mouseout', function() {
    timeoutId = setTimeout(function() {
        projects.style.display = 'block';
        projects2.style.display = 'block';
      }, 2500);
    });

//contact section
let contactSections = document.getElementsByClassName('contactSection');

piggy.addEventListener('mouseover', () => {
  for (let i = 0; i < contactSections.length; i++) {
    contactSections[i].style.display = 'none';
  }
});

piggy.addEventListener('mouseout', function() {
  timeoutId = setTimeout(function() {
    for (let i = 0; i < contactSections.length; i++) {
      contactSections[i].style.display = 'block';
    }
  }, 2500);
});




// pig animation

const dancingPig = document.getElementById('flyingPig');

dancingPig.addEventListener('mouseout', function() {
  dancingPig.style.animationPlayState = 'paused';
});

dancingPig.addEventListener('mouseover', function() {
  dancingPig.style.animationPlayState = 'running';
});

