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
    description: {
        type: String,
        required: [true, 'Workout description is required'],
    },
    image: {
        type: String,
        required: [false, 'Workout image is not required'],
    },
    time: {
        type: Number,
        required: [true, 'Workout time is required'],
    },
    date: {
        type: Date,
        required: [true, 'Workout date is required'],
    },
    weight: {
        type: Number,
        required: [true, 'Workout weight is not required'],
    },
    reps: {
        type: Number,
        required: [true, 'Workout reps is not required'],
    },
});

const Workout = model('Workout', workoutSchema);
module.exports = Workout;