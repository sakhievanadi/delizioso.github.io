document.addEventListener('DOMContentLoaded', () => {

const scrollElement = document.querySelector('.scroll-element');

const handleScroll = () => {

const elementPosition = scrollElement.getBoundingClientRect().top;

const viewportHeight = window.innerHeight;

if (elementPosition < viewportHeight) {

scrollElement.classList.add('visible');

}

};

window.addEventListener('scroll', handleScroll);

handleScroll();

});

function onEntry(entry) { 
    entry.forEach(change => { 
      if (change.isIntersecting) { 
       change.target.classList.add('element-show'); 
       
      } 
    }); 
  } 
      let options = { 
    threshold: [0.5] }; 
  let observer = new IntersectionObserver(onEntry, options); 
  let elements = document.querySelectorAll('.element-animation'); 
   
  for (let elm of elements) { 
    observer.observe(elm); 
  }