
async function loadData(){
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await response.json();
    const catagorys = data.data;
    displaycatagory(catagorys);
   
}


const displaycatagory = element_catagorys =>{

    const buttonSectionContainer = document.getElementById('button_section_container');
    //console.log(catagory);
    element_catagorys.forEach(element_catagory => {
        // console.log(element_catagory
        // )
        const buttonSection = document.createElement('div');
        buttonSection.classList = ` btn btn-secondary `;
        buttonSection.innerHTML=`
        <button onclick="searchButton('${element_catagory.category_id}')">${element_catagory.category}</button>
        `;
        buttonSectionContainer.appendChild(buttonSection);

    });
}

const searchButton = async (id) =>{
    //console.log(id);
    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await response.json();
    const courses = data.data;
     displaycatagoryCoure(courses);
    console.log(courses)

}

const displaycatagoryCoure = (courses) =>{
 const cousecContainer = document.getElementById('cousec_container');
 cousecContainer.textContent ='';
 courses.forEach(element => {
    console.log(element.
        authors[0].profile_picture);

    const thumnaill_section = document.createElement('div');
    thumnaill_section.classList = `  `;
    thumnaill_section.innerHTML=`
    
    <div class="card  bg-base-100 shadow-xl h-[350px]">
  <figure><img src="${element.thumbnail}" class="h-[200px] w-[300px]" alt="Shoes" /></figure>
  <div class="card-body">
    <div class="flex gap-4">
         <img  src="${element.
        authors[0].profile_picture}" class="w-[40px] h-[40px] rounded-full" alt="">
        <h2 class="card-title">${element.title}</h2>
    </div>
    <p >${element.
        authors[0].profile_name}</p>
    <p>${element.
        others.views
    } view</p>
  </div>
</div>
    `;
    cousecContainer.appendChild(thumnaill_section);

    document.getElementById('sort_button').addEventListener('click',function(){
        const strview = element.
        others.views;
        const strviewfloat = parseFloat(strview);
        console.log(strviewfloat)


    })
    
   
 });



}




loadData();