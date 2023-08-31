const loadData = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const allData = data.data.tools;
  cardsLoad(allData);
  // console.log(allData);

};

const cardsLoad = (card) =>{
   
  // showAll(true);

  const cardContainer = document.getElementById("cards-container");
  card.forEach((data) => { 
    // console.log(data.id);
   const div = document.createElement("div");
   div.innerHTML = `
       <div class="card card-compact bg-base-100 shadow-xl p-4">
        <img src="${data.image}" alt="img" />
        <div class="card-body">
          <h2 class="card-title">Features</h2>
          <p>1. <span>${data.features[0]}</p>
          <p>2. <span>${data.features[1]}</p>
          <p>3. <span>${data.features[2]}</span></p>
          <hr>
          <div class="flex justify-between">
           <div>
           <h2 class="card-title">${data.name}</h2>
           <p>${data.published_in}</p>
           </div>
          <button onclick= "showModal('${data.id}')" class="btn btn-error rounded-full">-></button>
          </div>
        </div>
       </div>

       `;

  cardContainer.appendChild(div);
  
 });
};

// modal
const showModal = async(id) =>{
    //  console.log(id);
     const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
     const data = await res.json();
     const newData = data.data;
    //  console.log(newData);

     const modalContainer = document.getElementById('my_modal_5');
       
        modalContainer.innerHTML = `
         
          <form method="dialog" class="modal-box">
            <h3 class="font-bold text-lg">${newData?.tool_name}</h3>
            <img src = "${newData?.image_link[0]}" alt =""/>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
              <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </div>
        </form>
             
        `;
    
        const modal = document.getElementById('my_modal_5')
        modal.showModal();

};


loadData();

// show all button 
// const showAll = (isShowAll) =>{
//   const btn = document.getElementById('btn');
//   if(isShowAll){
//        btn.classList.remove('hidden');
//      }else{
//       btn.classList.add('hidden');
//      }
// };