// Simple request monitor to help identify infinite loops
class RequestMonitor {
  constructor() {
    this.requests = new Map();
    this.enabled = process.env.NODE_ENV === "development";
  }

  log(url, method = "GET") {
    if (!this.enabled) return;

    const key = `${method} ${url}`;
    const now = Date.now();

    if (!this.requests.has(key)) {
      this.requests.set(key, []);
    }

    const requestLog = this.requests.get(key);
    requestLog.push(now);

    // Keep only requests from last 10 seconds
    const tenSecondsAgo = now - 10000;
    this.requests.set(
      key,
      requestLog.filter((time) => time > tenSecondsAgo),
    );

    // Check for potential loops (more than 10 requests in 10 seconds)
    const recentRequests = this.requests.get(key);
    if (recentRequests.length > 10) {
      console.warn(
        `⚠️  POSSÍVEL LOOP DETECTADO: ${key}`,
        `${recentRequests.length} requisições nos últimos 10 segundos`,
      );
    }
  }

  getStats() {
    if (!this.enabled) return {};

    const stats = {};
    for (const [key, requests] of this.requests) {
      if (requests.length > 0) {
        stats[key] = requests.length;
      }
    }
    return stats;
  }

  clear() {
    this.requests.clear();
  }
}

export const requestMonitor = new RequestMonitor();

// Auto-print stats every 30 seconds in development
if (process.env.NODE_ENV === "development") {
  setInterval(() => {
    const stats = requestMonitor.getStats();
    if (Object.keys(stats).length > 0) {
      console.log("📊 Request Stats (últimos 10s):", stats);
    }
  }, 30000);
}
