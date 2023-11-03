const { user_repo } = require("../repository/index");

// create user
const createUserServices = async (data) => {
  try {
    console.log("services user!!!!!!!!!!!!!!!!");
    const userServicesData = await user_repo.createUserRepo(data);
    return userServicesData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// get all the data from the database of the user
const getAllUserServices = async () => {
  try {
    console.log("get all services user!!!!!!!!!!!!!!!!");
    const getAllUserServicesData = await user_repo.getAllUserRepo();
    return getAllUserServicesData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// get particular user from the database
const getUserServices = async (id) => {
  try {
    console.log("get services user!!!!!!!!!!!!!!!!", id);
    const getUserServicesData = await user_repo.getUserRepo(id);
    return getUserServicesData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// update the user data
const updateUserServices = async (id, data) => {
  try {
    console.log("update services user!!!!!!!!!!!!!!!!", id);
    console.log("update services user!!!!!!!!!!!!!!!!", data);

    const updateUserServicesData = await user_repo.updateUserRepo(id, data);
    return updateUserServicesData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteUserServices = async (id) => {
  try {
    console.log("delete services user!!!!!!!!!!!!!!!!", id);
    const deleteUserServicesData = await user_repo.deleteUserRepo(id);
    return deleteUserServicesData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createUserServices,
  getAllUserServices,
  updateUserServices,
  deleteUserServices,
  getUserServices,
};
