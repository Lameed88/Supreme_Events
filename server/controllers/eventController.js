const { Event } = require("../models/event");
const Admin = require("../models/admin");
const User = require("../models/user");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
dotenv.config();

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const nodemailer = require("nodemailer");

function sendCheckInMail(data) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    let mailOptions = {
        from: process.env.NODE_MAILER_USER,
        to: data.email,
        subject: `${data.name} You've Checked In - SUPREME`,
        html: `Dear ${data.name},<br><br>
           <strong>Congratulations, you've successfully checked in!</strong><br><br>
           If you have any questions or concerns, please don't hesitate to contact us:<br>
           Olamide: moradeyor88@gmail.com<br>
          
           Best regards,<br>
           SUPREME EVENTS`,
    };

    transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
            console.log(err);
        } else {
            console.log("Checked In Email sent successfully");
        }
    });
}

const postEvent = async (req, res) => {
    const Name = req.body.name;
    const Venue = req.body.venue;
    const Date = req.body.date;
    const Time = req.body.time;
    const Desc = req.body.description;
    const Price = req.body.price;
    const Profile = req.body.profile;
    const Cover = req.body.cover;
    const Organizer = req.body.organizer;

    const adminId = req.body.admin_id;
    console.log("Admin moradeyor: ", adminId);

    const secret = JWT_SECRET;
    const payload = {
        email: Name,
    };

    const uploadedProfileResponse = await cloudinary.uploader.upload(Profile);
   const ProfileImg = uploadedProfileResponse.secure_url;
    const uploadedCoverResponse = await cloudinary.uploader.upload(Cover);
    const CoverImg = uploadedCoverResponse.secure_url;
			// console.log(Profile);
			// console.log(Cover);

    const token = await jwt.sign(payload, secret);

    const new_event = new Event({
        event_id: token,
        name: Name,
        venue: Venue,
        date: Date,
        time: Time,
        description: Desc,
        price: Price,
        profile: ProfileImg,
        cover: CoverImg,
        organizer: Organizer,
    });

    try {
        new_event.save((error, success) => {
            if (error) console.log(error);
            else console.log("Saved::New Event::created.");
        });
    } catch (err) {
        console.log(err);
    }

    Admin.updateOne(
        { admin_id: adminId },
        {
            $push: {
                eventCreated: {
                    event_id: token,
                    name: Name,
                    venue: Venue,
                    date: Date,
                    time: Time,
                    description: Desc,
                    price: Price,
                    profile:
                        Profile == null
                            ? "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg"
                            : Profile,
                    cover:
                        Cover == null
                            ? "https://eventplanning24x7.files.wordpress.com/2018/04/events.png"
                            : Cover,
                    organizer: Organizer,
                },
            },
        },
        function (err) {
            if (err) {
                console.log(err);
            }
        }
    );

    res.status(200).send({ msg: "event created", event_id: token });
};

const allEvents = async (req, res) => {
    Event.find({})
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(400).send({ msg: "Error fetching data", error: err });
        });
};

const particularEvent = async (req, res) => {
    const eventId = req.body.event_id;
    Event.find({ event_id: eventId })
        .then((data) => {
            res.status(200).send(data[0]);
        })
        .catch((err) => {
            res.status(400).send({ msg: "Error fetching event", error: err });
        });
};

const deleteEvent = async (req, res) => {
    const eventId = req.body.event_id;
    const adminId = req.body.admin_id;

    Event.deleteOne({ event_id: eventId }, function (err) {
        if (err) return handleError(err);
        else {
            console.log("Event deleted::events collection.");
        }
    });

    Admin.updateOne(
        { admin_id: adminId },
        { $pull: { eventCreated: { event_id: eventId } } },
        function (err) {
            if (err) return handleError(err);
            else {
                console.log("Event deleted::admin collection.");
            }
        }
    );
    res.status(200).send({ msg: "success" });
};

const checkin = async (req, res) => {
    const eventId = req.body.event_id;
    const userList = req.body.checkInList;
    console.log(userList)

    let eventName = "";

    Event.find({ event_id: eventId })
        .then((data) => {
            eventName = data[0].name;
            console.log(eventName);
        })
        .catch((err) => {
            res.status(400).send({ msg: "Error fetching event", error: err });
        });

    for (let i = 0; i < userList.length; i++) {
        Event.updateOne(
        { event_id: eventId, "participants.email": userList[i].email },
            { $set: { "participants.$.entry": true } },
            function (err) {
                if (err) return handleError(err);
                else {
                    console.log(`user :: checked-in`);
                }
            }
        );
    }

    for (let i = 0; i < userList.length; i++) {
        // User.find({ user_token: userList[i] })
        //     .then((data) => {
                const data_obj = {
                    name: userList[i].name,
                    // regNo: data[0].reg_number,
                    email: userList[i].email,
                    // number: data[0].contactNumber,
                    event: eventName,
                };

                sendCheckInMail(data_obj);
            // })
            // .catch((err) => {
            //     // console.log({ msg: "Error fetching event", error: err });
            // });
    }

    res.status(200).send({ msg: "success" });
};

module.exports = {
    postEvent,
    allEvents,
    particularEvent,
    deleteEvent,
    checkin,
};
