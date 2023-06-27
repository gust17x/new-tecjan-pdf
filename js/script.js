// let testeData = Date();
// console.log(testeData);
// console.log("A variável testeData é do tipo: " + typeof(testeData));

// const dataHours = document.querySelector('.data-hours')
// dataHours.textContent = testeData

const dataHours = document.querySelector('.data-hours')

setInterval(() => {

    let dateToday = new Date()


    let hours = dateToday.getHours()
    let minutes = dateToday.getMinutes()
    let seconds = dateToday.getSeconds()

    dataHours.textContent = `${dateToday.toLocaleDateString()} | ${hours}:${minutes}`
}, 1000)

// sistema pdf
const btnGenerate = document.querySelector('.btnGenerate-pdf')

btnGenerate.addEventListener("click", (e) => {

    // conteudo do html
    const content = document.querySelector('.content')

    // config pdf
    const options = {
       margin: 1,
       filename: 'myfile.pdf',
       image: { type: 'png'},
       jsPDF: { unit: 'mm', format: 'a5', orientation: 'portrait' } 
    }

    // margin: [10, 10, 10, 10],
    // fileName: "Arquivo pdf",
    // html2canvas: {scale: 10},
    // html2canvas:  { dpi: 96},
    // jsPdf: {unit: "mm", format: "a4", orientation: "portrait"}

    // gerar e baixar pdf
    html2pdf().set(options).from(content).save();

})
