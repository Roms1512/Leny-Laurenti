const categorie = document.querySelectorAll('div.categorie');
console.log(categorie);

categorie.forEach(bloc => {
  bloc.addEventListener('click', (e)=> {
    
    e.target.classList.add('active');
    for(let i = 0; i < categorie.length; i++){
      if(categorie[i] !== e.target ) {
        categorie[i].classList.remove('active');
      }
      console.log(e.target);
    }
  })
})