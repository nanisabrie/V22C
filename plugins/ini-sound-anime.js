import fetch from 'node-fetch'

let handler = async (m, { conn, text, command, customPrefix }) => {

if (customPrefix == 'voice') {
let vvr = ["beaky1", "bugs", "cecil1", "daffy", "dafgpbr", "dawg", "elmer", "elmer2", "foghorn", "goodsens", "gremlin1", "gremlin2", "gremlin3", "hazel", "hubbub", "marvin", "marvin2", "pepe", "porky", "prissy", "roadrnr", "sam", "samralph", "speedy", "taz", "tweety", "weasel", "wile", "workevil"]
let vr = vvr.getRandom()
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/voices/${vr}.wav`, '', '', fvn)
}
if (customPrefix == 'voice1') {
let vr = 6
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/A_Flea/ltaf_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice2') {
let vr = 8
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Abominable_Snowman/ltas_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice3') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Angus_McRory/ltam_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice4') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Angus_McRory/ltam_0${[10, 12].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice5') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Banty_Rooster/ltbt_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice6') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Banty_Rooster/ltbt_0${[10, 19].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice7') {
let vr = 3
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Barney/ltba_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice8') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Barnyard_Dog/ltdg_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice9') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Barnyard_Dog/ltdg_0${[10, 24].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice10') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Beaky_Buzzard/ltbk_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice11') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Beaky_Buzzard/ltbk_0${[10, 22].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice12') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Benny/ltby_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice13') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Big_Bad_Wolf/ltbw_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice14') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Big_Bad_Wolf/ltbw_0${[10, 17].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice15') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Blacque_Jacque_Shellaque/ltbj_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice16') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Blacque_Jacque_Shellaque/ltbj_00${[10, 11].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice17') {
let vr = 7
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Bruno_Bear/ltbr_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice18') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Bugs_Bunny/ltbb_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice19') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Bugs_Bunny/ltbb_0${[10, 99].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice20') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Bugs_Bunny/ltbb_${[100, 388].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice21') {
let vr = 6
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Cat_and_Dog/ltct_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice22') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Cecil_Turtle/ltcc_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice23') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Cecil_Turtle/ltcc_00${[10, 12].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice24') {
let vr = 8
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Charlie_Dog/ltcd_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice25') {
let vr = 8
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Claude_Cat/ltcl_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice26') {
let vr = 8
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Colonel_and_Belvedere/ltco_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice27') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Count_Bloodcount/ltcb_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice28') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Count_Bloodcount/ltcb_0${[10, 11].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice29') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Daffy_Duck/ltdd_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice30') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Daffy_Duck/ltdd_0${[10, 99].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice31') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Daffy_Duck/ltdd_${[100, 223].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice32') {
let vr = 5
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Dumb_dog/ltdm_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice33') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Elmer_Fudd/ltef_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice34') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Elmer_Fudd/ltef_0${[10, 32].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice35') {
let vr = 6
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Evil_Scientist/ltes_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice36') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/FX/ltfx_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice37') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/FX/ltfx_0${[10, 99].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice38') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/FX/ltfx_${[100, 131].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice39') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Foghorn_Leghorn/ltfl_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice40') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Foghorn_Leghorn/ltfl_0${[10, 91].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice41') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Genie/ltge_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice42') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Genie/ltge_0${[10, 10].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice43') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Granny/ltgr_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice44') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Granny/ltgr_0${[10, 20].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice45') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Gremlin/ltgm_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice46') {
let vr = 3
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Hassan/lths_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice47') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Henery_Hawk/lthh_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice48') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Henery_Hawk/lthh_0${[10, 24].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice49') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Honeymousers/lthm_001.mp3`, '', '', fvn)
}
if (customPrefix == 'voice50') {
let vr = 3
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/House_Detective_at_Spinster_Arms/ltdt_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice51') {
let vr = 4
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Hubie_and_Bert/lthb_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice52') {
let vr = 2
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Little_Rooster/ltlr_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice53') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Mac_and_Tosh/ltmt_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice54') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Mac_and_Tosh/ltmt_0${[10, 15].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice55') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Marvin_The_Martian/ltmm_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice56') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Marvin_The_Martian/ltmm_0${[10, 22].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice57') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Michigan_J_Frog/ltmj_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice58') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Michigan_J_Frog/ltmj_0${[10, 10].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice59') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Miscellaneous/ltmi_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice59') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Miscellaneous/ltmi_0${[10, 99].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice60') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Miscellaneous/ltmi_${[100, 139].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice61') {
let vr = 4
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Monty/ltmt_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice62') {
let vr = 7
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Mugsy/ltmg_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice63') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Music/ltmu_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice63') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Music/ltmu_0${[10, 81].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice64') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Nasty_Canasta/ltnc_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice65') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Nasty_Canasta/ltnc_0${[10, 12].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice66') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Pappy_and_Elvis/ltpe_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice67') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Pepe_Le_Pew/ltlp_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice68') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Pepe_Le_Pew/ltlp_0${[10, 15].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice69') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Pete_Puma/ltpu_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice70') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Pete_Puma/ltpu_0${[10, 27].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice71') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Porky_Pig/ltpp_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice72') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Porky_Pig/ltpp_0${[10, 30].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice73') {
let vr = 4
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Prissy/ltpr_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice74') {
let vr = 2
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Ralph_Wolf_and_Sam_Sheepdog/ltrs_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice75') {
let vr = 8
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Red_Riding_Hood/ltrh_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice76') {
let vr = 7
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Road_Runner/ltrr_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice77') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Rocky/ltrk_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice78') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Rocky/ltrk_0${[10, 23].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice79') {
let vr = 3
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Sargeant/ltsa_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice80') {
let vr = 8
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Sheriff_of_Nottingham/ltsn_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice81') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Speedy_Gonzales/ltsg_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice82') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Speedy_Gonzales/ltsg_0${[10, 17].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice83') {
let vr = 3
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Spike/ltsp_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice84') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Sylvester/ltsy_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice85') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Sylvester/ltsy_0${[10, 62].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice86') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Tasmanian_Devil/lttd_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice87') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Tasmanian_Devil/lttd_0${[10, 14].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice88') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/The_Three_Bears/lt3b_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice89') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/The_Three_Bears/lt3b_0${[10, 33].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice90') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Tweety/lttw_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice91') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Tweety/lttw_0${[10, 49].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice92') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Wile_E_Coyote/ltwc_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice93') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Wile_E_Coyote/ltwc_0${[10, 21].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice94') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Witch_Hazel/ltwh_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice95') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Witch_Hazel/ltwh_0${[10, 25].getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice96') {
let vr = 9
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Yosemite_Sam/ltys_00${vr.getRandom()}.mp3`, '', '', fvn)
}
if (customPrefix == 'voice97') {
await conn.sendFile(m.chat, `https://www.nonstick.com/audio/soundsource/Yosemite_Sam/ltys_0${[10, 88].getRandom()}.mp3`, '', '', fvn)
}

