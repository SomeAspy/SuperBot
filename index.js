'use strict';

import dotenv from 'dotenv'
import Discord from 'discord.js'
import {readdirSync} from 'fs'


dotenv.config()

const discordClient=new Discord.Client()

discordClient.commands=new Discord.Collection()

const commandFolders=readdirSync('./commands')
for(const folder of commandFolders){
    const commandFiles=readdirSync(`./commands/${folder}`).filter(file=>file.endsWith('.js'))
    for(const file of commandFiles){
        let command=import(`./commands/${folder}/${file}`).then(command=>{
            discordClient.commands.set(command.name,command)
            console.log(command)
        })
    }
}

discordClient.on('ready',()=>{
    console.log('Discord login OK!')
})

discordClient.on('invalidated',()=>{
    console.log('Discord client invalidated. Shutting down!')
    discordClient.destroy()
})

discordClient.on('messageCreate',(message)=>{
    pass
})







discordClient.login(process.env.DISCORD_TOKEN)