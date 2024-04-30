function getRandomValue(min, max) {
	// random number including (min) and exclusive (max)
	return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
			winner: null,
			logMessages: [],
		};
	},
	computed: {
		monsterHealthBarStyle() {
			if (this.monsterHealth < 0) {
				this.monsterHealth = 0;
				return { width: "0%" };
			}
			return { width: this.monsterHealth + "%" };
		},
		playerHealthBarStyle() {
			if (this.playerHealth < 0) {
				this.playerHealth = 0;
				return { width: "0%" };
			}
			return { width: this.playerHealth + "%" };
		},
		canUseSpecialAttack() {
			return this.currentRound % 3 !== 0;
		},
	},
	watch: {
		playerHealth(value) {
			if (value <= 0 && this.monsterHealth <= 0) {
				this.winner = "draw";
			} else if (this.playerHealth <= 0) {
				this.winner = "monster";
			}
		},
		monsterHealth(value) {
			if (value <= 0 && this.playerHealth <= 0) {
				this.winner = "draw";
			} else if (this.monsterHealth <= 0) {
				this.winner = "player";
			}
		},
	},
	methods: {
		attackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(5, 12);
			this.monsterHealth = this.monsterHealth - attackValue;
			this.addLogMessage("player", "attack", attackValue);
			this.attackPlayer();
		},
		attackPlayer() {
			const attackValue = getRandomValue(8, 15);
			this.playerHealth = this.playerHealth - attackValue;
			this.addLogMessage("monster", "attack", attackValue);
		},
		specialAttackMonster() {
			this.currentRound++;
			const attackValue = getRandomValue(10, 25);
			this.monsterHealth = this.monsterHealth - attackValue;
			this.addLogMessage("player", "special-attack", attackValue);
			this.attackPlayer();
		},
		healPlayer() {
			this.currentRound++;
			const healValue = getRandomValue(10, 25);
			if (this.playerHealth + healValue > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += healValue;
			}
			this.addLogMessage("player", "healed", healValue);
			this.attackPlayer();
		},
		resetGame() {
			this.monsterHealth = 100;
			this.playerHealth = 100;
			this.currentRound = 0;
			this.winner = null;
			this.logMessages = [];
		},
		surrender() {
			this.winner = "monster";
		},
		addLogMessage(who, what, value) {
			this.logMessages.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value,
			});
		},
	},
}).mount("#game");
