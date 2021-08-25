const baseUrl = 'https://api.line.me/v2/bot'

/**
 * This endpoint is for sending and receiving large amounts of data in the LINE platform for Messaging API
 */
const baseDataUrl = 'https://api-data.line.me/v2/bot'

/**
 * Define Endpoint URL
 * group by documentation's content
 * link docs : https://developers.line.biz/en/reference/messaging-api/
 */
var EndpointUrl = {
  message: {
    reply: `${baseUrl}/message/reply`,
    push: `${baseUrl}/message/push`,
    multicast: `${baseUrl}/message/multicast`,
    broadcast: `${baseUrl}/message/broadcast`,
    getContent: function(messageId) {
      return `${baseDataUrl}/message/${messageId}/content`
    },
    getTargetLimit: `${baseUrl}/message/quota`,
    getTotalUsage: `${baseUrl}/message/quota/consumption`,
    getNumberSentReplyMsg: function(date) {
      return `${baseUrl}/message/delivery/reply?date=${date}`
    },
    getNumberSentPushMsg: function(date) {
      return `${baseUrl}/message/delivery/push?date=${date}`
    },
    getNumberSentMulticastMsg: function(date) {
      return `${baseUrl}/message/delivery/multicast?date=${date}`
    },
    getNumberSentBroadcastMsg: function(date) {
      return `${baseUrl}/message/delivery/broadcast?date=${date}`
    }
  },
  users: {
    profile: function(userId) {
      return `${baseUrl}/profile/${userId}`
    }
  },
  bot: {
    info: `${baseUrl}/info`
  },
  group: {
    summary: function(groupId) {
      return `${baseUrl}/group/${groupId}/summary`
    },
    membersCount: function(groupId) {
      return `${baseUrl}/group/${groupId}/members/count`
    },
    membersUserId: function(groupId) {
      return `${baseUrl}/group/${groupId}/members/ids`
    },
    memberProfile: function(groupId, userId) {
      return `${baseUrl}/group/${groupId}/member/${userId}`
    },
    leave: function(groupId) {
      return `${baseUrl}/group/${groupId}/leave`
    }
  },
  room: {
    membersCount: function(roomId) {
      return `${baseUrl}/room/${roomId}/members/count`
    },
    membersUserId: function(roomId) {
      return `${baseUrl}/room/${roomId}/members/ids`
    },
    memberProfile: function(roomId, userId) {
      return `${baseUrl}/room/${roomId}/member/${userId}`
    },
    leave: function(roomId) {
      return `${baseUrl}/room/${roomId}/leave`
    }
  },
  insight: {
    getTotalMsgSent: function(date) {
      return `${baseUrl}/insight/message/delivery?date=${date}`
    },
    getTotalFollowers: function(date) {
      return `${baseUrl}/insight/followers?date=${date}`
    }
  },
  account: {
    linkToken: function(userId) {
      return `${baseUrl}/user/${userId}/linkToken`
    }
  },
  richmenu: {
    create: `${baseUrl}/richmenu`,
    uploadImage: function(richMenuId) {
      return `${baseDataUrl}/richmenu/${richMenuId}/content`
    },
    downloadImage: function(richMenuId) {
      return `${baseDataUrl}/richmenu/${richMenuId}/content`
    },
    list: `${baseUrl}/richmenu`,
    get: function(richMenuId) {
      return `${baseUrl}/richmenu/${richMenuId}`
    },
    delete: function(richMenuId) {
      return `${baseUrl}/richmenu/${richMenuId}`
    },
    setDefault: function(richMenuId) {
      return `${baseUrl}/user/all/richmenu/${richMenuId}`
    },
    getDefaultId: `${baseUrl}/user/all/richmenu`,
    cancelDefaultId: `${baseUrl}/user/all/richmenu`,
    linkToUser: function(richMenuId, userId) {
      return `${baseUrl}/user/${userId}/richmenu/${richMenuId}`
    },
    linkToMultipleUser: `${baseUrl}/richmenu/bulk/link`,
    createAlias: `${baseUrl}/richmenu/alias`,
    deleteAlias: function(richMenuAliasId) {
      return `${baseUrl}/richmenu/alias/${richMenuAliasId}`
    },
    updateAlias: function(richMenuAliasId) {
      return `${baseUrl}/richmenu/alias/${richMenuAliasId}`
    },
    getAlias: function(richMenuAliasId) {
      return `${baseUrl}/richmenu/alias/${richMenuAliasId}`
    },
    getListAlias: `${baseUrl}/richmenu/alias/list`,
    getIdFromUser: function(userId) {
      return `${baseUrl}/user/${userId}/richmenu`
    },
    unlinkFromUser: function(userId) {
      return `${baseUrl}/user/${userId}/richmenu`
    },
    unlinkFromMultipleUser: `${baseUrl}/richmenu/bulk/unlink`
  }
}
