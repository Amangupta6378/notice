const UserSchema = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    //get data
    const { name, password, email, role, batch } = req.body;

    // Check if user is already exist.
    const existingUser = await UserSchema.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    //Secure password

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Error in hashing password.",
      });
    }

    // Create Entry for user
    const user = await UserSchema.create({
      name,
      email,
      password: hashedPassword,
      role: "student",
      batch,
    });
    return res.status(200).json({
      success: true,
      message: "User Created Successfully.",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "User can not registered please try again later.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    //get data
    const { email, password } = req.body;

    // Validation on email and password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password.",
      });
    }

    // Check for register user
    let user = await UserSchema.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };
    //Verify password and generate jwt token
    if (await bcrypt.compare(password, user.password)) {
      //password match
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      user = user.toObject();
      user.token = token;
      user.password = undefined;

      const option = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, option).status(200).json({
        success: true,
        token,
        user,
        message: "User logged in successfully.",
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "Password incorrect.",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "User can't be logged in.",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await UserSchema.find();
    res.status(200).json({
      success: true,
      message: "User get successfully.",
      user,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "problem in get data.",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserSchema.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    const users = await UserSchema.find();
    res.status(200).json({
      success: true,
      message: "user deleted successfully",
      users,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
