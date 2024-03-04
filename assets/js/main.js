console.log('test');
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

//MILESTONE 1:
//mi vado a mettere in relazione alla row nell'html
let row = document.querySelector('.row')

for (let i = 0; i < team.length; i++) { 
    //ciclo nell array di oggetti
    const worker = team[i];
    //guardo per ogni singolo dipendente quale sia il nome, il ruolo e l'immagine associata
    console.log(worker.name,worker.role,worker.image);
    
    //MILESTONE 2:
    //creo markup da inserire dentro l'html
    
    let markupHtml = 
    `<div class="col-4">
        <div class="card text-center pb-2">
            <img src="./assets/img/${worker.image}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${worker.name}</h5>
                <p class="card-text" >${worker.role}</p>
            </div>
        </div>
    </div>`
    row.insertAdjacentHTML("beforeend",markupHtml);

}