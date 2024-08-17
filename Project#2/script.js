function calculateBill() {
    const carClass = document.getElementById('carClass').value;
    const requiredHours = parseInt(document.getElementById('requiredHours').value, 10);
    const requiredDriver = document.getElementById('requiredDriver').value === 'yes';
    const airConditioned = document.getElementById('airConditioned').value === 'yes';

    let ratePerHour;

    switch(carClass) {
        case 'A':
            ratePerHour = 1000;
            break;
        case 'B':
            ratePerHour = 500;
            break;
        case 'C':
            ratePerHour = 300;
            break;
        default:
            ratePerHour = 0;
    }

    if (requiredDriver) {
        ratePerHour += 100;
    }

    if (airConditioned) {
        ratePerHour += 100;
    }

    const totalBill = ratePerHour * requiredHours;
    document.getElementById('totalBill').innerText = `Total Bill Rs. ${totalBill}`;
}
