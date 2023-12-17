const audiotrack = new Audio('audio/bamboleo.mp3');
        const controls = document.querySelector('.player__buttons');
        const playButton = document.querySelector('.player__button--play img');
        const stopButton = document.querySelector('.player__button--stop img');
        const ffwdButton = document.querySelector('.player__button--ffwd img');

        function audioEngine(e) {
            const target = e.target.closest('.player__button');
            
            if (target && target.classList.contains('player__button--stop')) {
                stopEngine();
            }
            if (target && target.classList.contains('player__button--play')) {
                playEngine();
            }
            if (target && target.classList.contains('player__button--ffwd')) {
                ffwdEngine();
            }
        }

        function playEngine() {
            playButton.src = 'img/play-blue-com.svg';
            stopButton.src = 'img/stop-svgrepo-com.svg';
            ffwdButton.src ='img/debug-continue-svgrepo-com.svg'
            audiotrack.play();
        }

        function stopEngine() {
            audiotrack.pause();
            audiotrack.currentTime = 0;
            stopButton.src = 'img/stop-blue.svg';
            playButton.src = 'img/play-svgrepo-com.svg';
            ffwdButton.src ='img/debug-continue-svgrepo-com.svg'
        }

        function ffwdEngine() {
            audiotrack.currentTime += 5;
            ffwdButton.src = 'img/play-forward-svgrepo-com.svg';
        }

        controls.addEventListener('click', audioEngine);