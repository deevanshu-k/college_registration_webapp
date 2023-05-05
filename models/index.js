const Student = require('./studentData');

Student.sync({ force: false }).then(async () => {
    console.log('Student table created!');
}).catch((error) => {
    console.log(error);
})

module.exports = Student;