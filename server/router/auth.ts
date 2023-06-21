import express, { Request, Response } from "express";
import User from "../models/userSchema";
import bcrypt from "bcrypt";


const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

// async-await

router.post("/register", async (req, res) => {
  const { name, age, email, phone, password, cpassword } = req.body;

  if (!name || !age || !email || !phone || !password || !cpassword) {
    res.status(422).json("Please fill all the details");
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist)
      return res.status(400).json({ error: "Email already exists" });
    else if (password !== cpassword)
      return res.status(422).json({ error: "passwords are not matching" });
    else {
      const user = new User({ name, age, email, phone, password, cpassword });
      await user.save();
      return res.status(201).json({ message: "User Registered successfully" });
    }

    // const userRegistered = await user.save();

    // if (userRegistered)
    //     return res.status(201).json({ message: "User Registered successfully" });
    // else
    //     return res.status(500).json({ error: "Failed to register" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Please fill all the details" });
  }

  try {
    let token;
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin?.password);

      token = await userLogin.generateAuthToken();
      console.log(token)

      res.cookie("jwtoken", token, ({
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
      }))

      if (!isMatch) return res.status(400).json({ error: "Invalid credentials pass" });
      else return res.json({ message: "Logged in successfully" });
    } else return res.status(400).json({ message: "Invalid credentials" });
  } catch (err) {
    console.log(err);
  }
});

// promises

// router.post("/register", (req, res) => {
//   const { name, age, email } = req.body;

//   if (!name || !age || !email) {
//     res.status(422).json("Please fill all the details");
//   }

//   User.findOne({ email: email }).then((userExist) => {
//     if (userExist)
//       return res.status(422).json({ error: "Email already exists" });

//     const user = new User({ name, age, email });

//     user
//       .save()
//       .then(() => {
//         res.status(201).json({ message: "User Registered successfully" });
//       })
//       .catch((err) => {
//         res.status(500).json({ error: "Failed to register" });
//       });
//   }).catch(err => console.log(err))
// });

export default router;









// {
//   "name": "krishna",
//   "age": 20,
//   "phone" : 7373737377,
//   "email": "krishna@gmail.com",
//   "password": "hellooo",
//   "cpassword": "hellooo"
// }