
// DEPENDENCIES
import * as mongoose from 'mongoose';
import { IUserModel } from '../json-formats/mongo-interfaces/user-model.mongo';


// defines the user schema model that will be the base format 
// for the user collection
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'first name is required'],
        minlength: [3, 'first name must be at least 3 characters long'],
        maxlength: [255, 'first name cannot be longer than 255'],
    },
    images: {
    }

}, { timestamps: true });

// adds the schema as a collection
mongoose.model('user', UserSchema);