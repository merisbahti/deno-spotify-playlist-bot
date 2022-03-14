const regex = /https:\/\/open.spotify.com\/track\/([\w0-9]+)/g;
export default function extractTracks(input: string): Array<string> {
  const matches = Array.from(input.matchAll(regex));
  if (matches === null) return [];
  return matches.flatMap((m) => m.slice(1));
}
