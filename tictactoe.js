

        const midDuel = new Set()

        const author = message.author.id
        const authorName = message.author.username
        const member = message.mentions.members.first()
        const memberName = member.user.username
        if (!member) {
            return message.channel.send('Vous devez mentionner un membre !')
        }
        if (member.id === author) {
            return message.channel.send('Vous ne pouvez pas jouer contre vous-même !')
        }
        if (midDuel.has(author)) {
            return message.channel.send(`Vous jouez déjà !`)
        } else if (midDuel.has(member.id)) {
            return message.channel.send(`<@${member.id}> joue déjà !`)
        }
        if (member.id === message.client.user.id) {
            return message.channel.send("Je ne peux pas jouer !")
        }
        midDuel.add(author)
        midDuel.add(member.id)
        let turnName
        let a1 = '⬜'
        let a2 = '⬜'
        let a3 = '⬜'
        let b1 = '⬜'
        let b2 = '⬜'
        let b3 = '⬜'
        let c1 = '⬜'
        let c2 = '⬜'
        let c3 = '⬜'
        let xCircle
        let winner
        let turn
        const Embed = new Discord.MessageEmbed()
            .setTitle('Morpion')
            .setDescription(`🎮 **${authorName}** VS ${memberName} 🎮\n\n🟦🟦🟦🟦🟦\n🟦${a1}${a2}${a3}🟦\n🟦${b1}${b2}${b3}🟦\n🟦${c1}${c2}${c3}🟦\n🟦🟦🟦🟦🟦`)
            .setFooter('Vous avez 10s pour répondre. \n Vous pouvez taper "cancel" pour annuler.\n(1,2,3,4,5,6,7,8,9)')
            .setColor(3426654)
        message.channel.send(`<@${author}>`, Embed).then(async msg => {
            let i = 0
            for (i = 0; i < 9; i++) {
                if (i % 2 === 0) {
                    turnName = author
                    xCircle = '❌'
                    winner = `<@${author}>`
                } else if (i % 2 > 0) {
                    turnName = member.id
                    xCircle = '🔴'
                    winner = `<@${member.id}>`
                }
                const filter = m => m.author.id === turnName
                try {
                    let collected = await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: '20000',
                        errors: ['time']
                    })
                    if (collected.first().content.toLowerCase().trim() === 'cancel') {
                        message.channel.send('  Annulé !')
                        midDuel.delete(author)
                        midDuel.delete(member.id)
                        break
                    } else {
                        if (collected.first().content.toLowerCase().trim() === '1') {
                            if (a1 === '🔴' || a1 === '❌') {
                                message.channel.send('Cet endroit est déjà utilisé... \n Vous avez perdu !')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                a1 = xCircle
                                checkWin(i, message, winner, author, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                                update(i, authorName, memberName, msg, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                            }
                        } else if (collected.first().content.toLowerCase().trim() === '2') {
                            if (a2 === '🔴' || a2 === '❌') {
                                message.channel.send('Cet endroit est déjà utilisé... \n Vous avez perdu !')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                a2 = xCircle
                                checkWin(i, message, winner, author, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                                update(i, authorName, memberName, msg, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                            }
                        } else if (collected.first().content.toLowerCase().trim() === '3') {
                            if (a3 === '🔴' || a3 === '❌') {
                                message.channel.send('Cet endroit est déjà utilisé... \n Vous avez perdu !')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                a3 = xCircle
                                checkWin(i, message, winner, author, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                                update(i, authorName, memberName, msg, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                            }
                        } else if (collected.first().content.toLowerCase().trim() === '4') {
                            if (b1 === '🔴' || b1 === '❌') {
                                message.channel.send('Cet endroit est déjà utilisé... \n Vous avez perdu !')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                b1 = xCircle
                                checkWin(i, message, winner, author, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                                update(i, authorName, memberName, msg, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                            }
                        } else if (collected.first().content.toLowerCase().trim() === '5') {
                            if (b2 === '🔴' || b2 === '❌') {
                                message.channel.send('Cet endroit est déjà utilisé... \n Vous avez perdu !')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                b2 = xCircle
                                checkWin(i, message, winner, author, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                                update(i, authorName, memberName, msg, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                            }
                        } else if (collected.first().content.toLowerCase().trim() === '6') {
                            if (b3 === '🔴' || b3 === '❌') {
                                message.channel.send('Cet endroit est déjà utilisé... \n Vous avez perdu !')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                b3 = xCircle
                                checkWin(i, message, winner, author, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                                update(i, authorName, memberName, msg, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                            }
                        } else if (collected.first().content.toLowerCase().trim() === '7') {
                            if (c1 === '🔴' || c1 === '❌') {
                                message.channel.send('Cet endroit est déjà utilisé... \n Vous avez perdu !')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                c1 = xCircle
                                checkWin(i, message, winner, author, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                                update(i, authorName, memberName, msg, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                            }
                        } else if (collected.first().content.toLowerCase().trim() === '8') {
                            if (c2 === '🔴' || c2 === '❌') {
                                message.channel.send('Cet endroit est déjà utilisé... \n Vous avez perdu !')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                c2 = xCircle
                                checkWin(i, message, winner, author, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                                update(i, authorName, memberName, msg, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                            }
                        } else if (collected.first().content.toLowerCase().trim() === '9') {
                            if (c3 === '🔴' || c3 === '❌') {
                                message.channel.send('Cet endroit est déjà utilisé... \n Vous avez perdu !')
                                midDuel.delete(author)
                                midDuel.delete(member.id)
                                break
                            } else {
                                c3 = xCircle
                                checkWin(i, message, winner, author, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                                update(i, authorName, memberName, msg, a1, b1, c1, a2, b2, c2, a3, b3, c3)
                            }
                        } else {
                            message.channel.send('Entrée incorrecte... vous avez perdu.')
                            midDuel.delete(author)
                            midDuel.delete(member.id)
                            break
                        }
                    }
                    collected.first().delete()
                } catch (ex) {
                    console.log(ex)
                    message.channel.send(`<@${turnName}> vous avez pris trop de temps à répondre... vous avez perdu!`)
                    midDuel.delete(author)
                    midDuel.delete(member.id)
                    break
                }
            }
        })

        function update(i, authorName, memberName, msg, a1, b1, c1, a2, b2, c2, a3, b3, c3) {
            if (i % 2 === 0) {
                const updatedEmbed = new Discord.MessageEmbed()
                    .setTitle('Morpion')
                    .setDescription(`🎮 **${authorName}** VS ${memberName} 🎮\n\n🟦🟦🟦🟦🟦\n🟦${a1}${a2}${a3}🟦\n🟦${b1}${b2}${b3}🟦\n🟦${c1}${c2}${c3}🟦\n🟦🟦🟦🟦🟦`)
                    .setFooter('Vous avez 10s pour répondre. \n Vous pouvez taper "cancel" pour annuler.\n(1,2,3,4,5,6,7,8,9)')
                    .setColor(3426654)
                msg.edit(updatedEmbed)
            } else if (i % 2 > 0) {
                const updatedEmbed = new Discord.MessageEmbed()
                    .setTitle('Morpion')
                    .setDescription(`🎮 **${authorName}** VS ${memberName} 🎮\n\n🟦🟦🟦🟦🟦\n🟦${a1}${a2}${a3}🟦\n🟦${b1}${b2}${b3}🟦\n🟦${c1}${c2}${c3}🟦\n🟦🟦🟦🟦🟦`)
                    .setFooter('Vous avez 10s pour répondre. \n Vous pouvez taper "cancel" pour annuler.\n(1,2,3,4,5,6,7,8,9)')
                    .setColor(3426654)
                msg.edit(updatedEmbed)
            }
        }

        function checkWin(i, message, winner, author, a1, b1, c1, a2, b2, c2, a3, b3, c3) {
            if (a1 === '❌' && b1 === '❌' && c1 === '❌' || a1 === '🔴' && b1 === '🔴' && c1 === '🔴') {
                message.channel.send(`${winner} a gagné !`)
                midDuel.delete(author)
                midDuel.delete(member.id)
                return;
            } else if (a2 === '❌' && b2 === '❌' && c2 === '❌' || a2 === '🔴' && b2 === '🔴' && c2 === '🔴') {
                message.channel.send(`${winner} a gagné !`)
                midDuel.delete(author)
                midDuel.delete(member.id)
                return;
            } else if (a3 === '❌' && b3 === '❌' && c3 === '❌' || a3 === '🔴' && b3 === '🔴' && c3 === '🔴') {
                message.channel.send(`${winner} a gagné !`)
                midDuel.delete(author)
                midDuel.delete(member.id)
                return;
            } else if (a1 === '❌' && a2 === '❌' && a3 === '❌' || a1 === '🔴' && a2 === '🔴' && a3 === '🔴') {
                message.channel.send(`${winner} a gagné !`)
                midDuel.delete(author)
                midDuel.delete(member.id)
                return;
            } else if (b1 === '❌' && b2 === '❌' && b3 === '❌' || b1 === '🔴' && b2 === '🔴' && b3 === '🔴') {
                message.channel.send(`${winner} a gagné !`)
                midDuel.delete(author)
                midDuel.delete(member.id)
                return;
            } else if (c1 === '❌' && c2 === '❌' && c3 === '❌' || c1 === '🔴' && c2 === '🔴' && c3 === '🔴') {
                message.channel.send(`${winner} a gagné !`)
                midDuel.delete(author)
                midDuel.delete(member.id)
                return;
            } else if (a1 === '❌' && b2 === '❌' && c3 === '❌' || a1 === '🔴' && b2 === '🔴' && c3 === '🔴') {
                message.channel.send(`${winner} a gagné !`)
                midDuel.delete(author)
                midDuel.delete(member.id)
                return;
            } else if (a3 === '❌' && b2 === '❌' && c1 === '❌' || a3 === '🔴' && b2 === '🔴' && c1 === '🔴') {
                message.channel.send(`${winner} a gagné !`)
                midDuel.delete(author)
                midDuel.delete(member.id)
                return;
            } else if (i === 8) {
                message.channel.send("Personne n'a gagné !")
                midDuel.delete(author)
                midDuel.delete(member.id)
                return;
            }
        }
