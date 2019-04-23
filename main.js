const TelegramBot = require('node-telegram-bot-api');
const token = '637400262:AAF7cpilJ5dAcBB2Nd22c2fZerSsFM4u8mk';
const bot = new TelegramBot(token, {polling: true});
var chatId;

bot.onText(/\/date (.+)/, (msg, match) => {
    var chatID = msg.chat.id;
    var resp = match[1];
    resp.toString();
    var day = resp.slice(0, '2');
    var month = resp.slice(3);
    var photo;

    switch (month) {
        case '01':
            month = 'January';
            break;
        case '02':
            month = 'February';
            break;
        case '03':
            month = 'March';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'June';
            break;
        case '07':
            month = 'July';
            break;
        case '08':
            month = 'August';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'October';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'December';
            break;
        default :
            month = 'January';
            break;
    }
    ;

    var date = new Date(`2019, ${month}, ${day}`);
    var dayOfWeek = date.getDay();

    switch (dayOfWeek) {
        case 0:
            dayOfWeek = 'sunday';
            break;
        case 1:
            dayOfWeek = 'monday';
            break;
        case 2:
            dayOfWeek = 'tuesday';
            break;
        case 3:
            dayOfWeek = 'wednesday';
            break;
        case 4:
            dayOfWeek = 'thursday';
            break;
        case 5:
            dayOfWeek = 'friday';
            break;
        case 6:
            dayOfWeek = 'saturday';
            break;
    }
    ;

    parseInt(day);
    if (dayOfWeek !== 'sunday' && dayOfWeek !== 'saturday') {
        if (day % 2 == 0) {
            photo = `img/pair/${dayOfWeek}.png`;
            bot.sendPhoto(chatID, photo, {caption: `${dayOfWeek}`});
        } else {
            photo = `img/unpair/${dayOfWeek}.png`;
            bot.sendPhoto(chatID, photo, {caption: `${dayOfWeek}`});
        }
    } else {
        bot.sendMessage(chatID, "Mb holiday ☺");
    }
});

bot.onText(/\/report (.+)/,
    (msg, match) => {
        var chatId = msg.chat.id;
        var key = match[1];
        var idB = "528629856";
        var idA = "505926819";
        bot.sendMessage(idB, key);
        bot.sendMessage(idA, key);
    });


bot.onText(/\/help/, (msg) => {
    chatId = msg.chat.id;
    bot.sendMessage(chatId, `
Command list :
/help
/date
Example: "09.08"  
/report 
Example: "Your report"
    `);
});
