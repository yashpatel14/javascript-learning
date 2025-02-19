

    function calculateBMI() {
        let height = document.getElementById('height').value;
        let weight = document.getElementById('weight').value;
        let result = document.getElementById('bmiResult');
        let gifContainer = document.getElementById('successGif');

        if (height === '' || weight === '' || height <= 0 || weight <= 0) {
            result.innerHTML = "Please enter valid values!";
            result.style.color = "red";
            result.style.background = "#ffcccb";
            gifContainer.innerHTML = "";
            return;
        }

        let heightInMeters = height / 100;
        let bmi = (weight / (heightInMeters ** 2)).toFixed(2);
        let message = `Your BMI is: <span style="color: blue;">${bmi}</span><br>`;
        let gif = "";

        if (bmi < 18.5) {
            message += "<span style='color: orange;'>Underweight 😟</span>";
            result.style.background = "#ffe0b2";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            message += "<span style='color: green;'>Normal Weight 😊</span>";
            result.style.background = "#c8e6c9";
            gif = "<img src='https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif' width='100' alt='Success'>";

            // 🎉 Trigger confetti animation 🎉
            triggerConfetti();
        } else if (bmi >= 25 && bmi < 29.9) {
            message += "<span style='color: orange;'>Overweight 😕</span>";
            result.style.background = "#ffcc80";
        } else {
            message += "<span style='color: red;'>Obese 😨</span>";
            result.style.background = "#ef9a9a";
        }

        result.innerHTML = message;
        gifContainer.innerHTML = gif;
    }

    function triggerConfetti() {
        let duration = 3 * 1000; // 3 seconds
        let end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }

