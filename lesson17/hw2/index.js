export let timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerId: 0,
    startTimer() {
        this.timerId = setInterval(() => {
            this.secondsPassed += 5;
            if (this.secondsPassed == 60) {
                this.minsPassed++;
                this.secondsPassed = 0;
            }
        }, 5000)
    },

    getTime() {
        return `${this.minsPassed}:${this.secondsPassed}`;
    },

    stopTimer() {
        clearInterval(this.timerId);
    },

    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    }
}

// Значение секунд должно быть двузначным (дополнить лидирующим нулем по необходимости)
// Метод stopTimer должен остановить таймер и сохранить текущее состояние.
// Если после остановки снова выполнить startTimer то нужно продолжить с сохраненной позиции
// Метод resetTimer должен сбросить таймер в изначальное состояние (до старта)