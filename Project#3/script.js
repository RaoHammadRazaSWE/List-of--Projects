function calculateAverage() {
    const days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thur', 'fri'];
    let totalTemp = 0;
    let count = 0;

    days.forEach(day => {
        const morning = parseFloat(document.getElementById(`${day}morning`).value) || 0;
        const noon = parseFloat(document.getElementById(`${day}noon`).value) || 0;
        const evening = parseFloat(document.getElementById(`${day}evening`).value) || 0;

        totalTemp += morning + noon + evening;
        count += 3; // Each day has 3 temperature inputs
    });

    const averageTemp = totalTemp / count;
    document.getElementById('average-result').textContent = `Average Temperature: ${averageTemp.toFixed(2)}°C`;
}

function findMaximum() {
    const days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thur', 'fri'];
    let highestTemp = -Infinity;
    let highestDay = '';

    days.forEach(day => {
        const morning = parseFloat(document.getElementById(`${day}morning`).value) || 0;
        const noon = parseFloat(document.getElementById(`${day}noon`).value) || 0;
        const evening = parseFloat(document.getElementById(`${day}evening`).value) || 0;

        const dayTemps = [morning, noon, evening];
        const maxTemp = Math.max(...dayTemps);

        if (maxTemp > highestTemp) {
            highestTemp = maxTemp;
            highestDay = day.charAt(0).toUpperCase() + day.slice(1);
        }
    });

    document.getElementById('max-result').textContent = `Highest Temperature: ${highestTemp}°C on ${highestDay}`;
}

function exit() {
    location.reload();
}