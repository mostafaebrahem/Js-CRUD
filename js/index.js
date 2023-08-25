
var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescussInput = document.getElementById("productDescuss");
var btnAdd=document.getElementById('addBtn');
var btnUpdate=document.getElementById('updateBtn');
var productContainer=[];
let searchContainer=[];
let currentIndex=-1;
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
  defult()
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

function searchItems(term){
  searchContainer=[]
 
  for(let i=0;i<productContainer.length;i++){
    
      if(productContainer[i]['name'].includes(term)==true){
          searchContainer.push(productContainer[i]);
      }
  
  }
  console.log('ytrrt',searchContainer);
  tableView(searchContainer);

}
function defult(){
  productNameInput.value="";
  productDescussInput.value="";
  productPriceInput.value="";
  productCategoryInput.value="";

}
function updateProduct(index){
  productNameInput.value=productContainer[index].name;
  productDescussInput.value=productContainer[index].descuss;
  productPriceInput.value=productContainer[index].price;
  productCategoryInput.value=productContainer[index].category;
  selectUpdate()
  console.log("ok")
  currentIndex=index;
}
function confirmUpdate(){
 
  productContainer[currentIndex].name=productNameInput.value;
  productContainer[currentIndex].descuss=productDescussInput.value;
  productContainer[currentIndex].price=productPriceInput.value;
  productContainer[currentIndex].category=productCategoryInput.value;
  localStorage.setItem('products',JSON.stringify(productContainer) );
  tableView(productContainer);
  defult();
  selectAdd()
}
function selectUpdate(){
  btnUpdate.style.display="block"
  btnAdd.style.display="none";
}
function selectAdd(){
  btnUpdate.style.display="none"
  btnAdd.style.display="block";
}