if (customPrefix == 'ara') {
await conn.sendFile(m.chat, 'https://andgyk.is-a.dev/anime-soundboard/audio/ara-ara.mp3', '', '', fvn)
}

if (customPrefix == 'ganbare') {
await conn.sendFile(m.chat, 'https://andgyk.is-a.dev/anime-soundboard/audio/ganbare-ganbare-senpai.mp3', '', '', fvn)
}

if (customPrefix == 'konichiwa') {
await conn.sendFile(m.chat, 'https://andgyk.is-a.dev/anime-soundboard/audio/hashira-konichiwa.mp3', '', '', fvn)
}

if (customPrefix == 'nani') {
await conn.sendFile(m.chat, 'https://andgyk.is-a.dev/anime-soundboard/audio/nani.mp3', '', '', fvn)
}

if (customPrefix == 'rikka') {
await conn.sendFile(m.chat, 'https://andgyk.is-a.dev/anime-soundboard/audio/rikka-ow.mp3', '', '', fvn)
}

if (customPrefix == 'ultra') {
await conn.sendFile(m.chat, 'https://andgyk.is-a.dev/anime-soundboard/audio/ultra-instinct.mp3', '', '', fvn)
}

if (customPrefix == 'ahh') {
await conn.sendFile(m.chat, 'https://andgyk.is-a.dev/anime-soundboard/audio/yemete-kudasai-ah.mp3', '', '', fvn)
}

if (customPrefix == 'yemete') {
await conn.sendFile(m.chat, 'https://andgyk.is-a.dev/anime-soundboard/audio/yemete-kudasai.mp3', '', '', fvn)
}

if (customPrefix == 'yuno') {
await conn.sendFile(m.chat, 'https://andgyk.is-a.dev/anime-soundboard/audio/yuno-yukki.mp3', '', '', fvn)
}

}

handler.customPrefix = /(ahh|ara|ganbare|konichiwa|nani|rikka|ultra|voice|voice1|voice2|voice3|voice4|voice5|voice6|voice7|voice8|voice9|voice10|voice11|voice12|voice13|voice14|voice15|voice16|voice17|voice18|voice19|voice20|voice21|voice22|voice23|voice24|voice25|voice26|voice27|voice28|voice29|voice30|voice31|voice32|voice33|voice34|voice35|voice36|voice37|voice38|voice39|voice40|voice41|voice42|voice43|voice44|voice45|voice46|voice47|voice48|voice49|voice50|voice51|voice52|voice53|voice54|voice55|voice56|voice57|voice58|voice59|voice60|voice61|voice62|voice63|voice64|voice65|voice66|voice67|voice68|voice69|voice70|voice71|voice72|voice73|voice74|voice75|voice76|voice77|voice78|voice79|voice80|voice81|voice82|voice83|voice84|voice85|voice86|voice87|voice88|voice89|voice90|voice91|voice92|voice93|voice94|voice95|voice96|voice97|yemete|yuno)/i
handler.command = new RegExp
  
handler.mods = false

export default handler