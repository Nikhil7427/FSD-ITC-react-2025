// const div = document.getElementById('div');
// div[0].innerText='Hello world';
// div[0].style.color='red';
// div[0].style.backgroundColor='cyan';
// console.log(div);

const container = document.getElementsByClassName('container');

// container[0].innerHTML='<h2 style=color:red>Hello World</h2>';
// console.dir(container);
const h2=document.createElement('h2');
h2.innerText='ABES Engineering college';
h2.style.color='whilte';
h2.style.backgroundColor='brown';
console.log(h2);
container[0].appendChild(h2);


// const img=document.createElement('img');
// img.src='https://fastly.picsum.photos/id/795/200/300.jpg?hmac=nVCcTtoBktz0APjPmi8v8r7YJ_Tw7u9vVX6gE1WTIxw';
// img.setAttribute('height','200px');
// img.setAttribute('width','200px')
// container[0].appendChild(img);

const button = document.getElementById('btn');
console.log(button);

function msg(){
    //console.log('Hi, I m working on DOM');
    //alert("hi, I m using DOM");
        const con = document.getElementsByClassName('con');
    con[0].innerHTML='<h2 style=color:aqua>Loading Image ....</h2>';
    setTimeout(()=>{
           const img=document.createElement('img');
img.src='https://fastly.picsum.photos/id/795/200/300.jpg?hmac=nVCcTtoBktz0APjPmi8v8r7YJ_Tw7u9vVX6gE1WTIxw';
img.setAttribute('height','200px');
img.setAttribute('width','200px')
container[0].appendChild(img);
    const con = document.getElementsByClassName('con');
    con[0].innerHTML='<h2 style=color:black>Hello World</h2>';
    console.dir(con);
    }, 2000);
 
}

button.addEventListener('click',msg);