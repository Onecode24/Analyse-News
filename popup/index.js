document.addEventListener('load',()=>{
const res=require('./data')

const new1= document.querySelector('.new1');
const new2= document.querySelector('.new2');
const button=document.querySelector('button');

new1.style.backgroundImage=`url(${res['articles'][0].media})`;
new2.style.backgroundImage=`url(${res['articles'][1].media})`;
  button.addEventListener('click',()=>{
    window.open(`${res['articles'][2].link}`,`${res['articles'][2].topic}`)
  });
  new1.addEventListener('click',()=>{
    window.open(`${res['articles'][0].link}`,`${res['articles'][2].topic}`)
  });
  new2.addEventListener('click',()=>{
    window.open(`${res['articles'][1].link}`,`${res['articles'][2].topic}`)
  });

})