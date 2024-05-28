
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
    //console.log(courses)

}

const displaycatagoryCoure = (courses) =>{
 const cousecContainer = document.getElementById('cousec_container');
 courses.forEach(element => {
    console.log(element.thumbnail);

    const thumnaill_section = document.createElement('div');
    thumnaill_section.classList = `  `;
    thumnaill_section.innerHTML=`
    <div>
    <div>
        <img src="${element.thumbnail}" alt="">
    </div>
    </div>
    `;
    cousecContainer.appendChild(thumnaill_section);

 });

}



loadData();