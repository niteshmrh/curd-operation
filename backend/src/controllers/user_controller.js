const { user_ser } = require("../services/index");

const createUserController = async (req, res) => {
  try {
    console.log("controller user!!!!!!!!!!!!!!!!");
    const userControllerData = await user_ser.createUserServices(req.body);
    return res.status(201).json({
      data: userControllerData,
      success: true,
      message: "User Create Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "User is not created",
      err: error,
    });
  }
};

const getAllUserController = async (req, res) => {
  try {
    console.log("get All controller User!!!!!!!!!!!!!!!!");
    const getAllUserControllerData = await user_ser.getAllUserServices();
    return res.status(201).json({
      data: getAllUserControllerData,
      success: true,
      message: "All User fetched Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "user is not fetched",
      err: error,
    });
  }
};

const getUserController = async (req, res) => {
  try {
    console.log("get All controller User!!!!!!!!!!!!!!!!", req.params.id);
    const getUserControllerData = await user_ser.getUserServices(req.params.id);
    return res.status(201).json({
      data: getUserControllerData,
      success: true,
      message: "User fetched Successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "User is not fetched",
      err: error,
    });
  }
};

const updateUserController = async (req, res) => {
  try {
    console.log("controller Upadte User !!!!!!!!!!!!!!!!", req.query.id);
    console.log("----------------", req.body);
    console.log("-------id", req.query.id);

    const updateUserControllerData = await user_ser.updateUserServices(
      req.query.id,
      req.body
    );
    return res.status(201).json({
      data: updateUserControllerData,
      success: true,
      message: `User Update Successfully`,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "User is not Updated",
      err: error,
    });
  }
};

const deleteUserController = async (req, res) => {
  try {
    console.log("user delete controller !!!!!!!!!!!!", req.query.id);
    const deleteUserControllerData = await user_ser.deleteUserServices(
      req.query.id
    );
    return res.status(201).json({
      data: deleteUserControllerData,
      success: true,
      message: `User Deleted Successfully`,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "User is not Deleted",
      err: error,
    });
  }
};

module.exports = {
  createUserController,
  getAllUserController,
  updateUserController,
  deleteUserController,
  getUserController,
};
