# **Simple Library/SDK LINE Bot for Google Apps Script**

Try to create simple lib/sdk LINE bot for Google Apps Script
Feel free to use

## Script ID
* New Editor

`1sQ-LN2bvCy1jJlDpXYEt1hxe06RzMKxwYInZppwPRQ4CWsIBMg7wlphn`
* Legacy Editor

Not Available

## How to use
```
const CHANNEL_ACCESS_TOKEN = "YOUR_TOKEN"

const line = new Linebotlibgas.Line(CHANNEL_ACCESS_TOKEN)
line.message.reply(event.replyToken, {"type": "text", "text": "Text here"})
```

## Example Script Bot
* https://github.com/lulu8879/Example-Line-Bot-GAS/

## Available Method
This lib grouping commands reference by [LINE Messaging API reference](https://developers.line.biz/en/reference/messaging-api/)

### 1. Messages

```line.message.(method below)```
* reply(replyToken, messages)
* push(to, messages)
* multicast(to, messages)
* broadcast(messages)
* getContent(messageId)


### 2. Users

```line.user.(method below)```
* getProfile(userId)
* issueLinkToken(userId)


### 3. Bot

```line.bot.(method below)```
* getInfo()
* getTargetLimit()
* getTotalUsage()
* getNumberSentReplyMsg(date)
* getNumberSentPushMsg(date)
* getNumberSentMulticastMsg(date)
* getNumberSentBroadcastMsg(date)
* getTotalMsgSent(date)
* getTotalFollowers(date)
* createRichMenu(richMenuData)
* uploadRichMenuImage(richMenuId, richMenuImageData, contentType="png")
* downloadRichMenuImage(richMenuId)
* getRichMenuList()
* getRichMenu(richMenuId)
* deleteRichMenu(richMenuId)
* setDefaultRichMenu(richMenuId)
* getDefaultRichMenu()
* cancelDefaultRichMenu()
* linkRichMenuToUser(richMenuId, userId)
* linkRichMenuToMultipleUser(richMenuId, userId)
* createRichMenuAlias(richMenuData)
* deleteRichMenuAlias(richMenuAliasId)
* updateRichMenuAlias(richMenuAliasId)
* getRichMenuAlias(richMenuAliasId)
* getListRichMenuAlias()
* getRichMenuFromUser(userId)
* deleteRichMenuFromUser(userId)
* deleteRichMenuFromMultipleUser()


### 4. Groups

```line.group.(method below)```
* getSummary(groupId)
* getMembersCount(groupId)
* getMembersUserId(groupId)
* getMemberProfile(groupId, userId)
* leave(groupId)


### 5. Room

```line.room.(method below)```
* getMembersCount(roomId)
* getMembersUserId(roomId)
* getMemberProfile(roomId, userId)
* leave(roomId)


## Source and Reference
* https://developers.line.biz/en/reference/messaging-api/
* https://github.com/line/line-bot-sdk-nodejs/
* https://github.com/kobanyan/line-bot-sdk-gas/

## Note
* Not all method above is tested, DWYOR!
* Feel free to use, fork, open issues, and/or pull request
* Always choose latest version when add this library
