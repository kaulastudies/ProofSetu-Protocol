import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const BASE_URL = "https://proof-setu-protocol.vercel.app";
const VIDEO_DIR = path.resolve("../../demo-videos");

fs.mkdirSync(VIDEO_DIR, { recursive: true });

async function pause(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function scrollToTop(page) {
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  await pause(1000);
}

async function scrollToBottom(page) {
  await page.evaluate(() =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  );
  await pause(1500);
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
  console.log("Opening homepage...");
  await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });
  await pause(4000);

  console.log("Opening Create Proof page...");
  await page.goto(`${BASE_URL}/create`, { waitUntil: "networkidle" });
  await pause(3000);

  console.log("Filling proof form...");
  await page.getByLabel("Title").fill("Grant Demo Proof");
  await page
    .getByLabel("Description")
    .fill("ProofSetu grant demo workflow proof submitted to Stellar testnet");
  await page.getByLabel("Reference ID").fill("DEMO-GRANT-PLAYWRIGHT-001");
  await pause(1000);

  console.log("Generating proof hash...");
  await page.getByRole("button", { name: "Generate Proof Hash" }).click();
  await page.waitForSelector("text=Generated Proof Record", {
    timeout: 30000,
  });
  await pause(3000);

  console.log("Submitting proof to Stellar testnet...");
  await page
    .getByRole("button", { name: "Submit Proof to Stellar Testnet" })
    .click();

  await page.waitForSelector("text=Stellar Status", { timeout: 60000 });
  await page.waitForSelector("text=SUCCESS", { timeout: 60000 });
  await pause(5000);

  console.log("Extracting proof JSON...");
  const preBlocks = await page.locator("pre").allTextContents();
  const apiResponseText = preBlocks.find((text) =>
    text.includes("stellar_testnet_invocation")
  );

  if (!apiResponseText) {
    throw new Error("Could not find Stellar invocation JSON response.");
  }

  const apiResponse = JSON.parse(apiResponseText);
  const proofId = apiResponse.proof.proof_id;
  const eventHash = apiResponse.proof.event_hash;

  console.log("Proof ID:", proofId);
  console.log("Event Hash:", eventHash);

  await scrollToTop(page);
  await pause(2000);
  await scrollToBottom(page);
  await pause(2000);

  console.log("Opening Verify On-chain page...");
  await page.goto(`${BASE_URL}/verify`, { waitUntil: "networkidle" });
  await pause(3000);

  console.log("Verifying fresh proof...");
  await page.getByLabel("Proof ID").fill(proofId);
  await page.getByLabel("Event Hash").fill(eventHash);
  await pause(1000);

  await page.getByRole("button", { name: "Verify Proof" }).click();
  await page.waitForSelector("text=Proof hash matched", { timeout: 60000 });
  await page.waitForSelector("text=Verified", { timeout: 60000 });
  await pause(5000);

  console.log("Running wrong hash test...");
  await page.getByLabel("Event Hash").fill("wrong_hash_for_negative_test");
  await pause(1000);

  await page.getByRole("button", { name: "Verify Proof" }).click();
  await page.waitForSelector("text=Proof hash did not match", {
    timeout: 60000,
  });
  await pause(4000);

  console.log("Opening Testnet Contract page...");
  await page.goto(`${BASE_URL}/testnet`, { waitUntil: "networkidle" });
  await pause(4000);

  console.log("Opening GitHub repository...");
  await page.goto("https://github.com/kaulastudies/ProofSetu-Protocol", {
    waitUntil: "networkidle",
  });
  await pause(4000);

  console.log("Opening v0.3.0 release page...");
  await page.goto(
    "https://github.com/kaulastudies/ProofSetu-Protocol/releases/tag/v0.3.0",
    { waitUntil: "networkidle" }
  );
  await pause(5000);

  console.log("Demo recording completed.");
} catch (error) {
  console.error("Demo recording failed:");
  console.error(error);
  process.exitCode = 1;
} finally {
  await context.close();
  await browser.close();
}