import dotenv from 'dotenv'
dotenv.config()

import Discord, { Client } from 'discord.js'

const discordClient=new Discord.Client()

discordClient.on('ready',()=>{
    console.log('Discord Login OK')
})











discordClient.login(process.env.DISCORD_TOKEN)