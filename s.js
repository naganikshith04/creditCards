function render(){
  var sel=document.getElementById("inlineFormCustomSelect");
  var sel2=document.getElementById("inlineFormCustomSelec");
  for(let i=1;i<=23;i++){
      sel.innerHTML+=`${selectOptions(i)}`;
      sel2.innerHTML+=`${selectOptions(i)}`;
}
}
function selectOptions(con){
    //let url='img/vegetable/vegetable${con}.jpg';
    return `
   <option value="X${con}">X${con}</option>
`
}



function fun(){
  var options = document.getElementById("inlineFormCustomSelect").value;
  var options2 = document.getElementById("inlineFormCustomSelect").value;
  var final = options+"-"+options2;
  console.log(final);
  let path =`./MVSR/${final}.png`
  // return`
  // <img src=${path} class="img-fluid" alt="Responsive image">
  // `
  console.log(path);
  var images = document.getElementById("img");
  images.innerHTML += `<img src=${path} class="img-fluid m-5" height="300px" width="300px" alt="Responsive image">`;
}