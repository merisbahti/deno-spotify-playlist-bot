// run me with `deno run --allow-env --allow-net file.ts`
import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { Bot } from "https://deno.land/x/grammy@v1.7.0/mod.ts";
import { throwErr } from "./lib/throwErr.ts";

// Create bot object
const token =
  Deno.env.get("TELEGRAM_TOKEN") ?? throwErr("Please set TELEGRAM_TOKEN");
const bot = new Bot(token); // <-- place your bot token inside this string

// Listen for messages
bot.command("start", (ctx) => ctx.reply("Welcome! Send me a photo!"));
bot.on("message:text", (ctx) => {
  ctx.reply("That is text and not a photo!");
});
bot.on("message:photo", (ctx) => ctx.reply("Nice photo! Is that you?"));
bot.on("edited_message", (ctx) =>
  ctx.reply("Ha! Gotcha! You just edited this!", {
    reply_to_message_id: ctx.editedMessage.message_id,
  })
);

// Launch!
bot.start();
