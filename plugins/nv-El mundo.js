import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/El mundo.mp3'
conn.sendFile(m.chat, vn, 'El mundo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /El mundo|el mundo/
handler.command = new RegExp
handler.register = true
export default handler

