import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/cuándo se muera.mp3'
conn.sendFile(m.chat, vn, 'cuándo se muera.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /cuando se muera|Cuando se muera/
handler.command = new RegExp
handler.register = true
export default handler

