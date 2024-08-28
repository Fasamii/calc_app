const panel = document.getElementById('calc_panel');
const buttons = document.querySelectorAll('.calc_button');
const calculate = document.getElementById('calc__buton_r');
let calculation = '';
document.getElementById('clear').addEventListener('click', () => {calculation = '   '});
calculate.addEventListener('click', () => {
    calculation = String(eval(calculation.replaceAll('X','*').replaceAll(':','/')))
    console.log(calculation)
    panel.textContent = calculation;
})
buttons.forEach((element) => {
    element.addEventListener('click', () => {
        addToCalculation(element.value);
        panel.textContent = calculation;
    });
});
function addToCalculation(element){
    if(['X',':','+','-'].includes(element)){
        const last = calculation.slice(-1);
        if(!['X',':','+','-'].includes(last)){
            calculation += element;         
        }
    }else{
        calculation += element;     
    }
}   