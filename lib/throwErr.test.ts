import { assertThrows } from "https://deno.land/std@0.129.0/testing/asserts.ts";
import { throwErr } from "./throwErr.ts";

Deno.test("Throws error", () => {
  assertThrows(throwErr);
});

Deno.test("Throws error with messag", () => {
  const message = "This is my error.";
  assertThrows(
    () => throwErr("This is my error."),
    undefined,
    undefined,
    message
  );
});
