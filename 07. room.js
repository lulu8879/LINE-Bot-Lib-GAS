var Room = {
  /**
   * method for get count of members in a room where the bot is a member
   * @param {string} roomId
   * @return {object}
   */
  getMembersCount(roomId) {
    return getCallback_(EndpointUrl.room.membersCount(roomId))
  },

  /**
   * method for get userId of members in a room where the bot is a member
   * @param {string} roomId
   * @return {object}
   */
  getMembersUserId(roomId) {
    return getCallback_(EndpointUrl.room.membersUserId(roomId))
  },

  /**
   * method for get profile of member in a room where the bot is a member
   * @param {string} roomId
   * @param {string} userId
   * @return {object}
   */
  getMemberProfile(roomId, userId) {
    return getCallback_(EndpointUrl.room.memberProfile(roomId, userId))
  },

  /**
   * method for bot to leave a room
   * @param {string} roomId
   */
  leave(roomId) {
    postCallback_(EndpointUrl.room.leave(roomId))
  }
}

Line.prototype.room = Room