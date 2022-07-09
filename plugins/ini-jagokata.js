import fetch from 'node-fetch'
import quotes from '../lib/jagokata.js'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'kataquotes') {
let pe = await fetch(`https://programming-quotes-api.herokuapp.com/Quotes/random`)
let xc = await pe.json()
  await conn.sendButton(m.chat, `*Quote:*
${xc.result.en}

*Author:*
${x.author}`, wm, null, [
                ['Next', `${usedPrefix + command}`],
                ['Translate', `${usedPrefix}tr id ${x.en}`]
            ], m)
            }
            
if (command == 'kata') {
let er = `contoh:\n\n${usedPrefix + command} cinta

Opsi Tersedia:
• cinta
• rindu
• mimpi
• sendiri
• sabar
• kesedihan
• pernikahan
• kemerdekaan
`
    if (!args[0]) throw er
    switch (args[0].toLowerCase()) {
        case 'cinta':
        case 'rindu':
        case 'mimpi':
        case 'sendiri':
        case 'sabar':
        case 'kesedihan':
        case 'pernikahan':
        case 'kemerdekaan':
          let da =  await quotes(args[0].toLowerCase())
          let jso = await da.json()
                let random = Math.floor(Math.random() * jso.data.length)
                let hasil = jso.data[random]
                let { author, bio, quote } = hasil
                let caption = `_“${quote}”_\n\n_${author}_`
                await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m)
            
            break
        default:
            throw er
    }
}

}
handler.command = handler.help = ['kata', 'kataquotes']
handler.tags = ['fun']

export default handler