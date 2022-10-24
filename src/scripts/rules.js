import click from '../assets/click.mp3';
class Rules {

	appGame = document.querySelector('.app__game');
	appInfoMoves = document.querySelector('.app-info__moves');
	appButtonsSound = document.querySelector('.app-buttons__sound')
	audio = new Audio();
	isSounded = true;
	moves = 0;

	constructor(size = 4) {
		this.size = size;
		this.rulesDescription.call(this);
		this.time.call(this);
		this.soundButton.call(this);
		this.audio.src = click;
		this.audio.volume = 0.4;
	}

	time() {

		this.appGame.addEventListener('click', timeTrigger)
		const appInfoTime = document.querySelector('.app-info__time');


		function timeTrigger() {
			const appGame = document.querySelector('.app__game');
			setInterval(timeLoad, 1000);
			appGame.removeEventListener('click', timeTrigger)
		}

		timeLoad.minutes = 0;
		timeLoad.seconds = 0;
		function timeLoad() {
			timeLoad.seconds += 1;
			if (timeLoad.seconds == 60) {
				timeLoad.seconds = 0;
				timeLoad.minutes += 1;
			}
			if (timeLoad.minutes >= 10 && timeLoad.seconds >= 10) {
				appInfoTime.lastChild.textContent = `${timeLoad.minutes}:${timeLoad.seconds}`
			} else if (timeLoad.minutes >= 10) {
				appInfoTime.lastChild.textContent = `${timeLoad.minutes}:0${timeLoad.seconds}`
			} else if (timeLoad.seconds >= 10) {
				appInfoTime.lastChild.textContent = `0${timeLoad.minutes}:${timeLoad.seconds}`
			} else appInfoTime.lastChild.textContent = `0${timeLoad.minutes}:0${timeLoad.seconds}`
		}

	}
	soundButton() {
		this.appButtonsSound.addEventListener('click', (event) => sound.call(this, event));

		function sound(event) {
			event.currentTarget.classList.toggle('sound-active');
			this.isSounded = !this.isSounded;
		}
	}

	rulesDescription() {

		this.appGame.addEventListener('click', (event) => rule.call(this, event))

		function rule(event) {
			const emptyItem = document.querySelector('.game-item_empty');

			let isItem = (event.target.classList.contains('game-item') && !event.target.classList.contains('game-item_empty'));
			let targetCurrentValue = event.target.dataset.currentValue;
			let targetTargetValue = event.target.dataset.targetValue;
			let emptyCurrentValue = emptyItem.dataset.currentValue;
			let emptyTargetValue = emptyItem.dataset.targetValue;
			if (isItem &&		((+targetCurrentValue + this.size == emptyCurrentValue)
								  || (targetCurrentValue - this.size == emptyCurrentValue)
								 || ((targetCurrentValue - 1 == emptyCurrentValue) && ((targetCurrentValue-1) % this.size != 0))
								|| ((+targetCurrentValue + 1 == emptyCurrentValue) && ((emptyCurrentValue-1) % this.size != 0)))) {

				this.moves += 1;
				this.appInfoMoves.lastChild.textContent = this.moves;
				if (this.isSounded) {
					this.audio.play();
				}



				emptyItem.textContent = targetTargetValue;
				emptyItem.dataset.targetValue = targetTargetValue;
				event.target.dataset.targetValue = emptyTargetValue;
				event.target.textContent = '';
				emptyItem.style.scale = '1.15'
				setTimeout( () => emptyItem.style.scale = '',150 )
				emptyItem.classList.remove('game-item_empty');
				event.target.classList.add('game-item_empty');
				if (emptyItem.dataset.targetValue === emptyItem.dataset.currentValue) {
					emptyItem.style.background = 'rgb(232, 138, 69)';
				}
				if (event.target.style.background === 'rgb(232, 138, 69)') {
					event.target.style.background = ''
				}
			}
		}
	}


}

// let rules = new Rules();
export { Rules };