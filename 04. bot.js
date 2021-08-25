var Bot = {
  /**
   * method for get info bot
   * @param {string} userId [userId of user LINE]
   * @return {object}
   */
  getInfo() {
    return getCallback_(EndpointUrl.bot.info)
  },

  /**
   * method for get target limit for additional messages in the current month
   * @return {object}
   */
  getTargetLimit() {
    return getCallback_(EndpointUrl.message.getTargetLimit)
  },

  /**
   * method for get number of messages sent in the current month
   * @return {object}
   */
  getTotalUsage() {
    return getCallback_(EndpointUrl.message.getTotalUsage)
  },

  /**
   * method for get number of messages sent with the /bot/message/reply endpoint
   * @param {string} date [format date: yyyyMMdd]
   * @return {object}
   */
  getNumberSentReplyMsg(date) {
    return getCallback_(EndpointUrl.message.getNumberSentReplyMsg(date))
  },

  /**
   * method for get number of messages sent with the /bot/message/push endpoint
   * @param {string} date [format date: yyyyMMdd]
   * @return {object}
   */
  getNumberSentPushMsg(date) {
    return getCallback_(EndpointUrl.message.getNumberSentPushMsg(date))
  },

  /**
   * method for get number of messages sent with the /bot/message/multicast endpoint
   * @param {string} date [format date: yyyyMMdd]
   * @return {object}
   */
  getNumberSentMulticastMsg(date) {
    return getCallback_(EndpointUrl.message.getNumberSentMulticastMsg(date))
  },

  /**
   * method for get number of messages sent with the /bot/message/broadcast endpoint
   * @param {string} date [format date: yyyyMMdd]
   * @return {object}
   */
  getNumberSentBroadcastMsg(date) {
    return getCallback_(EndpointUrl.message.getNumberSentBroadcastMsg(date))
  },

  /**
   * method for get number of messages sent from LINE Official Account on a specified day
   * @param {string} date [format date: yyyyMMdd]
   * @return {object}
   */
  getTotalMsgSent(date) {
    return getCallback_(EndpointUrl.insight.getTotalMsgSent(date))
  },

  /**
   * method for get number of users who have added
   * the LINE Official Account on or before a specified date
   * @param {string} date [format date: yyyyMMdd]
   * @return {object}
   */
  getTotalFollowers(date) {
    return getCallback_(EndpointUrl.insight.getTotalFollowers(date))
  },

  /* ==== Rich Menu Features ==== */
  /**
   * method for create rich menu for LINE Official Account
   * @param {object} richMenuData
   */
  createRichMenu(richMenuData) {
    postCallback_(EndpointUrl.richmenu.create, richMenuData)
  },

  /**
   * method for upload and set rich menu image for LINE Official Account
   * @param {object} richMenuId
   * @param {object} richMenuImageData
   * @param {string} contentType [png (default) or jpeg]
   */
  uploadRichMenuImage(richMenuId, richMenuImageData, contentType="png") {
    postBlobImageCallback_(EndpointUrl.richmenu.uploadImage(richMenuId), richMenuImageData, contentType)
  },

  /**
   * method for download and get rich menu image for LINE Official Account
   * @param {object} richMenuId
   * @return {blob} blob data
   */
  downloadRichMenuImage(richMenuId) {
    return getBlobCallback_(EndpointUrl.richmenu.downloadImage(richMenuId))
  },

  /**
   * method for get a list of the rich menu response object of
   * all rich menus created by create a rich menu
   * @return {object}
   */
  getRichMenuList() {
    return getCallback_(EndpointUrl.richmenu.list)
  },

  /**
   * method for get a rich menu via a rich menu ID
   * @param {string} richMenuId
   * @return {object}
   */
  getRichMenu(richMenuId) {
    return getCallback_(EndpointUrl.richmenu.get(richMenuId))
  },

  /**
   * method for delete a rich menu via a rich menu ID
   * @param {string} richMenuId
   * @return {object}
   */
  deleteRichMenu(richMenuId) {
    return deleteCallback_(EndpointUrl.richmenu.delete(richMenuId))
  },

  /**
   * method for sets the default rich menu
   * @param {string} richMenuId
   */
  setDefaultRichMenu(richMenuId) {
    return postCallback_(EndpointUrl.richmenu.setDefault(richMenuId))
  },

  /**
   * method for gets the ID of the default rich menu set with the Messaging API
   * @return {object}
   */
  getDefaultRichMenu() {
    return getCallback_(EndpointUrl.richmenu.getDefaultId)
  },

  /**
   * method for cancels the default rich menu set with the Messaging API
   * @return {object}
   */
  cancelDefaultRichMenu() {
    return deleteCallback_(EndpointUrl.richmenu.cancelDefaultId)
  },

  /**
   * method for links a rich menu to a user
   * @param {string} richMenuId
   * @param {string} userId
   */
  linkRichMenuToUser(richMenuId, userId) {
    postCallback_(EndpointUrl.richmenu.linkToUser(richMenuId, userId))
  },

  /**
   * method for links a rich menu to a user
   * @param {string} richMenuId
   * @param {string} userId
   */
  linkRichMenuToMultipleUser(richMenuId, userId) {
    postCallback_(EndpointUrl.richmenu.linkToUser(richMenuId, userId))
  },

  /**
   * method for creates a rich menu alias
   * @param {array} richMenuData
   */
  createRichMenuAlias(richMenuData) {
    postCallback_(EndpointUrl.richmenu.createAlias, richMenuData)
  },

  /**
   * method for delete a rich menu alias
   * @param {string} richMenuAliasId
   * @return {object}
   */
  deleteRichMenuAlias(richMenuAliasId) {
    return deleteCallback_(EndpointUrl.richmenu.deleteAlias(richMenuAliasId))
  },

  /**
   * method for update a rich menu alias
   * @param {string} richMenuAliasId
   * @return {object}
   */
  updateRichMenuAlias(richMenuAliasId) {
    postCallback_(EndpointUrl.richmenu.updateAlias(richMenuAliasId))
  },

  /**
   * method for get rich menu alias ID to get information of the rich menu alias.
   * @param {string} richMenuAliasId
   * @return {object}
   */
  getRichMenuAlias(richMenuAliasId) {
    return getCallback_(EndpointUrl.richmenu.getAlias(richMenuAliasId))
  },

  /**
   * method for gets the rich menu alias list
   * @return {object}
   */
  getListRichMenuAlias() {
    return getCallback_(EndpointUrl.richmenu.getListAlias)
  },

  /**
   * method for gets the ID of the rich menu linked to a user
   * @param {string} userId
   * @return {object}
   */
  getRichMenuFromUser(userId) {
    return getCallback_(EndpointUrl.richmenu.getIdFromUser(userId))
  },

  /**
   * method for removes the per-user rich menu linked to a specified user
   * @param {string} userId
   * @return {object}
   */
  deleteRichMenuFromUser(userId) {
    return deleteCallback_(EndpointUrl.richmenu.unlinkFromUser(userId))
  },

  /**
   * method for unlinks rich menus from multiple users.
   * @return {object}
   */
  deleteRichMenuFromMultipleUser() {
    return deleteCallback_(EndpointUrl.richmenu.unlinkFromMultipleUser)
  }
}

Line.prototype.bot = Bot