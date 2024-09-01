function toggleSelect(level) {
    // Hide all sections initially
    document.getElementById('matricSection').style.display = 'none';
    document.getElementById('intermediateSection').style.display = 'none';
    document.getElementById('undergraduateSection').style.display = 'none';
    document.getElementById('postgraduateSection').style.display = 'none';

    // Show the selected section
    if (level === 'matric') {
        document.getElementById('matricSection').style.display = 'block';
    } else if (level === 'intermediate') {
        document.getElementById('intermediateSection').style.display = 'block';
    } else if (level === 'undergraduate') {
        document.getElementById('undergraduateSection').style.display = 'block';
    } else if (level === 'postgraduate') {
        document.getElementById('postgraduateSection').style.display = 'block';
    }
}

function submitForm() {
    const studentName = document.getElementById('studentName').value;
    const studentFName = document.getElementById('studentFName').value;
    const studentAddress = document.getElementById('studentAddress').value;
    const studentPhone = document.getElementById('studentPhone').value;
    const studentCNIC = document.getElementById('studentCNIC').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const studentBlood = document.getElementById('studentBlood').value;
    const matricRollNumber = document.getElementById('matricRollNumber').value;
    const matricGrade = document.getElementById('matricGrade').value;
    const matricYear = document.getElementById('matricYear').value;
    const matricProgram = document.getElementById('matric').value;
    const interRollNumber = document.getElementById('interRollNumber').value;
    const interGrade = document.getElementById('interGrade').value;
    const interYear = document.getElementById('interYear').value;
    const intermediateProgram = document.getElementById('intermediate').value;
    const undergraduateProgram = document.getElementById('undergraduate').value;
    const postgraduateProgram = document.getElementById('postgraduate').value;
    const studentPic = document.getElementById('studentPic').files[0];

    let resultHTML = `
        <h3>Submitted Information</h3>
        <p><strong>Name:</strong> ${studentName}</p>
        <p><strong>Father's Name:</strong> ${studentFName}</p>
        <p><strong>Address:</strong> ${studentAddress}</p>
        <p><strong>Phone:</strong> ${studentPhone}</p>
        <p><strong>CNIC:</strong> ${studentCNIC}</p>
        <p><strong>Email:</strong> ${studentEmail}</p>
        <p><strong>Blood Group:</strong> ${studentBlood}</p>
        <p><strong>Matric :</strong> ${matricProgram}</p>
        <p><strong>Roll Number:</strong> ${matricRollNumber}</p>
        <p><strong>Grade:</strong> ${matricGrade}</p>
        <p><strong>Passing Year:</strong> ${matricYear}</p>
        <p><strong>Intermediate:</strong> ${intermediateProgram}</p>
        <p><strong>Roll Number:</strong> ${interRollNumber}</p>
        <p><strong>Grade:</strong> ${interGrade}</p>
        <p><strong>Passing Year:</strong> ${interYear}</p>
        <p><strong>Undergraduate:</strong> ${undergraduateProgram}</p>
        <p><strong>Postgraduate:</strong> ${postgraduateProgram}</p>
    `;

    if (studentPic) {
        const picURL = URL.createObjectURL(studentPic);
        resultHTML += `<img src="${picURL}" alt="Student Picture">`;
    }

    document.getElementById('result').innerHTML = resultHTML;
}

function exitForm() {
    if (confirm("Are you sure you want to exit?")) {
        location.reload();  // Reloads the current page
    }
}