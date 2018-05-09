// Complete following tasks (no specific order):

// - find all the TODO: spots and complete their task 

// - fix bugs
// 		- clicking the unit label doesnt focus on the input
// 		- temperature input should only allow for numbers to be input
// 		- color of circle and filler arent updated when temperature changes
// 		- 2 other unidentified errors

// - find areas to refactor and improve performance

// - add Kelvin unit to system

// This is an app that, given the values in the temperature and unit inputs, adjusts
// the thermometer height and color to reflect those values

const props = {
	unit: 'C',
  temp: 0
}

const onTempChange = e => {
  props.temp = e.target.value
  update()
}
const onUnitChange = e => {
	props.unit = e.target.value
  update()
}

const update = () => {
	const {temp, unit} = props
	document.querySelector('.js-state-message').innerHTML = `Current water temperature is ${props.temp}&deg; ${props.unit}`
  document.querySelector('.js-glass-amount').style.height = tempToHeight(temp, unit)
  document.querySelector('.js-glass-amount').style.backgroundColor = tempToColor(temp, unit)
}


const enable = () => {  
	update()
  const temp = document.querySelector('.js-temp-input')
  temp.value = props.temp
  const unit = document.querySelector('.js-unit-input')
  unit.value = props.unit
  
  unit.addEventListener('change', onUnitChange);
  temp.addEventListener('change', onTempChange); 
  
  
  // TODO: add event listeners to handle temp and unit input changes
}

// TODO: interpolate value to output 0% to 97% aligning the freezing and 
// boiling points of water in the current unit system (freezing is 33% and boiling is 73%)
const tempToHeight = (temp, unit) => '33%'
// TODO: interpolate value somewhere between #01579b and #f34e54. clamping the output is needed
const tempToColor = (temp, unit) => '#01579b'

enable()

