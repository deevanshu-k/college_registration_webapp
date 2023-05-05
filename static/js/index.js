let form = document.getElementById("registration-form");
let submitbtn = document.getElementById('submitbtn');
let submitbtnspinner = document.getElementById('submitbtnspinner');
let alertElement = document.getElementById('alert');

var profilePhoto = document.getElementById('profilePhoto');
var profilePhotoPreview = document.getElementById('profilePhotoPreview');
form.addEventListener('submit', async (e) => {
    let id = Date.now()
    e.preventDefault();
    submitbtnspinner.style.display = '';
    submitbtn.setAttribute('disabled', true);
    let data = {
        ScholarNo: form.studentscholar.value,
        StudImage: id,
        StudentName: form.studentname.value,
        DateOfBirth: form.dateofbirth.value,
        ContactNo: Number(form.phoneno.value),
        AadharNo: Number(form.aadharno.value),
        Mailid: form.mailid.value,
        FatherName: form.fathername.value,
        FatherOccupation: form.fatheroccupation.value,
        FatherContactNo: Number(form.fathercontactno.value),
        MotherName: form.mothername.value,
        MotherOccupation: form.motheroccupation.value,
        CollegeName: form.collegename.value,
        CourseName: form.coursename.value,
        Branch: form.branch.value,
        Semester: form.semester.value,
        AcademicSession: form.session.value,
        Category: form.category.value,
        AdmissionUnder: form.admissionunder.value,
        MinorityCommunity: form.minoritycommunity.value,
        Residency: form.residency.value,
        Living: form.student_living.value,
        Locality: form.locality.value,
        City: form.city.value,
        HomeState: form.state.value,
        Pincode: Number(form.pincode.value),
        LocalAddress: form.localaddress.value,
        GuardianName: form.guardianname.value,
        GuardianContactNo: Number(form.guardiancontactno.value),
        '10thSchooling': form['10thschool'].value,
        '10thBoard': form['10thboard'].value,
        '10thPassingYear': Number(form['10thpassingyear'].value),
        '10thMarks': form['10thmarks_get'].value+"/"+form['10thmarks_outof'].value,
        '10thStudyMedium': form['10thmedium'].value,
        '12thSchooling': form['12thschool'].value,
        '12thBoard': form['12thboard'].value+"/"+form['12thmarks_outof'].value,
        '12thPassingYear': Number(form['12thpassingyear'].value),
        '12thMarks': Number(form['12thmarks_get'].value),
        '12thStudyMedium': form['12thmedium'].value,
        DiplomaCollege: form.diplomacollege.value,
        DiplomaUniversity: form.diplomauniversity.value,
        DiplomaPassingYr: Number(form.diplomapassingyear.value),
        DiplomaMarks: form.diplomamarks_get.value+"/"+form.diplomamarks_outof.value,
        DiplomaStudyMedium: form.diplomamedium.value,
        GraduationCollege: form.graduationcollege.value,
        GraduationUniversity: form.graduationuniversity.value,
        GraduationPassingYr: Number(form.graduationpassingyear.value),
        GraduationMarks: form.graduationmarks_get.value+"/"+form.graduationmarks_outof.value,
        GraduationStudyMedium: form.graduationmedium.value,
        EntranceExamName: form.entranceexam.value,
        EntranceExamyear: Number(form.entranceexamyear.value),
        EntrancEmarks: form.entrancemarks_get.value+"/"+form.entrancemarks_outof.value,
        EntranceExamMedium: form.entranceexammedium.value
    }
    let res = await submitForm(data);
    res.json().then(async (d) => {
        let img = await uploadImage(id);
        if (res.status == 200 && img.status == 200) {
            submitbtnspinner.style.display = 'none';
            submitbtn.setAttribute('disabled', false);
            alert('Record Submition Successful');
            form.reset();
            window.location.href = "http://103.159.169.74/firstyearrg/loginpage.php";
        }
        else if (res.status == 501) {
            submitbtn.setAttribute('disabled', false);
            alertBox("Data Already Present in database");
            submitbtnspinner.style.display = 'none';
        }
        else if (img.status != 200) {
            submitbtn.setAttribute('disabled', false);
            alertBox("Form Submitted, But not able to upload profile photo");
            submitbtnspinner.style.display = 'none';
            form.reset();
        } else {
            submitbtn.setAttribute('disabled', false);
            alertBox("Server error, try again after some time");
            submitbtnspinner.style.display = 'none';
            form.reset();
        }
    })
        .catch((e) => {
            console.log(e);
            submitbtn.setAttribute('disabled', false);
            alertBox("Server error, try again after some time");
            submitbtnspinner.style.display = 'none';
        })
});

