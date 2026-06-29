
import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const BASE_URL = "https://proof-setu-protocol.vercel.app";
const VIDEO_DIR = path.resolve("../../demo-videos");

fs.mkdirSync(VIDEO_DIR, { recursive: true });

async function pause(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

const browser = await chromium.launch({
  headless: true,
});

const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  recordVideo: {
    dir: VIDEO_DIR,
    size: { width: 1440, height: 1000 },
  },
});

const page = await context.newPage();

try {
  await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });
  await pause(3000);

  await page.goto(`${BASE_URL}/create`, { waitUntil: "networkidle" });
  await pause(3000);

  await page.goto(`${BASE_URL}/verify`, { waitUntil: "networkidle" });
  await pause(2000);

  await page
    .getByRole("button", { name: "Load Successful Testnet Sample" })
    .click();

  await pause(1000);

  await page.getByRole("button", { name: "Verify Proof" }).click();
  await page.waitForSelector("text=Proof hash matched", { timeout: 30000 });
  await pause(4000);

  await page
    .getByRole("button", { name: "Load Wrong Hash Sample" })
    .click();

  await pause(1000);

  await page.getByRole("button", { name: "Verify Proof" }).click();
  await page.waitForSelector("text=Proof hash did not match", {
    timeout: 30000,
  });
  await pause(4000);

  await page.goto(`${BASE_URL}/testnet`, { waitUntil: "networkidle" });
  await pause(3000);

  await page.goto("https://github.com/kaulastudies/ProofSetu-Protocol", {
    waitUntil: "networkidle",
  });
  await pause(3000);

  await page.goto(
    "https://github.com/kaulastudies/ProofSetu-Protocol/releases/tag/v0.3.0",
    { waitUntil: "networkidle" }
  );
  await pause(4000);

  console.log("Demo recording completed.");
} catch (error) {
  console.error("Demo recording failed:");
  console.error(error);
  process.exitCode = 1;
} finally {
  await context.close();
  await browser.close();
}
