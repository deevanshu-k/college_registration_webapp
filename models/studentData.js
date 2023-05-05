const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require('../config/sequelize')



const studentInfo = sequelize.define("student_info",
    {
        ScholarNo: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        RegDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        StudImage: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        StudentName: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ''
        },
        DateOfBirth: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.NOW

        },
        ContactNo: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0
        },
        AadharNo: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0
        },
        Mailid: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''

        },
        FatherName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        FatherOccupation: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''

        },
        FatherContactNo: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0

        },
        MotherName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''

        },
        MotherOccupation: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''

        },
        CollegeName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''

        },
        CourseName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''

        },
        Branch: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''

        },
        Semester: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        AcademicSession: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Category: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        AdmissionUnder: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        MinorityCommunity: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        Residency: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        Living: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        Locality: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        HomeState: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        Pincode: {
            type: DataTypes.MEDIUMINT,
            allowNull: false,
            defaultValue: 0
        },
        LocalAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        GuardianName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        GuardianContactNo: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0
        },
        '10thSchooling': {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        '10thBoard': {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        '10thPassingYear': {
            type: DataTypes.SMALLINT,
            allowNull: false,
            defaultValue: 0
        },
        '10thMarks': {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: false
        },
        '10thStudyMedium': {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: false
        },
        '12thSchooling': {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        '12thBoard': {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        '12thPassingYear': {
            type: DataTypes.SMALLINT,
            allowNull: false,
            defaultValue: 0
        },
        '12thMarks': {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: false
        },
        '12thStudyMedium': {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: false
        },
        DiplomaCollege: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        DiplomaUniversity: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        DiplomaPassingYr: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            defaultValue: 0
        },
        DiplomaMarks: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        DiplomaStudyMedium: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        GraduationCollege: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        GraduationUniversity: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        GraduationPassingYr: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            defaultValue: 0
        },
        GraduationMarks: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        GraduationStudyMedium: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        EntranceExamName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        EntranceExamyear: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            defaultValue: 0
        },
        EntrancEmarks: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },
        EntranceExamMedium: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        }

    },{
        timestamps:false,
        freezeTableName: true
    });



module.exports = studentInfo;
