// run me with `deno run --allow-env --allow-net file.ts`
import { grammy } from "./lib/deps.ts";
import extractTracks from "./lib/extractTracks.ts";
import { throwErr } from "./lib/throwErr.ts";

// Create bot object
const token =
  Deno.env.get("TELEGRAM_TOKEN") ?? throwErr("Please set TELEGRAM_TOKEN");
const bot = new grammy.Bot(token);

bot.on("message:text", (ctx) => {
  const text = ctx.message.text;
  const tracks = extractTracks(text);
  ctx.reply(`That is text and not a photo! ${tracks}`);
});

// Launch!
bot.start();
