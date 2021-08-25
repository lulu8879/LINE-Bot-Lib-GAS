var Users = {
  /**
   * method for get user profile by userId
   * @param {string} userId [userId of user LINE]
   * @return {object}
   */
  getProfile(userId) {
    return getCallback_(EndpointUrl.users.profile(userId))
  },

  /**
   * method for issues a link token used for the account link feature
   * @param {string} userId [userId of user LINE]
   */
  issueLinkToken(userId) {
    postCallback_(EndpointUrl.account.linkToken(userId))
  }
}

Line.prototype.user = Users