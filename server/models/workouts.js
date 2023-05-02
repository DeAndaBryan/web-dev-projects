const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const workoutSchema = new Schema({
    id: {
        type: String,
        required: [true, 'Workout id is required'],
    },
    name: {
        type: String,
        required: [true, 'Workout name is required'],
    },
    type: {
        type: String,
        required: [true, 'Workout type is required'],
    },
    location: {
        type: String,
        required: [true, 'Workout location is required'],
    },
    comment: {
        type: String,
        required: [false, 'Workout description is required'],
    },
    image: {
        type: String,
        required: [false, 'Workout image is not required'],
    },
    time: {
        type: Number,
        required: [false, 'Workout time is required'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    weight: {
        type: Number,
        required: [false, 'Workout weight is not required'],
    },
    reps: {
        type: Number,
        required: [false, 'Workout reps is not required'],
    },
});

const Workout = model('Workout', workoutSchema);
module.exports = Workout;