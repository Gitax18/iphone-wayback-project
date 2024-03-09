const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

const img = document.querySelector('img');
const title = document.querySelector('.title');
const info = document.querySelector('.info');
const timeDate = document.querySelector('#date');
const timeMonth = document.querySelector('#month');
const timeYear = document.querySelector('#year');

let data;

function getDOM(data, index, img, title, info, timeDate, timeMonth, timeYear){
    const dt = data[index]
    img.src = dt.img;
    title.textContent = dt.name;
    info.textContent = dt.info;
    timeDate.textContent = dt.launch_date.dd;
    timeMonth.textContent = dt.launch_date.mm;
    timeYear.textContent = dt.launch_date.yyyy;
}

await fetch('./data.json').then(res=> {
    return res.json();
}).then(dt =>{
    data =  dt;
}).catch(err=>{
    console.log('error occured while reading data.json');
    console.error(err);
})

console.log(data[0].launch_date);

const maxLimit = data.length;
let counter = 0;


btnNext.addEventListener('click', (e)=>{
    if(counter < maxLimit - 1 ) counter++
    else counter = 0

    getDOM(data, counter, img, title, info, timeDate, timeMonth, timeYear);
})


btnPrev.addEventListener('click', (e)=>{
    if(counter == 0) counter = maxLimit - 1
    else counter--

    getDOM(data, counter, img, title, info, timeDate, timeMonth, timeYear);

})
