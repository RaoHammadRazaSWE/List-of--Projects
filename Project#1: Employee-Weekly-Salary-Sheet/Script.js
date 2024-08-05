function calculateSalary() {
    const hourlySalary = parseFloat(document.getElementById('hourlySalary').value);

    const regularHours = [
        parseFloat(document.getElementById('monHours').value) || 0,
        parseFloat(document.getElementById('tueHours').value) || 0,
        parseFloat(document.getElementById('wedHours').value) || 0,
        parseFloat(document.getElementById('thuHours').value) || 0,
        parseFloat(document.getElementById('friHours').value) || 0,
        parseFloat(document.getElementById('satHours').value) || 0,
        parseFloat(document.getElementById('sunHours').value) || 0
    ];

    const overtimeHours = [
        parseFloat(document.getElementById('monOvertime').value) || 0,
        parseFloat(document.getElementById('tueOvertime').value) || 0,
        parseFloat(document.getElementById('wedOvertime').value) || 0,
        parseFloat(document.getElementById('thuOvertime').value) || 0,
        parseFloat(document.getElementById('friOvertime').value) || 0,
        parseFloat(document.getElementById('satOvertime').value) || 0,
        parseFloat(document.getElementById('sunOvertime').value) || 0
    ];

    const totalRegularHours = regularHours.reduce((sum, hours) => sum + hours, 0);
    const totalOvertimeHours = overtimeHours.reduce((sum, hours) => sum + hours, 0);

    const regularPay = totalRegularHours * hourlySalary;
    const overtimePay = totalOvertimeHours * hourlySalary * 1.5;

    const totalPay = regularPay + overtimePay;
    const bonus = totalPay * 0.15;
    const totalWithBonus = totalPay + bonus;

    document.getElementById('salaryResult').innerText = `
        Regular Hours: ${totalRegularHours} hours

        Overtime Hours: ${totalOvertimeHours} hours

        Regular Pay: Rs${regularPay.toFixed(2)}

        Overtime Pay: Rs${overtimePay.toFixed(2)}

        Total Pay: Rs${totalPay.toFixed(2)}

        Bonus: Rs${bonus.toFixed(2)}
        
        Net Salary: Rs${totalWithBonus.toFixed(2)}
    `;
}

function exit() {
    location.reload();
}
