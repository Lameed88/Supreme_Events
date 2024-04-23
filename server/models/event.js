const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        event_id: {
            type: String,
            requird: true,
        },
        name: {
            type: String,
        },
        venue: {
            type: String,
        },
        date: {
            type: String,
        },
        time: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
        },
        cover: {
            type: String,
            default:
                "https://www.elementalproduction.com/wp-content/uploads/2021/05/corporate-events.jpg",
        },
        profile: {
            type: String,
            default:
                "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
        },
        organizer: {
            type: String,
        },
        participants: [],
    },
    { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = {
    Event,
    eventSchema,
};
