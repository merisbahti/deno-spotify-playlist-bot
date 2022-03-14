// run me with `deno run --allow-env --allow-net file.ts`
import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { Bot } from "https://deno.land/x/grammy@v1.7.0/mod.ts";
import extractTracks from "./lib/extractTracks.ts";
import { throwErr } from "./lib/throwErr.ts";

// Create bot object
const token =
  Deno.env.get("TELEGRAM_TOKEN") ?? throwErr("Please set TELEGRAM_TOKEN");
const bot = new Bot(token); // <-- place your bot token inside this string

bot.on("message:text", (ctx) => {
  const text = ctx.message.text;
  const tracks = extractTracks(text);
  ctx.reply(`That is text and not a photo! ${tracks}`);
});

// Launch!
bot.start();
