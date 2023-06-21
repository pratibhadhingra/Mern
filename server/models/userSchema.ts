import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken'

import dotenv from 'dotenv';

dotenv.config({ path: './config.env'});

const secret: any = process.env.SECRETKEY


const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    required: true,
},
// work: {
    //     type: String,
    //     required: true
    // },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    token: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});


// generating token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, secret)

        this.token = this.token.concat({token: token})
        await this.save();

        return token;
    } catch(err) {
        console.log(err)
    }
}

const User = mongoose.model("USER", userSchema);

export default User;

// hashing the passwords
