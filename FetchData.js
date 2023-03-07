

fetch('https://fakestoreapi.com/products').then((data) => {
      // console.log(data);
      return data.json();
}).then((response) =>{
      //console.log(response[2].title);
     let data1="";
     response.map((values) => {
      data1 +=` <div class="cards">
      <h1 class="title">${values.title}</h1>
      <img  src=${values.image} alt="img" class="images" >
      <p>${values.description}</p>
      <p class="category">${values.category}</p>
      <p class="price">${values.price}</p>
</div>`
     });
     document.getElementById("cards").innerHTML=data1;
}).catch((err) => {
      console.log(err);
})