# Demo video scripts

Two 2–3 minute walkthroughs, one per flagship. The goal is not polish — it's
showing a viewer *the loop*: a real task, the agent doing it, and proof it
verified its own work. Record with OBS or the built-in Windows recorder,
then upload to YouTube as unlisted and link from the portfolio cards.

## 1. E-commerce support agent (WhatsApp)

**Hook (0:00–0:15):** "A customer messages a Kenyan shop on WhatsApp at 11pm.
Here's what happens next."

**Walkthrough (0:15–1:45):**
1. Show the n8n workflow (webhook → classify intent → per-intent reply).
2. Send a real message: order status ("Where is my order ORD-1042?").
3. Show the agent's reply with the order status + ETA, and the ledger entry
   in `data/chat_logs.json`.
4. Send a returns message; show the RMA being created and the
   `escalated: true` flag for the vendor.
5. Show a wrong-ish question falling through to the friendly fallback.

**Proof (1:45–2:15):** "Every exchange is logged; every return gets an RMA;
anything a human must see is flagged." End card: repo link + "built with n8n,
DeepSeek, OpenClaw."

**Tip:** don't narrate code — narrate the customer's experience. Code shots
are background, voiceover is the story.

## 2. Agentic Workflow Lab (self-verifying agents)

**Hook (0:00–0:15):** "Most agents stop when the model says it's done. Mine
stops when the verifier proves it's done."

**Walkthrough (0:15–1:50):**
1. Run `python scripts/run_demo.py deep_researcher` (or show a saved trace).
2. Pause on the failure moment: the agent drafts a claim its sources don't
   support, the verifier flags it ("missing from sources: ..."), and it
   rewrites the report.
3. Run the full eval: `python scripts/run_eval.py` → "4/4 tasks passed."
4. Open one interactive trace in the browser and click through a step
   (thought → tool call → observation → self-check → retry).

**Proof (1:50–2:20):** "The eval harness makes 'it works' measurable — 4/4 on
DeepSeek, reproducible run to run. That's how production agent teams ship."

**Tip:** the failure-and-recovery clip is the money shot. Make sure it's
visible, not buried.

## Recording checklist

- Close notifications; use a clean browser profile for the recording.
- 1080p, microphone on, captions on (YouTube auto-captions are fine, then fix).
- One take per video; the scripts are short enough to memorize loosely.
- Title format: "I built an AI agent that [does X] — and it verifies its own work."
