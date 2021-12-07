let forma = document.getElementById("forma");
let color = document.getElementById("color");
let nombre = document.getElementById("nombre");
let save_btn = document.getElementById("save-btn");
let print = document.getElementById("list-container");

const print_tasks = ()=>{
    print.innerHTML = ""
    print.insertAdjacentHTML('beforeend',`
    <div class="${forma.value}" style="background-color:${color.value} ;" id="pintado">${nombre.value}</div>
    `)
}

save_btn.addEventListener("click", ()=>{
    console.log(forma.value);
    print_tasks();
})
