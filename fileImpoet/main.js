// import {sum, multiplication} from './logic.js';

// const data = sum(20,40);
// console.log(data);
// const data1 = multiplication(40,10);
// console.log(data1);

const button = document.getElementById('btn');
const disp = document.getElementById('disp');
let table = `<table border = 1>`;
async function fetchData(){
    disp.innerHTML="<h2>Data is loading...</h2>"
    const response = await fetch('https://dummyjson.com/users');
    const jasonData = await response.json();
    console.log(jasonData.recipes);  
    //disp.innerHTML=`<h2>${jasonData.recipes[0].name} ${jasonData.recipes}</h2>`
    jasonData.users.forEach(element => {
        table += `<tr>
        <td><img src=${element.image} height=200 width=200 alt='image'></td>
        <td>${element.firstName}</td>
        <td style ="color:blue; background-color:#;">${element.lastName}</td>
        <td >${element.gender}</td>
        <td>${element.email}</td>
        <td>${element.username}</td>
        </tr>`
        
    });

    table+=`</table>`;
    disp.innerHTML=table;
}
button.addEventListener('click', fetchData);