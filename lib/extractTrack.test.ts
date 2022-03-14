import { asserts } from "./deps.ts";
import extractTrack from "./extractTracks.ts";

Deno.test("Extracts tracks", () => {
  const cases: Array<{ text: string; expected: Array<string> }> = [
    {
      text: "Hello, I am a string",
      expected: [],
    },
    {
      text: "https://open.spotify.com/track/4L5vuKZZQiVGRKlB9Z3DdK?si=de55b1e1193148e0",
      expected: ["4L5vuKZZQiVGRKlB9Z3DdK"],
    },
    {
      text: "Hello there: https://open.spotify.com/track/4L5vuKZZQiVGRKlB9Z3DdK?si=de55b1e1193148e0",
      expected: ["4L5vuKZZQiVGRKlB9Z3DdK"],
    },
    {
      text: "Hello there: https://open.spotify.com/track/0r99ktDvymD0tb6oUFyvac?si=a95e8729b33045ac https://open.spotify.com/track/4L5vuKZZQiVGRKlB9Z3DdK?si=de55b1e1193148e0",
      expected: ["0r99ktDvymD0tb6oUFyvac", "4L5vuKZZQiVGRKlB9Z3DdK"],
    },
  ];
  for (const { text, expected } of cases) {
    asserts.assertEquals(extractTrack(text), expected);
  }
  const result = extractTrack("Hello I am a message");
});
