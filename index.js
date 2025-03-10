
const temp = document.getElementById('temp');
const tofah = document.getElementById('tofah');
const tocel = document.getElementById('tocel');
const result = document.getElementById('result');
let temps
function convert() {
  if (tofah.checked) {
    temps = Number(temp.value);
    temps = temps * 9/5 + 32;
    result.textContent = temps + "°F";
  }
  else if(tocel.checked) {
    temps = Number(temp.value);
    temps = (temps - 32) * 9/5 ;
    result.textContent = temps + "°C";
  }
  else{
    result.textContent = "Yo folk select a unit "
  }
}
