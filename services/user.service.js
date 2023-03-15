const httpStatus = require('http-status');
const { User } = require('../models');
const { News } = require('../models');
const { Hotspots } = require('../models');
const { Events } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  return User.create(userBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Search user by username
 * @param {String} username
 * @returns {Promise<User>}
 */
const searchUser = async (username, user) => {
  id = user.id
  return User.find({ username: {$regex: username, $options: 'i'}});
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

/**
 * Search user by username
 * @param {String} username
 * @returns {Promise<User>}
 */
const search = async (text) => {
  const user = await User.find({ username: {$regex: text, $options: 'i'}});
  if (!user) {
    user = "nothing found";
  }
  const news = await News.find({ title: {$regex: text, $options: 'i'}});
  if (!news) {
    news = "nothing found";
  }
  const hotspot = await Hotspots.find({ title: {$regex: text, $options: 'i'}});
  if (!hotspot) {
    hotspot = "nothing found";
  }
  const event = await Events.find({ title: {$regex: text, $options: 'i'}});
  if (!event) {
    event = "nothing found";
  }
  const search = {user, news, hotspot, event};
  console.log(search)
  return search;
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
  searchUser,
  search
};
