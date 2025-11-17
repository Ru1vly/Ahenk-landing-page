"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  Lightbulb,
  AlertTriangle,
  Info,
  CheckCircle2,
  Zap,
  Rocket,
  Terminal,
  Code2,
  FileCode,
  Database,
  Server,
  GitBranch,
  PackageCheck,
  Heart,
  Star,
  Sparkles,
  Flag,
  Target,
  Shield,
  Lock,
  Key,
  RefreshCw,
  PhoneOff,
  Smartphone,
  Globe,
  Settings,
  XCircle
} from "lucide-react";

interface DocSection {
  id: string;
  title: string;
  url: string;
}

const docSections: DocSection[] = [
  { id: "overview", title: "Overview", url: "https://raw.githubusercontent.com/Ru1vly/nexus-core/main/README.md" },
  { id: "cli", title: "CLI Usage", url: "https://raw.githubusercontent.com/Ru1vly/nexus-core/main/docs/CLI_USAGE.md" },
  { id: "migrations", title: "Database Migrations", url: "https://raw.githubusercontent.com/Ru1vly/nexus-core/main/docs/DATABASE_MIGRATIONS.md" },
  { id: "quick-start", title: "Migration Quick Start", url: "https://raw.githubusercontent.com/Ru1vly/nexus-core/main/docs/MIGRATION_QUICK_START.md" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollHeight > clientHeight) {
            const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollProgress(progress);
        } else {
            setScrollProgress(100);
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  useEffect(() => {
    const fetchDocs = async () => {
      setLoading(true);
      const section = docSections.find(s => s.id === activeSection);
      if (section) {
        try {
          const response = await fetch(section.url);
          const text = await response.text();
          setContent(text);
        } catch {
          setContent("Error loading documentation. Please try again later.");
        }
      }
      setLoading(false);
    };

    fetchDocs();
  }, [activeSection]);

  const renderMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    const html: React.JSX.Element[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let codeBlockLang = '';
    let inBlockquote = false;
    let blockquoteContent: string[] = [];

    const isShieldsBadge = (line: string) => {
      // Detect shields.io badges: [![...](...shields.io...)](...)  or  ![...](...shields.io...)
      return /!\[.*\]\(.*shields\.io.*\)/.test(line) ||
             /!\[.*\]\(.*img\.shields\.io.*\)/.test(line) ||
             /!\[.*\]\(.*badge.*\)/.test(line);
    };

    const getIconForEmoji = (emoji: string) => {
      const iconMap: { [key: string]: React.JSX.Element } = {
        '💡': <Lightbulb className="w-5 h-5" />,
        '⚠️': <AlertTriangle className="w-5 h-5" />,
        '⚠': <AlertTriangle className="w-5 h-5" />,
        'ℹ️': <Info className="w-5 h-5" />,
        'ℹ': <Info className="w-5 h-5" />,
        '✅': <CheckCircle2 className="w-5 h-5" />,
        '✓': <CheckCircle2 className="w-5 h-5" />,
        '⚡': <Zap className="w-5 h-5" />,
        '🚀': <Rocket className="w-5 h-5" />,
        '💻': <Terminal className="w-5 h-5" />,
        '📝': <FileCode className="w-5 h-5" />,
        '🔧': <Code2 className="w-5 h-5" />,
        '🗄️': <Database className="w-5 h-5" />,
        '🗄': <Database className="w-5 h-5" />,
        '🖥️': <Server className="w-5 h-5" />,
        '🖥': <Server className="w-5 h-5" />,
        '🌿': <GitBranch className="w-5 h-5" />,
        '📦': <PackageCheck className="w-5 h-5" />,
        '❤️': <Heart className="w-5 h-5" />,
        '❤': <Heart className="w-5 h-5" />,
        '⭐': <Star className="w-5 h-5" />,
        '✨': <Sparkles className="w-5 h-5" />,
        '🚩': <Flag className="w-5 h-5" />,
        '🎯': <Target className="w-5 h-5" />,
        '🛡️': <Shield className="w-5 h-5" />,
        '🛡': <Shield className="w-5 h-5" />,
        '🔒': <Lock className="w-5 h-5" />,
        '🔑': <Key className="w-5 h-5" />,
        '🔄': <RefreshCw className="w-5 h-5" />,
        '📴': <PhoneOff className="w-5 h-5" />,
        '🔐': <Lock className="w-5 h-5" />,
        '📱': <Smartphone className="w-5 h-5" />,
        '🌍': <Globe className="w-5 h-5" />,
        '⚙️': <Settings className="w-5 h-5" />,
        '⚙': <Settings className="w-5 h-5" />,
        '❌': <XCircle className="w-5 h-5" />,
      };
      return iconMap[emoji] || <Info className="w-5 h-5" />;
    };

    const renderTextWithIcons = (text: string): (string | React.JSX.Element)[] => {
      // Remove shields.io badges
      let cleaned = text
        .replace(/!\[.*?\]\(.*?shields\.io.*?\)/g, '')
        .replace(/!\[.*?\]\(.*?img\.shields\.io.*?\)/g, '')
        .replace(/\[!\[.*?\]\(.*?shields\.io.*?\)\]\(.*?\)/g, '');

      // List of emojis we support
      const emojiPlaceholders: { marker: string; emoji: string }[] = [];
      const emojiRegex = /(💡|⚠️|⚠|ℹ️|ℹ|✅|✓|⚡|🚀|💻|📝|🔧|🗄️|🗄|🖥️|🖥|🌿|📦|❤️|❤|⭐|✨|🚩|🎯|🛡️|🛡|🔒|🔑|🔄|📴|🔐|📱|🌍|⚙️|⚙|❌)/g;

      // Step 1: Replace known emojis with HTML comment markers (won't break HTML structure)
      let withMarkers = cleaned.replace(emojiRegex, (match) => {
        const marker = `<!--EMOJI${emojiPlaceholders.length}-->`;
        emojiPlaceholders.push({ marker, emoji: match });
        return marker;
      });

      // Step 2: Remove all other unknown emojis
      withMarkers = withMarkers.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{FE00}-\u{FE0F}\u{200D}]/gu, '');

      // Step 3: Apply markdown formatting (bold, italic, links, code)
      const formatted = withMarkers
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-neon-pink underline transition-colors">$1</a>')
        // Bold - using inline styles for guaranteed rendering
        .replace(/\*\*([^*]+)\*\*/g, '<strong style="color: #40e0d0; font-weight: 700;">$1</strong>')
        // Italic
        .replace(/\*([^*]+)\*/g, '<em class="text-secondary-accent italic">$1</em>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code class="bg-primary/10 text-primary px-1.5 py-0.5 rounded font-code text-sm border border-primary/20">$1</code>');

      // Step 4: Split by comment markers (safe - won't break HTML tags)
      if (emojiPlaceholders.length === 0) {
        return [formatted];
      }

      const markerRegex = new RegExp(`(${emojiPlaceholders.map(ep => ep.marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
      const parts = formatted.split(markerRegex);

      return parts.map((part, idx) => {
        // Check if this part is a marker
        const emojiPlaceholder = emojiPlaceholders.find(ep => ep.marker === part);
        if (emojiPlaceholder) {
          return <span key={`icon-${idx}`} className="inline-flex items-center text-primary mx-0.5">{getIconForEmoji(emojiPlaceholder.emoji)}</span>;
        }

        // Skip empty parts
        if (!part) return '';

        return <span key={idx} dangerouslySetInnerHTML={{ __html: part }} />;
      });
    };

    const formatInline = (text: string) => {
      // This is for use in dangerouslySetInnerHTML (no icons, just HTML)
      const formatted = text
        // Remove shield badges
        .replace(/!\[.*?\]\(.*?shields\.io.*?\)/g, '')
        .replace(/!\[.*?\]\(.*?img\.shields\.io.*?\)/g, '')
        .replace(/\[!\[.*?\]\(.*?shields\.io.*?\)\]\(.*?\)/g, '')
        // Remove all emojis (comprehensive emoji regex covering all emoji ranges)
        .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{FE00}-\u{FE0F}\u{200D}]/gu, '');

      return formatted
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-neon-pink underline transition-colors">$1</a>')
        // Bold - using inline styles for guaranteed rendering
        .replace(/\*\*([^*]+)\*\*/g, '<strong style="color: #40e0d0; font-weight: 700;">$1</strong>')
        // Italic
        .replace(/\*([^*]+)\*/g, '<em class="text-secondary-accent italic">$1</em>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code class="bg-primary/10 text-primary px-1.5 py-0.5 rounded font-code text-sm border border-primary/20">$1</code>');
    };

    lines.forEach((line, index) => {
      // Skip shields.io badge lines entirely
      if (isShieldsBadge(line)) {
        return;
      }

      // Code blocks
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBlockLang = line.replace('```', '').trim();
          codeBlockContent = [];
        } else {
          inCodeBlock = false;
          html.push(
            <div key={`code-${index}`} className="my-6 relative group">
              {codeBlockLang && (
                <div className="absolute -top-3 left-4 bg-primary/20 border border-primary/40 px-3 py-1 text-xs font-code text-primary uppercase">
                  [{codeBlockLang}]
                </div>
              )}
              <pre className="bg-background-dark/50 border-2 border-primary/30 p-5 rounded overflow-x-auto shadow-[0_0_20px_rgba(64,224,208,0.1)] group-hover:shadow-[0_0_30px_rgba(64,224,208,0.2)] transition-shadow">
                <code className="font-code text-sm text-text-light leading-relaxed">{codeBlockContent.join('\n')}</code>
              </pre>
            </div>
          );
          codeBlockContent = [];
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // Blockquotes/Callouts
      if (line.startsWith('> ')) {
        if (!inBlockquote) {
          inBlockquote = true;
          blockquoteContent = [];
        }
        blockquoteContent.push(line.replace('> ', ''));
        return;
      } else if (inBlockquote) {
        inBlockquote = false;
        const content = blockquoteContent.join(' ');
        const type = content.toLowerCase().includes('note') ? 'note' :
                     content.toLowerCase().includes('warning') ? 'warning' :
                     content.toLowerCase().includes('tip') ? 'tip' : 'info';
        const colors = {
          note: 'border-primary/50 bg-primary/5 text-primary',
          warning: 'border-neon-pink/50 bg-neon-pink/5 text-neon-pink',
          tip: 'border-secondary-accent/50 bg-secondary-accent/5 text-secondary-accent',
          info: 'border-primary/30 bg-primary/5 text-primary'
        };
        const icons = {
          note: <Lightbulb className="w-5 h-5 flex-shrink-0" />,
          warning: <AlertTriangle className="w-5 h-5 flex-shrink-0" />,
          tip: <Sparkles className="w-5 h-5 flex-shrink-0" />,
          info: <Info className="w-5 h-5 flex-shrink-0" />
        };
        html.push(
          <div key={`quote-${index}`} className={`my-4 border-l-4 ${colors[type]} p-4 rounded-r shadow-sm`}>
            <div className="flex items-start gap-3">
              <span className={colors[type]}>
                {icons[type]}
              </span>
              <p className="text-text-light text-sm leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: formatInline(content) }} />
            </div>
          </div>
        );
        blockquoteContent = [];
      }

      // Horizontal rule
      if (line.trim() === '---' || line.trim() === '***') {
        html.push(<hr key={index} className="my-8 border-t border-primary/30" />);
        return;
      }

      // Headers
      if (line.startsWith('#### ')) {
        const headerText = line.replace('#### ', '');
        const parts = renderTextWithIcons(headerText);
        html.push(
          <h4 key={index} className="text-primary text-lg font-headline uppercase mt-5 mb-2 flex items-center gap-2">
            <span className="text-neon-pink">▸</span>
            <span className="flex items-center gap-1">
              {parts.map((part, i) =>
                typeof part === 'string' ?
                  <span key={i} dangerouslySetInnerHTML={{ __html: part }} /> :
                  part
              )}
            </span>
          </h4>
        );
      } else if (line.startsWith('### ')) {
        const headerText = line.replace('### ', '');
        const parts = renderTextWithIcons(headerText);
        html.push(
          <h3 key={index} className="text-primary text-xl font-headline uppercase mt-6 mb-3 flex items-center gap-2">
            <span className="text-neon-pink">■</span>
            <span className="flex items-center gap-1">
              {parts.map((part, i) =>
                typeof part === 'string' ?
                  <span key={i} dangerouslySetInnerHTML={{ __html: part }} /> :
                  part
              )}
            </span>
          </h3>
        );
      } else if (line.startsWith('## ')) {
        const headerText = line.replace('## ', '');
        const parts = renderTextWithIcons(headerText);
        html.push(
          <h2 key={index} className="text-primary text-2xl font-headline uppercase mt-8 mb-4 border-b-2 border-primary/30 pb-3 shadow-[0_2px_10px_rgba(64,224,208,0.1)] flex items-center gap-2">
            {parts.map((part, i) =>
              typeof part === 'string' ?
                <span key={i} dangerouslySetInnerHTML={{ __html: part }} /> :
                part
            )}
          </h2>
        );
      } else if (line.startsWith('# ')) {
        const headerText = line.replace('# ', '');
        const parts = renderTextWithIcons(headerText);
        html.push(
          <h1 key={index} className="text-primary text-3xl font-headline uppercase mt-4 mb-6 pb-4 border-b-2 border-neon-pink/30 flex items-center gap-2">
            {parts.map((part, i) =>
              typeof part === 'string' ?
                <span key={i} dangerouslySetInnerHTML={{ __html: part }} /> :
                part
            )}
          </h1>
        );
      }
      // Lists
      else if (line.match(/^(\s*)[-*] /)) {
        const indent = line.match(/^(\s*)/)![0].length;
        const content = line.replace(/^\s*[-*] /, '');
        const parts = renderTextWithIcons(content);
        html.push(
          <li key={index} className={`text-text-light mb-2 list-none flex items-start gap-2`} style={{ marginLeft: `${indent * 8}px` }}>
            <span className="text-primary mt-1">▸</span>
            <span className="flex-1">
              {parts.map((part, i) =>
                typeof part === 'string' ?
                  <span key={i} dangerouslySetInnerHTML={{ __html: part }} /> :
                  part
              )}
            </span>
          </li>
        );
      }
      // Numbered lists
      else if (/^\d+\. /.test(line)) {
        const content = line.replace(/^\d+\. /, '');
        const parts = renderTextWithIcons(content);
        html.push(
          <li key={index} className="text-text-light ml-6 mb-2 list-decimal marker:text-primary marker:font-bold">
            <span>
              {parts.map((part, i) =>
                typeof part === 'string' ?
                  <span key={i} dangerouslySetInnerHTML={{ __html: part }} /> :
                  part
              )}
            </span>
          </li>
        );
      }
      // Regular paragraphs
      else if (line.trim()) {
        const parts = renderTextWithIcons(line);
        html.push(
          <p key={index} className="text-text-light mb-4 leading-relaxed">
            {parts.map((part, i) =>
              typeof part === 'string' ?
                <span key={i} dangerouslySetInnerHTML={{ __html: part }} /> :
                part
            )}
          </p>
        );
      }
      // Empty lines
      else {
        html.push(<div key={index} className="h-3" />);
      }
    });

    return html;
  };

  const NavigationContent = () => (
    <>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent z-0 opacity-10 pointer-events-none"></div>

      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary shadow-[0_0_8px_rgba(64,224,208,0.5)]"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-neon-pink shadow-[0_0_8px_rgba(255,0,110,0.5)]"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-neon-pink shadow-[0_0_8px_rgba(255,0,110,0.5)]"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary shadow-[0_0_8px_rgba(64,224,208,0.5)]"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4 border-b border-primary/30 pb-2 shadow-[0_2px_10px_rgba(64,224,208,0.1)]">
          <div className="w-2 h-2 bg-primary animate-pulse rounded-full shadow-[0_0_8px_rgba(64,224,208,0.8)]"></div>
          <h2 className="text-primary text-sm font-headline uppercase">
            [NAVIGATION]
          </h2>
        </div>
        <nav className="flex flex-col gap-2">
          {docSections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                if (window.innerWidth < 1024) {
                  setSidebarOpen(false);
                }
              }}
              className={`w-full text-left px-4 py-3 font-code text-sm uppercase transition-all duration-200 border ${
                activeSection === section.id
                  ? "bg-primary/20 text-primary border-primary shadow-[0_0_10px_rgba(64,224,208,0.3)]"
                  : "text-text-light bg-background-dark/50 hover:bg-primary/10 hover:text-primary border-primary/20 hover:border-primary/50"
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>

        <div className="mt-6 pt-4 border-t border-neon-pink/30 shadow-[0_-2px_10px_rgba(255,0,110,0.1)]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-neon-pink animate-pulse rounded-full shadow-[0_0_8px_rgba(255,0,110,0.8)]"></div>
            <h3 className="text-neon-pink text-xs font-headline uppercase">
              [QUICK LINKS]
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/Ru1vly/nexus-core"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-2 text-secondary-accent hover:text-primary text-xs font-code transition-colors group px-4 py-2 border border-primary/20 hover:border-primary/50 bg-background-dark/50 hover:bg-primary/10"
            >
              <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
              <span>GITHUB REPO</span>
            </a>
            <a
              href="https://github.com/Ru1vly/nexus-core/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-2 text-secondary-accent hover:text-primary text-xs font-code transition-colors group px-4 py-2 border border-neon-pink/20 hover:border-neon-pink/50 bg-background-dark/50 hover:bg-neon-pink/10"
            >
              <span className="text-neon-pink group-hover:translate-x-1 transition-transform">→</span>
              <span>REPORT ISSUE</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background-dark text-text-light overflow-hidden">
      {/* Background decorations */}
      <div className="surveillance-grid-overlay"></div>
      <div className="scanlines fixed inset-0 z-20 pointer-events-none"></div>
      <div className="grainy-overlay"></div>

      {/* Extra grid overlay with different color */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#40e0d0_1px,transparent_1px),linear-gradient(to_bottom,#40e0d0_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-1 h-1 bg-primary animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-neon-pink animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-primary animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-neon-pink animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-primary animate-pulse" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-neon-pink animate-pulse" style={{animationDelay: '1.2s'}}></div>
      </div>

      {/* Animated corner accents - full screen */}
      <div className="fixed top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-primary/30 pointer-events-none z-10"></div>
      <div className="fixed top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-neon-pink/30 pointer-events-none z-10"></div>
      <div className="fixed bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-neon-pink/30 pointer-events-none z-10"></div>
      <div className="fixed bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-primary/30 pointer-events-none z-10"></div>

      {/* Pulsing accent lines */}
      <div className="fixed top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none z-10 animate-pulse"></div>
      <div className="fixed top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent pointer-events-none z-10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="fixed top-1/2 left-0 h-full w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none z-10 animate-pulse" style={{animationDelay: '1s'}}></div>

      <Header />

      <div className="pt-16 pb-12 px-4 md:px-6 lg:px-8 relative z-30 min-h-screen">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-8 relative min-h-[calc(100vh-7rem)]">
          {/* --- LEFT SIDEBAR (Desktop) --- */}
          <div className="hidden lg:block sticky top-16 h-fit max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-8 pb-4">
              <aside className="bg-background-dark/95 backdrop-blur-sm border border-primary/30 p-6 shadow-[0_0_30px_rgba(64,224,208,0.2)] relative">
              <NavigationContent />
            </aside>
            {/* Back to Home Button */}
            <Link href="/" className="block">
                <div className="group relative bg-background-dark/95 backdrop-blur-sm border border-neon-pink/30 p-6 h-28 flex items-center justify-center text-center transition-all duration-300 hover:border-neon-pink hover:shadow-[0_0_20px_rgba(255,0,110,0.5)]">
                    <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-neon-pink/50 group-hover:border-neon-pink"></div>
                    <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-neon-pink/50 group-hover:border-neon-pink"></div>
                    <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-neon-pink/50 group-hover:border-neon-pink"></div>
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-neon-pink/50 group-hover:border-neon-pink"></div>
                    <span className="font-headline text-lg uppercase text-neon-pink transition-all duration-300 group-hover:text-white group-hover:tracking-widest">
                        [ RETURN HOME ]
                    </span>
                </div>
            </Link>
            {/* Reading Progress Indicator */}
            <div className="bg-background-dark/95 backdrop-blur-sm border border-primary/30 p-6 h-28 relative">
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary"></div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-primary animate-pulse rounded-full"></div>
                    <h3 className="text-primary text-sm font-headline uppercase">[READ_PROGRESS]</h3>
                </div>
                <div className="w-full bg-primary/10 border border-primary/20 h-4 mt-2">
                    <div className="bg-primary h-full transition-all duration-200" style={{ width: `${scrollProgress}%` }}></div>
                </div>
                <p className="text-right font-code text-primary text-xl mt-2">{Math.round(scrollProgress)}%</p>
            </div>
            </div>
          </div>

          {/* --- MAIN CONTENT --- */}
          <main className="relative z-10 lg:col-start-2">
            <div className="bg-background-dark/95 backdrop-blur-sm border border-secondary-accent/30 p-8 md:p-12 relative overflow-hidden min-h-[calc(100vh-7rem)] shadow-[0_0_40px_rgba(128,128,128,0.1)]">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-secondary-accent/5 to-transparent z-0 opacity-10 pointer-events-none"></div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary shadow-[0_0_10px_rgba(64,224,208,0.5)]"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-neon-pink shadow-[0_0_10px_rgba(255,0,110,0.5)]"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-neon-pink shadow-[0_0_10px_rgba(255,0,110,0.5)]"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary shadow-[0_0_10px_rgba(64,224,208,0.5)]"></div>

              {/* Inner corner accents */}
              <div className="absolute top-12 left-12 w-3 h-3 border-l border-t border-primary/50"></div>
              <div className="absolute top-12 right-12 w-3 h-3 border-r border-t border-neon-pink/50"></div>
              <div className="absolute bottom-12 left-12 w-3 h-3 border-l border-b border-neon-pink/50"></div>
              <div className="absolute bottom-12 right-12 w-3 h-3 border-r border-b border-primary/50"></div>

              {/* Data stream effects */}
              <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 animate-pulse"></div>
              <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-neon-pink/0 via-neon-pink/20 to-neon-pink/0 animate-pulse" style={{animationDelay: '0.7s'}}></div>

              {/* Animated border segments */}
              <div className="absolute top-0 left-20 w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 right-20 w-16 h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>

              {/* Content header with status */}
              <div className="relative z-10 flex items-center justify-between mb-6 pb-4 border-b border-primary/20 shadow-[0_2px_10px_rgba(64,224,208,0.1)]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary animate-pulse rounded-full shadow-[0_0_8px_rgba(64,224,208,0.8)]"></div>
                  <h3 className="text-primary text-sm font-headline uppercase font-code">
                    [DOCUMENTATION // {docSections.find(s => s.id === activeSection)?.title.toUpperCase()}]
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-xs font-code text-secondary-accent border border-neon-pink/30 px-2 py-1">
                    <div className="w-2 h-2 bg-neon-pink animate-pulse rounded-full shadow-[0_0_8px_rgba(255,0,110,0.8)]" />
                    <span>ONLINE</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-xs font-code text-secondary-accent border border-primary/30 px-2 py-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>SECURE</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <div className="flex items-center gap-3 text-primary">
                      <div className="w-3 h-3 bg-primary animate-pulse rounded-full" />
                      <div className="w-3 h-3 bg-primary animate-pulse rounded-full" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-primary animate-pulse rounded-full" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span className="font-code text-sm uppercase text-primary">LOADING DOCUMENTATION...</span>
                  </div>
                ) : (
                  <article className="prose prose-invert max-w-none">
                    <div className="space-y-1">
                      {renderMarkdown(content)}
                    </div>
                  </article>
                )}
              </div>

              {/* Status indicator at bottom */}
              <div className="relative z-10 mt-12 pt-6 border-t border-neon-pink/20 shadow-[0_-2px_10px_rgba(255,0,110,0.1)] flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-code text-secondary-accent border border-neon-pink/30 px-2 py-1">
                  <div className="w-2 h-2 bg-neon-pink animate-pulse rounded-full shadow-[0_0_8px_rgba(255,0,110,0.8)]" />
                  <span>SYNC STATUS: <span className="text-neon-pink">COMPLETE</span></span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xs font-code text-secondary-accent border border-primary/30 px-2 py-1">
                    PEER COUNT: <span className="text-primary">42</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-xs font-code text-secondary-accent border border-primary/30 px-2 py-1">
                    <div className="w-2 h-2 bg-primary animate-pulse rounded-full shadow-[0_0_8px_rgba(64,224,208,0.8)]"></div>
                    <span>LATENCY: <span className="text-primary">12ms</span></span>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* --- RIGHT SIDEBAR (Desktop) --- */}
          {/* --- RIGHT SIDEBAR (Desktop) --- */}
          <div className="hidden lg:block sticky top-16 h-fit max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-8 pb-4">
              {/* Placeholder Image */}
              <div className="bg-background-dark/95 backdrop-blur-sm border border-neon-pink/30 p-4 h-[400px] relative group overflow-hidden flex items-center justify-center">
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-neon-pink transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-neon-pink transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-neon-pink transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-neon-pink transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
                  <img src="https://i.pinimg.com/564x/05/60/34/05603426e952219757e5e95b0f17e7a5.jpg" alt="Cyberpunk Aesthetic" className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neon-pink/20 to-transparent"></div>
              </div>
              {/* Digital Clock */}
              <div className="bg-background-dark/95 backdrop-blur-sm border border-neon-pink/30 p-6 h-28 relative flex flex-col justify-center items-center">
                  <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-neon-pink/50"></div>
                  <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-neon-pink/50"></div>
                  <div className="flex items-center gap-2 mb-2 absolute top-4 left-6">
                      <div className="w-2 h-2 bg-neon-pink animate-pulse rounded-full"></div>
                      <h3 className="text-neon-pink text-xs font-headline uppercase">[SYSTEM_TIME]</h3>
                  </div>
                  <p className="text-neon-pink font-code text-4xl tracking-widest">
                      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
                  </p>
              </div>
            </div>
          </div>

          {/* --- MOBILE NAVIGATION --- */}
          <div className="lg:hidden fixed bottom-20 right-4 z-50 flex flex-col gap-3">
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="bg-background-dark/95 backdrop-blur-sm border-2 border-primary px-4 py-3 text-xs font-code uppercase text-primary hover:bg-primary/10 transition-all shadow-[0_0_20px_rgba(64,224,208,0.3)] hover:shadow-[0_0_30px_rgba(64,224,208,0.5)]"
            >
                {sidebarOpen ? "[CLOSE]" : "[MENU]"}
            </button>
            <Link
                href="/"
                className="bg-background-dark/95 backdrop-blur-sm border-2 border-neon-pink px-4 py-3 text-xs font-code uppercase text-neon-pink hover:bg-neon-pink/10 transition-all shadow-[0_0_20px_rgba(255,0,110,0.3)] hover:shadow-[0_0_30px_rgba(255,0,110,0.5)] text-center"
            >
                [HOME]
            </Link>
          </div>
          <aside
              className={`${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
              } lg:hidden fixed top-0 left-0 h-full w-72 bg-background-dark/95 backdrop-blur-sm border-r border-primary/30 p-6 transition-transform duration-300 z-40 overflow-y-auto shadow-[0_0_30px_rgba(64,224,208,0.2)]`}
          >
              <NavigationContent />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
