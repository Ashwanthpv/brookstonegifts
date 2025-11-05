let percent = 0;
        const text = document.getElementById("loader-text");
        const overlay = document.getElementById("loader-overlay");
        const interval = setInterval(() => {
            percent += 10;
            text.textContent = `Loading... ${percent}%`;
            if (percent >= 100) {
                clearInterval(interval);
                overlay.style.display = "none";
            }
        }, 200);