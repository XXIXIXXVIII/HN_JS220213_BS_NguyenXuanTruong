

let listRate= document.querySelector(".list-rate")
let send = document.querySelector(".send")
let coment = document.querySelector(".coment")

let currenIndex = 0


function updateRate(index){
          currenIndex=index
}
rates.forEach((rate,index)=>{
          rate.addEventListener('click', e=>{
                    updateRate(index)
                    console.log(currenIndex);
          })
          
})
        
function handleOnclick(){
          let userCmt = coment.value;
          let getLocalStorageData = localStorage.getItem("newCmt")
          if (getLocalStorageData === null){
                    listCmt1 = []
          }else {
                    listCmt1 = JSON.parse(getLocalStorageData);
          }
          listCmt1.push(userCmt)
          localStorage.setItem("newCmt", JSON.stringify(listCmt1))
          console.log(listCmt1);
          showCmt();
}
function showCmt(){
let newCmt = "";
listCmt1.forEach((element, index) => {
          console.log(element);
  newCmt += `<li>${element}<span onclick="deleteCmt(${index})">  
  <i class="fas fa-trash"></i></span></li>`;
  document.querySelector(".listCmt").innerHTML = newCmt; 
  coment.value="";
});
}
function deleteCmt(index){
          let getLocalStorageData = localStorage.getItem("newCmt");
          listCmt1 = JSON.parse(getLocalStorageData);
          console.log(listCmt1);
          listCmt1.splice(index, 1); 
          localStorage.setItem("newCmt", JSON.stringify(listCmt1));
          showCmt();
        }
        

