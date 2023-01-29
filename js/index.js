// document.addEventListener('click',function(){
//   var r=Math.floor(Math.random()*255);
//   var g=Math.floor(Math.random()*255);
//   var b=Math.floor(Math.random()*255);
//   document.body.style.backgroundColor=`rgba(${r},${g},${b})`;
//   console.log(r,g,b)
// })


var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescussInput = document.getElementById("productDescuss");
var btnAdd=document.getElementById('addBtn');
var productContainer=[];
if(localStorage.getItem('products')==null){
  productContainer=[];
}else {
  productContainer=JSON.parse( localStorage.getItem('products'));
  console.log('test',productContainer)
  tableView(productContainer);
}
//update

function addProducts() {
    var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    descuss: productDescussInput.value
    }
  productContainer.push(product);
  localStorage.setItem('products',JSON.stringify(productContainer) );
  tableView(productContainer);
  }

function tableView(productList) {
  var cartona = ``;
  for (i = 0; i < productList.length; i++) {
    cartona += `<tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].descuss}</td>
        <td><button onclick="updateProduct(${i})" class="btn btn-warning">update</button></td>
        <td><button onclick="deleteElement(${i});" class="btn btn-danger">delete</button></td></tr>`;
  }
  document.getElementById("tableViewer").innerHTML = cartona;
  
}

function deleteElement(x) {
  productContainer.splice(x,1);
  localStorage.setItem('products',JSON.stringify(productContainer));
  tableView(productContainer);
  
}
var searchContainer=[];
function searchItems(term){
 
  console.log("tr",term,productContainer)
  for(let i=0;i<productContainer.length;i++){
    console.log(productContainer[i])
      if(productContainer[i]['name'].includes(term)==true){
          searchContainer.push(productContainer[i]);
      }
  
  }
  console.log('ytrrt',searchContainer);
  tableView(searchContainer);

}
// function updateProduct(index){
//   productNameInput.value=productContainer[index].name;
//   productPriceInput.value=productContainer[index].price;
//   productCategoryInput.value=productContainer[index].category;
//   productDescussInput.value=productContainer[index].descuss;
//   btnAdd.innerHTML='update Product';
  
  
// }
 
// function productSearch(term){
//   var searchContainer=[];
//   // for(i=0;i<productContainer.length;i++){
//   //   if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
//   //     searchContainer.push(productContainer[i]);

//   //   }
//   // }
//   console.log('tmam')
//   tableView(searchContainer);
// }

//تاسك قديم
// var firstNameInput= document.getElementById('firstName');
// var lastNameInput=document.getElementById('lastName');
// console.log(firstNameInput);
// console.log(lastNameInput);
// function ready(){
//         var nameinput=firstNameInput.value+' '+lastNameInput.value;

//         document.getElementById('se').innerHTML=nameinput;
// }

// var user={firstName:'mostafa',
// lastName:'ebrahim',
// age:23,
// area:{width:200,height:100},
// eat:function (mealName){
//         return'he is eating '+mealName;
// }};
// console.log(user.eat('fish'));
