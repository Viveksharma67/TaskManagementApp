import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "Pending",
        enum: ['Pending', 'Running', 'Completed', 'Failed']
    },
    dueDate: {
        type: Date,       // date type
        required: false   // optional
    }
}, { timestamps: true });

const TaskModel = mongoose.model('Task', TaskSchema, 'tasks');
export default TaskModel;
