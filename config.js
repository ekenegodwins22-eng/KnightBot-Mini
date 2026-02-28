/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGMEbaERHDCIXoREVaC8b81BCAaXcrCoQnPDfN9Dp7nnYne19K4qKPHky85yfIMsxRSZqwPQnKAiuIEPtkTUFAlMwK8MQEdAFAWQQTMHVPGudk23TzSmZX1mQ9bPdrkASzyf1Wt2knubX/PIt9LzhC7h3QVEeE+z/AdAPUKr0TyW5NbEllkcUntPjzFju6dVbGpTLB5YQDCs70qMXcG8RISY4i5QiRikiMDFRs4KYfI0+N9f0SO+ZnZRQ0S7NVBglzrV3QcSIN+7CMoXkMK5uVq4qX6O/l8twoFZrSx7c5ImIvEU2cZ2DOu8t01wxz5fZnIjOZjbIlCd9iqMMBYsAZQyz5su6I7u3pd7pvF9Ubwm7iFl1Kc76ulauqqVzaho3kbYqZibdfpH4/Dy+1GeN1X0e5QPFHoxew9GR97wxWvG2NKqjy7WA/euKv/5OfEXes3L+P7pDzYOvDmE21vSKE6WTUDvryo7YynNrslYl4eacrq9U885fo38QAhYXsBouzShzj5PQXxq9Pis25JCXSzKjZ34zUKSJpOw/6UNWkj+xPIhultLCENyVPUhdbbarlsaeNEQ+BHv66qKJJM1dVKJdc5vwsfDm5otYXUmby0WPOuaCpcvTLp4taphc9CM9qkhxY+nl0dEZNYsATPl7FxAUYcoIZDjPHnf8pAtgUDnIJ4g95AUl8vCx7jh50D9u9Jns7AU1p3ShKuJJdiJrG0ZvXpkbg8Z7AV1QkNxHlKJAx5TlpLEQpTBCFEz/+tEFGarZ07i23IDvghATyrysLJIcBu+uvv+Evp+XGXOazJfbAyJgyn1eI8ZwFtFWxzKDxI9xheQYMgqmIUwo+ugQERSAKSMl+phaOQ9a4TVjKItbcw26IH0YggMwBf3BcMKNBZEXJ0Nx2v9Ov11bWFgU3zLEQBckz2cCNxzywwk3EfriiJv2v7f39w+CLV6AGMQJBVMgm7Y7KqmqLDILi5ymSUokyZEEPht6T8ZTeT6t7Dr3Mhrn9czYiG5j2mXe0bhmrilMqU9utVw2uS/p3Ms/gLRLpkmagSFGVz9A8jXaNmq5Rr6Ybn39xs/FobF26n7ntN1xitvTZm+jnRDK57OWDJUIpuKF23FDPe0ILrHXTiccd8oNkaKXtlqAKuyj34udQqrlAmOj9DZWyshZd2JYd4zdZi1DbmXupYa+mTAIoyseFyMrna/LAe2l1nx0GOlZdTIKaazvyFxdJZuaFes9hvgUPTP7mJnk167CjzS1VrWfIUaP0c9ga+B/W/ck3iaMu3d/w/i1TP5lIGfBgdwoVA1hAa2144WKiE/ksoqZFdXx68bac8LN9S+6NJuA+/1HFxQJZGFO0nbnZAHJcQC6gORlG9lFFuZ/KCZL3kKJomXbeQIpkz7HwMUpogymBZjygtDvi4MhJz5frUhe6JDGrQjaUEpLcP8bAMy3P1QHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
