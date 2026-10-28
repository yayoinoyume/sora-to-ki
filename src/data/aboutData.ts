// 關於頁（about/AboutFall）落地之後往地底挖的那幾層：手上的東西、做過的事。
// 成長軌跡（下墜時經過的那幾年）在 journeyData。

/** 地表：一路帶著的東西，分領域；領域的名字在 locale 的 aboutFall.skill.* */
export const SKILL_GROUPS: { key: string; items: string[] }[] = [
  {
    key: 'frontend',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Vite',
      'Framer Motion',
      'Three.js',
      'WebGL',
      'Tauri',
      'PWA',
      'Tailwind CSS',
      'Bootstrap',
      'HTML5',
      'CSS3',
    ],
  },
  {
    key: 'backend',
    items: [
      'Rust',
      'Express',
      'Node.js',
      'ASP.NET',
      '.NET 8',
      'Spring Boot',
      'FastAPI',
      'Pydantic',
      'Jinja2',
      'discord.py',
      'Go',
      'Java',
      'Python',
      'C++',
      'C',
    ],
  },
  { key: 'mobile', items: ['Kotlin', 'Android', 'Jetpack Compose', 'Flutter', 'Dart'] },
  {
    key: 'devops',
    items: [
      'Docker',
      'Cloudflare',
      'Turborepo',
      'pnpm',
      'ESLint',
      'Prettier',
      'Vitest',
      'Playwright',
      'GitLab CI/CD',
      'GitHub',
      'n8n',
      'Nginx',
      'Traefik',
      'Linux',
      'Bash',
      'PowerShell',
    ],
  },
  { key: 'design', items: ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro', 'Lightroom'] },
  { key: 'data', items: ['PostgreSQL', 'MS SQL Server', 'MongoDB', 'SQLite', 'Redis', 'Firebase', 'JSON'] },
  { key: 'network', items: ['HTTP/HTTPS', 'TCP/IP', 'DNS', 'SSL/TLS', 'OAuth', 'JWT', 'WebSocket', 'CDN'] },
  {
    key: 'productivity',
    items: ['VS Code', 'Postman', 'Notion', 'Obsidian', 'Markdown', 'Mermaid', 'Canva', 'Discord'],
  },
  {
    key: 'ai',
    items: ['Claude', 'Cursor', 'GitHub Copilot', 'Antigravity', 'Gemini', 'GPT', 'Codex CLI', 'MCP'],
  },
  { key: 'teaching', items: ['Scratch', 'pygame', 'MCE (Minecraft)', 'App Inventor'] },
];

/** 第一層：做過的事。期間不分語系，公司與職稱分語系（順序跟 WORK_PERIODS 一樣） */
export const WORK_PERIODS: string[] = [];

export const WORK_BY_LANG: Record<string, { title: string; role: string }[]> = {
  'zh-TW': [],
  'zh-CN': [],
  en: [],
  ja: [],
  ko: [],
};
