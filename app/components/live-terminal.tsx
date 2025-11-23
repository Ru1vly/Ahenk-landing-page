"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface LogEntry {
  id: number;
  timestamp: string;
  level: string;
  message: string;
  highlight?: boolean;
}

const logTemplates = [
  { level: "MDNS", message: "Discovered peer: {device} ({peer})", highlight: false },
  { level: "LIBP2P", message: "Connected to /ip4/{ip}/tcp/4001", highlight: false },
  { level: "SYNC", message: "Received {count} operations from {device}", highlight: false },
  { level: "OPLOG", message: "Processing operation 0x{hex} ({action} {table})", highlight: false },
  { level: "CRDT", message: "HLC timestamp: {timestamp}", highlight: false },
  { level: "AUTH", message: "✓ Device {device} authenticated", highlight: false },
  { level: "SYNC", message: "✓ Sent to {device} (200 OK)", highlight: false },
  { level: "HEALTH", message: "Active peers: {peers} | Pending ops: {ops} | DB size: {size}MB", highlight: false },
  { level: "CRDT", message: "CONFLICT: Concurrent updates detected", highlight: true },
  { level: "CRDT", message: "✓ Causal order verified, applying local update", highlight: false },
  { level: "SYNC", message: "✓ Sync complete. Network latency: {latency}ms avg", highlight: true },
  { level: "DB", message: "Committed {count} operations to local database", highlight: false },
  { level: "RELAY", message: "Connected to relay /ip4/{ip}/tcp/4001", highlight: false },
  { level: "SYSTEM", message: "All peers converged. State synchronized.", highlight: true },
  { level: "OPLOG", message: "New local operation: {action} INTO {table}...", highlight: false },
];

const devices = ["alice-laptop", "bob-phone", "charlie-tablet", "dave-desktop", "eve-watch"];
const actions = ["INSERT", "UPDATE", "DELETE", "SELECT"];
const tables = ["users", "messages", "devices", "sync_state", "operation_log"];

const LiveTerminal = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [mounted, setMounted] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const logIdRef = useRef(0);

  const getTimestamp = () => {
    const now = new Date();
    return now.toTimeString().split(" ")[0]; // HH:MM:SS
  };

  const generateLog = useCallback((): LogEntry => {
    const template = logTemplates[Math.floor(Math.random() * logTemplates.length)];
    let message = template.message;

    // Replace placeholders
    message = message.replace("{device}", devices[Math.floor(Math.random() * devices.length)]);
    message = message.replace("{peer}", `12D3Koo...${Math.random().toString(36).substring(7)}`);
    message = message.replace("{ip}", `192.168.1.${Math.floor(Math.random() * 255)}`);
    message = message.replace("{count}", Math.floor(Math.random() * 100).toString());
    message = message.replace("{hex}", Math.random().toString(16).substring(2, 6).toUpperCase());
    message = message.replace("{action}", actions[Math.floor(Math.random() * actions.length)]);
    message = message.replace("{table}", tables[Math.floor(Math.random() * tables.length)]);
    message = message.replace("{timestamp}", (Date.now() / 1000).toFixed(6));
    message = message.replace("{peers}", Math.floor(Math.random() * 5 + 1).toString());
    message = message.replace("{ops}", Math.floor(Math.random() * 10).toString());
    message = message.replace("{size}", (Math.random() * 5 + 0.5).toFixed(1));
    message = message.replace("{latency}", Math.floor(Math.random() * 50 + 5).toString());

    return {
      id: logIdRef.current++,
      timestamp: getTimestamp(),
      level: template.level,
      message: message,
      highlight: template.highlight,
    };
  }, []);

  const addInitialLogs = useCallback(() => {
    const initialLogs: LogEntry[] = [
      { id: logIdRef.current++, timestamp: getTimestamp(), level: "DAEMON", message: "ahenk-cli v0.1.0 starting...", highlight: false },
      { id: logIdRef.current++, timestamp: getTimestamp(), level: "DB", message: "SQLite database initialized at ~/.ahenk/data.db", highlight: false },
      { id: logIdRef.current++, timestamp: getTimestamp(), level: "DB", message: "Running schema migrations...", highlight: false },
      { id: logIdRef.current++, timestamp: getTimestamp(), level: "DB", message: "✓ Migration 001_create_users.sql applied", highlight: false },
      { id: logIdRef.current++, timestamp: getTimestamp(), level: "LIBP2P", message: "Initializing P2P transport layer...", highlight: false },
      { id: logIdRef.current++, timestamp: getTimestamp(), level: "LIBP2P", message: "Peer ID: 12D3KooWRjH7QxP9zK4vN2mE8sT6wL1bF5cY3dA8hX9qG2sJ7vUm", highlight: false },
      { id: logIdRef.current++, timestamp: getTimestamp(), level: "LIBP2P", message: "Listening on /ip4/0.0.0.0/tcp/4001", highlight: false },
      { id: logIdRef.current++, timestamp: getTimestamp(), level: "MDNS", message: "mDNS discovery service started", highlight: false },
    ];
    setLogs(initialLogs);
  }, []);

  useEffect(() => {
    setMounted(true);
    addInitialLogs();

    const interval = setInterval(() => {
      const newLog = generateLog();
      setLogs((prev) => {
        const updated = [...prev, newLog];
        // Keep only last 50 logs to prevent memory issues
        return updated.slice(-50);
      });
    }, 2000); // Add new log every 2 seconds

    return () => clearInterval(interval);
  }, [addInitialLogs, generateLog]);

  useEffect(() => {
    // Auto-scroll to bottom when new logs are added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <section className="w-full h-full bg-background-dark/80 border border-secondary-accent/30 p-6 sm:p-8 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-secondary-accent/5 to-transparent z-0 opacity-10"></div>
      <div className="flex items-center gap-2 p-2 bg-primary/10 border-b border-primary/30 mb-3 relative z-10">
        <div className="w-2.5 h-2.5 bg-primary animate-pulse"></div>
        <div className="w-2.5 h-2.5 bg-primary"></div>
        <div className="w-2.5 h-2.5 bg-primary"></div>
        <span className="text-sm sm:text-base text-primary ml-auto uppercase font-bold">
          STATUS::STREAM_ACTIVE
        </span>
      </div>
      <div
        ref={terminalRef}
        className="flex-grow overflow-y-auto text-left font-code text-sm sm:text-base text-text-light/90 relative z-10 p-2 sm:p-3 scroll-smooth"
      >
        {!mounted ? (
          <div className="flex items-center justify-center h-full text-secondary-accent">
            <span className="blinking-cursor text-lg">INITIALIZING...</span>
          </div>
        ) : (
          <pre>
            <code className="language-bash">
              {logs.map((log) => (
                <span key={log.id}>
                  <span className={log.highlight ? "text-primary font-bold" : ""}>
                    [{log.timestamp}] &lt;{log.level}&gt; {log.message}
                  </span>
                  <br />
                </span>
              ))}
            </code>
          </pre>
        )}
      </div>
    </section>
  );
};

export default LiveTerminal;
