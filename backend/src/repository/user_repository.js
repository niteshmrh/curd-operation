const { user } = require("../models/index");

const createUserRepo = async (data) => {
  try {
    console.log("create user respositroy user!!!!!!!!!!!!!!!!");
    const userRepoData = await user.create(data);
    return userRepoData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllUserRepo = async () => {
  try {
    console.log("Get All respositroy client !!!!!!!!!!!!!!!!");
    const getAllUserRepoData = await user.findAll();
    return getAllUserRepoData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUserRepo = async (id) => {
  try {
    console.log("Get Particular respositroy of user !!!!!!!!!!!!!!!!", id);
    const getUserRepoData = await user.findOne({
      where: { id: id },
    });
    return getUserRepoData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUserRepo = async (id, data) => {
  try {
    console.log("update respositroy user!!!!!!!!!!!!!!!!", id);
    console.log("update respositroy user!!!!!!!!!!!!!!!!", data);

    const updateUserRepoData = await user.update(data, {
      where: { id: id },
    });
    return updateUserRepoData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteUserRepo = async (id) => {
  try {
    console.log("delete Repository user !!!!!!!!!!!", id);
    const deleteUserRepoData = await user.destroy({
      where: { id: id },
    });
    return deleteUserRepoData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createUserRepo,
  getAllUserRepo,
  updateUserRepo,
  deleteUserRepo,
  getUserRepo,
};
