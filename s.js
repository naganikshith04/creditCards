function render(){
  var sel=document.getElementById("inlineFormCustomSelect");
  var sel2=document.getElementById("inlineFormCustomSelec");
  for(let i=1;i<=23;i++){
      sel.innerHTML+=`${selectOptions(i)}`;
      sel2.innerHTML+=`${selectOptions(i)}`;
}
}
function selectOptions(con){
    return `
   <option value="X${con}">X${con}</option>
`
}



function fun(){
  var options = document.getElementById("inlineFormCustomSelect").value;
  var options2 = document.getElementById("inlineFormCustomSelec").value;
  console.log(options)
  console.log(options2)
  var final = options+"-"+options2;
  console.log(final);
  var finalSkew = options;
  var finalSkew1 = options2;
  
  let path =`./MVSR/${final}.png`
  let path1 =  `./${finalSkew}.png`
  let path2 =  `./${finalSkew1}.png`
  console.log(path);
  var images = document.getElementById("img");
  images.innerHTML = `<img src=${path} class="img-fluid m-5" height="300px" width="300px" alt="Responsive image"> + <img src=${path1} class="img-fluid m-5" height="500px" width="400px" alt="Responsive image"> +<img src=${path2} class="img-fluid m-5" height="500px" width="400px" alt="Responsive image">   `;
}
