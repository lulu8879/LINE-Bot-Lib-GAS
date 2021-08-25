var Line = class {
  constructor(channelAccessToken) {
    CHANNEL_ACCESS_TOKEN = channelAccessToken
  }
}

/**
 * method callback for send request post method
 * @param {string} endpointUrl [url endpoint]
 * @param {object} payloadData [data payload]
 */
function postCallback_(endpointUrl, payloadData) {
  const data = {
    "method": "post",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${CHANNEL_ACCESS_TOKEN}`
    },
    "payload": JSON.stringify(payloadData)
  }

  /**
   * some post request didn't need payload
   * remove if payloadData is undefined or null
   */
  if (data.payload == null) {
    delete data.payload
  }
  UrlFetchApp.fetch(endpointUrl, data)
}

/**
 * method callback for send request get method
 * @param {string} endpointUrl [url endpoint]
 * @return {string} JSON
 */
function getCallback_(endpointUrl) {
  const data = {
    "method": "get",
    "headers": {
      "Authorization": `Bearer ${CHANNEL_ACCESS_TOKEN}`
    }
  }
  return JSON.parse(UrlFetchApp.fetch(endpointUrl, data).getContentText())
}

/**
 * method callback for send request delete method
 * @param {string} endpointUrl [url endpoint]
 * @return {string} JSON
 */
function deleteCallback_(endpointUrl) {
  const data = {
    "method": "delete",
    "headers": {
      "Authorization": `Bearer ${CHANNEL_ACCESS_TOKEN}`
    }
  }
  return JSON.parse(UrlFetchApp.fetch(endpointUrl, data))
}

/**
 * method callback for send request post method
 * and send blob of images data
 * @param {string} endpointUrl [url endpoint]
 * @param {object} payloadData [data payload]
 * @param {string} contentType [jpeg or png (default png)]
 */
function postBlobImageCallback_(endpointUrl, payloadData, contentType="png") {
  const contentTypeImg = (contentType == "png") ? "png" : "jpeg"
  const data = {
    "method": "post",
    "headers": {
      "Content-Type": `image/${contentTypeImg}`,
      "Authorization": `Bearer ${CHANNEL_ACCESS_TOKEN}`
    },
    "payload": payloadData
  }
  UrlFetchApp.fetch(endpointUrl, data)
}

/**
 * method callback for send request get method
 * and retrieve blob data (ex: images)
 * @param {string} endpointUrl [url endpoint]
 * @return {blob} blob data
 */
function getBlobCallback_(endpointUrl) {
  const data = {
    "method": "get",
    "headers": {
      "Authorization": `Bearer ${CHANNEL_ACCESS_TOKEN}`
    }
  }
  return UrlFetchApp.fetch(endpointUrl, data).getBlob()
}

var CHANNEL_ACCESS_TOKEN