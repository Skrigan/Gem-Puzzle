class Setup {

	appGame = document.querySelector('.app__game');
	newGame = document.querySelector('.app-buttons__new-game');

	constructor(size = 4) {
		this.size = size;
		this.setupGame.call(this)
		this.newSetup.call(this)
	}

	newSetup() {
		this.newGame.addEventListener('click', () => {
			this.appGame.innerHTML = ''
			this.setupGame(this.size, this.appGame)
		});
	}

	setupGame() {
		let arr = [];
		for (let i = 0; i < this.size**2; i++) {
			arr.push(i);
		}
		shuffle(arr)
		setup.call(this, arr)

		function shuffle(arr) {
			for (let i = arr.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}

		function setup(arr) {
			
			for (let i = 0; i < arr.length; i++) {
				let gameItem = document.createElement('div');
				gameItem.classList.add('game-item');
				gameItem.textContent = arr[i];
				gameItem.dataset.targetValue = arr[i];
				gameItem.dataset.currentValue = i+1;
				if (arr[i] === 0) {
					gameItem.classList.add('game-item_empty');
					gameItem.textContent = '';
					gameItem.dataset.targetValue = 4**2;
				}
				if (+gameItem.dataset.targetValue === +gameItem.dataset.currentValue && +gameItem.dataset.targetValue != 16) {
					gameItem.style.background = 'rgb(232, 138, 69)';
				}
				this.appGame.append(gameItem);
			}
		}
	}
}

// let setup = new Setup();
// export { setup };
export { Setup };
