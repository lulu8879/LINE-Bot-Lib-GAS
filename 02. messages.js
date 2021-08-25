var Messages = {
  /**
   * method for reply messages object
   * @param {string} replyToken [reply token received from webhook]
   * @param {array} messages [array of messages, max: 5]
   */
  reply(replyToken, messages) {
    const messageData = {
      "replyToken": replyToken,
      "messages": Array.isArray(messages) ? messages : [messages]
    }
    postCallback_(EndpointUrl.message.reply, messageData)
  },

  /**
   * method for push messages to user, group, or room at any time
   * @param {array} to [array of userId, groupId, or roomId LINE target]
   * @param {array} messages [array of messages, max: 5]
   */
  push(to, messages) {
    const messageData = {
      "to": to,
      "messages": Array.isArray(messages) ? messages : [messages]
    }
    postCallback_(EndpointUrl.message.push, messageData)
  },

  /**
   * method for send messages to multiple users at any time
   * @param {array} to [array of userId LINE target]
   * @param {array} messages [array of messages, max: 5]
   */
  multicast(to, messages) {
    // const toObj = Array.isArray(to) ? to : [to]
    const messageData = {
      "to": Array.isArray(to) ? to : [to],
      "messages": Array.isArray(messages) ? messages : [messages]
    }
    postCallback_(EndpointUrl.message.multicast, messageData)
  },

  /**
   * method for send push messages to multiple users at any time
   * @param {array} messages [array of messages, max: 5]
   */
  broadcast(messages) {
    const messageData = {
      "messages": Array.isArray(messages) ? messages : [messages]
    }
    postCallback_(EndpointUrl.message.broadcast, messageData)
  },

  /**
   * method for get content message by messageId
   * @param {string} messageId [messageId of message's content]
   * @return {blob}
   */
  getContent(messageId) {
    return getBlobCallback_(EndpointUrl.message.getContent(messageId))
  }
}

Line.prototype.message = Messages