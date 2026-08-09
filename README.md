# Quotex Demo Trading Bot

> **Demo-account, educational/research use only.** This bot implements common
> technical-analysis concepts as testable rules — it is **not** financial advice
> and carries **no guarantee of profitability**. Quotex/binary options are a
> high-risk product; verify Quotex's current Terms of Service regarding automated
> trading before any use beyond personal demo testing.

## What This Is

A rules-based trading bot that:
1. Connects to [Quotex](https://qxbroker.com) by automating the real website with Playwright (no unofficial API)
2. Reads live candle data from the demo platform
3. Runs a strategy combining **Smart Money Concepts** (liquidity sweeps, order blocks, fair value gaps) with classic **price-action patterns** (engulfing, pin bar)
4. When a high-confluence signal appears, places a CALL or PUT trade on the **demo account only**
5. Logs every decision, enforces hard risk limits, and halts itself when limits are hit

### What This Is NOT
- **Not financial advice** — these are common retail TA concepts, not a verified edge
- **Not a real-money bot** — the code literally refuses to run if the account isn't in Demo mode
- **Not a get-rich-quick tool** — binary options are high-risk; most traders lose money
- **Not ToS-compliant by default** — automated trading may violate Quotex's Terms of Service; that's your responsibility to verify

---

## Prerequisites

- **Python 3.11+** — [download here](https://www.python.org/downloads/)
- **Git** (optional, for version control)
- A **Quotex demo account** at [qxbroker.com](https://qxbroker.com)

---

## Setup (Step-by-Step)

### 1. Clone or download this project

```bash
cd your-projects-folder
git clone <your-repo-url> quotex-demo-bot
cd quotex-demo-bot
```

### 2. Create a virtual environment

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Install Playwright's browser

```bash
playwright install chromium
```

### 5. Set up your credentials

```bash
# Copy the example file
cp .env.example .env     # Windows: copy .env.example .env
```

Open `.env` in a text editor and fill in your Quotex email/password. **Never commit this file** — it's already in `.gitignore`.

### 6. First login (manual, one-time)

The first time, the bot opens a visible browser so **you** can log in and solve any CAPTCHA/2FA:

```bash
python tools/recon_capture.py
```

This saves your session to `storage_state.json`. Future runs reuse it automatically (no repeated logins until the session expires).

### 7. Run the recon capture

While the browser is open from step 6, the recon tool captures WebSocket data and helps you map the DOM. Review the output in `data/recon/platform_map.md` before proceeding.

### 8. Run in log-only mode first

```bash
python src/main.py
```

By default, `config.yaml` has `execution_mode: log_only`. The bot reads the market and logs what it *would* do, but places **zero trades**. Let it run for a while and review the logs in `logs/`.

### 9. Switch to demo-auto (only after reviewing logs)

Once you're satisfied the signals make sense:

1. Open `config.yaml`
2. Change `execution_mode: log_only` → `execution_mode: demo_auto`
3. Restart the bot

This is a deliberate step, never the default.

---

## How `config.yaml` Works

Every tunable parameter lives in `config.yaml` — there are no magic numbers in the source code. The file is heavily commented; here's a quick reference:

| Section | Key | What It Controls |
|---------|-----|-----------------|
| `execution_mode` | `log_only` / `demo_auto` | Whether the bot actually places trades |
| `asset` | e.g. `"EURUSD"` | Which pair to trade |
| `signal_timeframe_s` | `60` | Candle size for entry signals (seconds) |
| `trend_timeframe_s` | `300` | Higher-TF candle for trend bias |
| `expiry_s` | `180` | Binary option contract duration |
| `strategy_mode` | `trend_aligned` / `reversal_only` | Strategy variant |
| `confluence.*` | weights + minimum | How signals are scored |
| `risk.*` | limits | Position sizing & safety limits |
| `pacing.*` | delays | Human-like action timing |

---

## Running the Backtester

Test the strategy on historical data before going live:

```bash
python -m src.backtest.backtester --data data/historical/your_data.csv
```

The backtester:
- Models fixed-stake/fixed-payout binary contracts (not generic position-based)
- Enters at the **next candle's open** (no lookahead bias)
- Reports: win rate, net P&L, max drawdown, equity curve
- Breaks down results **by which confluence rules fired** — so you can see if "sweep + engulfing" actually outperforms "sweep alone"

> **Important:** External historical data won't match Quotex's own feed/spread exactly. The backtest validates the *logic*, not the live numbers. A handful of trades either way is statistical noise — evaluate only on 100+ simulated trades.

---

## Reading the Trade Log

Every trade and every "no trade" decision is logged to `logs/trades.jsonl`. Each line is a JSON object:

```json
{
  "timestamp": "2025-01-15T14:32:00Z",
  "asset": "EURUSD",
  "action": "CALL",
  "confidence": 4,
  "reasons": ["liquidity_sweep_low", "bullish_engulfing", "bullish_fvg", "trend_aligned"],
  "stake": 10.0,
  "entry_price": 1.08542,
  "result": "win",
  "pnl": 8.50,
  "daily_pnl": 15.30
}
```

For "no trade" cycles, `action` is `"NONE"` and `reasons` explains why (e.g. `["score_below_minimum: 1 < 3"]`).

---

## Kill Switch

Two ways to stop the bot immediately:

1. **`STOP` file:** Create an empty file named `STOP` in the project root. The bot checks for it every loop iteration and halts before its next action.
   ```bash
   # Windows
   echo. > STOP

   # macOS / Linux
   touch STOP
   ```

2. **Ctrl+C:** The bot has a clean shutdown handler — it finishes the current action and exits gracefully.

---

## Risk Limits (Enforced in Code)

These are **not suggestions** — the bot enforces them automatically and halts when any limit is hit:

- **Max daily loss:** 5% of start-of-day balance (configurable)
- **Max consecutive losses:** 3 in a row → bot stops for the day
- **Max trades per day:** 15 total
- **Cooldown:** At least 2 minutes between trades
- **Position sizing:** Always flat 1% of balance — **no martingale / bet-doubling**, ever

---

## Project Structure

```
quotex-demo-bot/
├── .env.example          ← Template for credentials (copy to .env)
├── config.yaml           ← Every tunable parameter
├── requirements.txt      ← Python dependencies
├── src/
│   ├── platform/         ← Quotex-specific browser automation (only changes if the site changes)
│   ├── strategy/         ← 100% platform-agnostic signal logic (testable with fake data)
│   ├── risk/             ← Position sizing + hard limits
│   ├── backtest/         ← Binary-payout-aware backtester
│   ├── execution/        ← Trade placement with all safety checks
│   ├── journal/          ← Trade logging (SQLite + JSONL)
│   ├── notify/           ← Optional Telegram alerts
│   └── main.py           ← Orchestrator loop
├── tests/                ← Unit tests (run with zero browser)
├── tools/                ← Recon & utility scripts
├── data/                 ← Captured data, candle cache, historical data
└── logs/                 ← Runtime logs & trade journal
```

---

## Disclaimer

> Demo-account, educational/research use only. This bot implements common
> technical-analysis concepts as testable rules — it is not financial advice
> and carries no guarantee of profitability. Quotex/binary options are a
> high-risk product; verify Quotex's current Terms of Service regarding
> automated trading before any use beyond personal demo testing.