// submitbtn.addEventListener('click', async () => {
//     submitbtnspinner.style.display = '';
//     submitbtn.setAttribute('disabled', true);
//     let data = {
//         ScholarNo: form.studentscholar.value,
//         StudImage: form.studentscholar.value,
//         StudentName: form.studentname.value,
//         DateOfBirth: form.dateofbirth.value,
//         ContactNo: form.phoneno.value,
//         AadharNo: form.aadharno.value,
//         Mailid: form.mailid.value,
//         FatherName: form.fathername.value,
//         FatherOccupation: form.fatheroccupation.value,
//         FatherContactNo: form.fathercontactno.value,
//         MotherName: form.mothername.value,
//         MotherOccupation: form.motheroccupation.value,
//         CollegeName: form.collegename.value,
//         CourseName: form.coursename.value,
//         Branch: form.branch.value,
//         Semester: form.semester.value,
//         AcademicSession: form.session.value,
//         Category: form.category.value,
//         AdmissionUnder: form.admissionunder.value,
//         MinorityCommunity: form.minoritycommunity.value,
//         Residency: form.residency.value,
//         Living: form.student_living.value,
//         Locality: form.locality.value,
//         City: form.city.value,
//         HomeState: form.state.value,
//         Pincode: form.pincode.value,
//         LocalAddress: form.localaddress.value,
//         GuardianName: form.guardianname.value,
//         GuardianContactNo: form.guardiancontactno.value,
//         '10thSchooling': form['10thschool'].value,
//         '10thBoard': form['10thboard'].value,
//         '10thPassingYear': form['10thpassingyear'].value,
//         '10thMarks': form['10thmarks_get'].value,
//         '10thStudyMedium': form['10thmedium'].value,
//         '12thSchooling': form['12thschool'].value,
//         '12thBoard': form['12thboard'].value,
//         '12thPassingYear': form['12thpassingyear'].value,
//         '12thMarks': form['12thmarks_get'].value,
//         '12thStudyMedium': form['12thmedium'].value,
//         DiplomaCollege: form.diplomacollege.value,
//         DiplomaUniversity: form.diplomauniversity.value,
//         DiplomaPassingYr: form.diplomapassingyear.value,
//         DiplomaMarks: form.diplomamarks_get.value,
//         DiplomaStudyMedium: form.diplomamedium.value,
//         GraduationCollege: form.graduationcollege.value,
//         GraduationUniversity: form.graduationuniversity.value,
//         GraduationPassingYr: form.graduationpassingyear.value,
//         GraduationMarks: form.graduationmarks_get.value,
//         GraduationStudyMedium: form.graduationmarks_outof.value,
//         EntranceExamName: form.entranceexam.value,
//         EntranceExamyear: form.entranceexamyear.value,
//         EntrancEmarks: form.entrancemarks_get.value,
//         EntranceExamMedium: form.entranceexammedium.value
//     }
//     let res = await submitForm(data);
//     res.json().then(async (d) => {
//         let img = await uploadImage(data.ScholarNo);
//         if (res.status == 200 && img.status == 200) {
//             submitbtnspinner.style.display = 'none';
//             submitbtn.setAttribute('disabled', false);
//             form.reset();
//         }
//         else if(res.status == 501){
//             alertBox("scholar already exist !");
//         }
//         else if (img.status != 200) {
//             alertBox("Not able to upload profile photo");
//             submitbtnspinner.style.display = 'none';
//             submitbtn.setAttribute('disabled', false);
//             // form.reset();
//         } else {
//             alertBox("Server error, try again after some time");
//             submitbtn.setAttribute('disabled', false);
//             submitbtnspinner.style.display = 'none';
//             // form.reset();
//         }
//     });
// })

async function uploadImage(Id) {
    const ImageData = new FormData();
    ImageData.append('file', profilePhoto.files[0]);
    let img = await fetch('/registation/uploadImage', {
        method: 'POST',
        body: ImageData,
        headers: {
            'uniqueId': Id
        }
    });
    return img;
}

async function submitForm(data) {
    let res = await fetch('/registation', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }
    });
    return res;
}

async function submitProfilePhoto(event) {
    profilePhotoPreview.src = URL.createObjectURL(event.target.files[0]);
    let fileSize = event.target.files[0].size;
    let fileMb = fileSize / 1024 ** 2;
    if (fileMb > 0.05) {
        profilePhotoPreview.src = "../static/default_profile_photo.webp";
        alertBox("select the image with a size up to 50Kb");
    }
}

function alertBox(msg) {
    alertElement.innerHTML = msg;
    alertElement.style.display = '';
    setTimeout(() => {
        alertElement.style.display = 'none';
    }, 3000);
}


// (
//     function sample() {
//         console.log("sample");
//         form.studentscholar.value = "ASJDJHKHJK"
//         form.studentname.value = "Deevanshu"
//         form.dateofbirth.value = "2003-05-26"
//         form.phoneno.value = "9826728502"
//         form.aadharno.value = 1276376123123
//         form.mailid.value = "db@jhad.com"
//         form.fathername.value = "ASdwd"
//         form.fatheroccupation.value = "asdasd"
//         form.fathercontactno.value = 62376123612
//         form.mothername.value = 'sadfsadf'
//         form.motheroccupation.value = 'asdfasdf'
//         // form.collegename.value = ""
//         // form.coursename.value = ''
//         // form.branch.value = ''
//         // form.semester.value = ''
//         // form.session.value = ''
//         // form.category.value = ''
//         // form.admissionunder.value = ''
//         // form.minoritycommunity.value = ''
//         // form.residency.value = ''
//         // form.student_living.value = ''
//         // form.locality.value = ''
//         // form.city.value = "asdfadsf"
//         // form.state.value = ''
//         // form.pincode.value = 7854
//         // form.localaddress.value = 'wdasdasf'
//         // form.guardianname.value
//         // form.guardiancontactno.value
//         // form['10thschool'].value
//         // form['10thboard'].value
//         // form['10thpassingyear'].value
//         // form['10thmarks_get'].value
//         // form['10thmedium'].value
//         // form['12thschool'].value
//         // form['12thboard'].value
//         // form['12thpassingyear'].value
//         // form['12thmarks_get'].value
//         // form['12thmedium'].value

//         // form.diplomacollege.value
//         // form.diplomauniversity.value
//         // form.diplomapassingyear.value
//         // form.diplomamarks_get.value
//         // form.diplomamedium.value
//         // form.graduationcollege.value
//         // form.graduationuniversity.value
//         // form.graduationpassingyear.value
//         // form.graduationmarks_get.value
//         // form.graduationmarks_outof.value
//         // form.entranceexam.value
//         // form.entranceexamyear.value
//         // form.entrancemarks_get.value
//         // form.entranceexammedium.value
//     }
// )()