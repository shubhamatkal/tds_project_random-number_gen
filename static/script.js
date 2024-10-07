document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const resultElement = document.getElementById('number');
    const animationElement = document.getElementById('animation');

    generateBtn.addEventListener('click', generateNumber);

    function generateNumber() {
        const min = parseInt(minInput.value);
        const max = parseInt(maxInput.value);

        if (isNaN(min) || isNaN(max) || min >= max) {
            alert('Please enter valid minimum and maximum values.');
            return;
        }

        showAnimation();

        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            resultElement.textContent = randomNumber;
            hideAnimation();
        }, 1500);
    }

    function showAnimation() {
        animationElement.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
        resultElement.textContent = '';
    }

    function hideAnimation() {
        animationElement.innerHTML = '';
    }
});
