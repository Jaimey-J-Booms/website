document.addEventListener('DOMContentLoaded',()=>{
  console.log('Static site loaded.');
  const hero = document.querySelector('#hero h2');
  if(hero) hero.addEventListener('click',()=>alert('You clicked the hero title!'));
});