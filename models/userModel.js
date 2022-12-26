import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please Enter a Valid Email"],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 6);
});

userSchema.methods.generateJwtToken = function () {
  return jwt.sign({ id: this._id }, "7f6c00efe142e37be3386fc2ff33db25");
};

// password comparison
userSchema.methods.passwordComparison = async function (password) {
  console.log(password, this.password);
  const validPass = await bcrypt.compare(password, this.password);

  if (!validPass) return false;
  else {
    return true;
  }
};
export default mongoose.model("user", userSchema);
