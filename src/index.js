// import './scripts/main'
import './styles/main.scss'
import { Setup } from './scripts/setup.js'
import { Rules } from './scripts/rules.js'

// console.log(document.querySelector('.app__size'))
const appGame = document.querySelector('.app__game');
let sizes = document.querySelector('.app__sizes');
sizes.querySelector('.app__size_3').addEventListener('click', () => mainFunc(3));
sizes.querySelector('.app__size_4').addEventListener('click', () => mainFunc(4));
sizes.querySelector('.app__size_5').addEventListener('click', () => mainFunc(5));
sizes.querySelector('.app__size_6').addEventListener('click', () => mainFunc(6));
sizes.querySelector('.app__size_7').addEventListener('click', () => mainFunc(7));
sizes.querySelector('.app__size_8').addEventListener('click', () => mainFunc(8));


function mainFunc(value = 4) {
	appGame.innerHTML = '';
	appGame.style.gridTemplateRows = `repeat(${value}, 1fr)`;
	appGame.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
	let setup = new Setup(value);
	let rules = new Rules(value);
}
mainFunc()

// let setup = new Setup(value);
// let rules = new Rules(value);

// console.log(setup);