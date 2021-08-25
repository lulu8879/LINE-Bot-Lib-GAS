var Groups = {
  /**
   * method for get summary of group where the bot is a member
   * @param {string} groupId
   * @return {object}
   */
  getSummary(groupId) {
    return getCallback_(EndpointUrl.group.summary(groupId))
  },

  /**
   * method for get count of members in a group where the bot is a member
   * @param {string} groupId
   * @return {object}
   */
  getMembersCount(groupId) {
    return getCallback_(EndpointUrl.group.membersCount(groupId))
  },

  /**
   * method for get userId of members in a group where the bot is a member
   * @param {string} groupId
   * @return {object}
   */
  getMembersUserId(groupId) {
    return getCallback_(EndpointUrl.group.membersUserId(groupId))
  },

  /**
   * method for get profile of member in a group where the bot is a member
   * @param {string} groupId
   * @param {string} userId
   * @return {object}
   */
  getMemberProfile(groupId, userId) {
    return getCallback_(EndpointUrl.group.memberProfile(groupId, userId))
  },

  /**
   * method for bot to leave a group
   * @param {string} groupId
   */
  leave(groupId) {
    postCallback_(EndpointUrl.group.leave(groupId))
  }
}

Line.prototype.group = Groups