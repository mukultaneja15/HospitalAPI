const DOCTOR = require('../../../models/doctor');
const jwt = require('jsonwebtoken');
const { findOne } = require('../../../models/doctor');

// create doctor in db and register
module.exports.createDoctor = async function (req, res) {
    if (req.body.password != req.body.confirm_password) {
        console.log('passwords did not match!');
        return res.json(422, {
            status: 422,
            message: 'passwords did not matched'
        });
    }

    try {

        let doctor = await DOCTOR.findOne({ username: req.body.username });

        if (!doctor) {
            let doctor1 = await DOCTOR.create(req.body);
            console.log('Doctor Registered Successfully!');
            return res.json(200, {
                status: 200,
                message: 'Doctor Registered Successfully!',
                data:{
                    doctor: {
                        _id: doctor1.id,
                        name: doctor1.name,
                        username: doctor1.username
                    }
                }
                
            })
        } else {
            console.log('Doctor already exists!')
            return res.json(409, {
                status: 409,
                message: 'Doctor already exists!',
                data: {
                    doctor: {
                        _id: doctor.id,
                        name: doctor.name,
                        username: doctor.username
                    }
                }
            })
        }

    } catch (err) {
        console.log('Error', err);
        return res.json(500, {
            status: 500,
            message: 'Internal Server Error'
        })
    }

}

// loging in doctor and creating token for him
module.exports.loginDoctor = async function(req, res) {

    try {
        let doctor = await DOCTOR.findOne({ username: req.body.username });

        if (!doctor || doctor.password != req.body.password) {
            return res.json(422, {
                message: 'Invalid username or password'
            });
        }
        
        return res.json(200, {
            message: 'Login Successful and here is your token',
            data: {
                jwtToken: jwt.sign(doctor.toJSON(), process.env.JWT_SECRET_KEY, { expiresIn: '200000' })
            } 
        });

    } catch (err) {
        console.log('Error', err);
        return res.json(500, {
            status: 500,
            message: "Internal Server Error"
        });
    }

}