const User = require("../models/User");

const verifyPayment = async (req, res) => {
  try {

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.role = "paid";
    user.paymentStatus = true;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Payment Successful",
      user,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  verifyPayment,
};