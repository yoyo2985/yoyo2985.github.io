(() => {
  if (window.__yoyoPreferencesReady) return;
  window.__yoyoPreferencesReady = true;
  const copy = {
    '首页': 'Home', '项目': 'Work', '关于': 'About', '简历': 'CV',
    '回到首页': 'Back to home', '主要导航': 'Main navigation', '显示偏好': 'Display preferences', '移动端导航': 'Mobile navigation', '研究方向概览': 'Research focus overview', '项目分类筛选': 'Project filters',
    '主题': 'Theme', '系统': 'System', '日间': 'Light', '夜间': 'Dark', '跟随系统': 'Follow system',
    '语言': 'Language', '中文': 'Chinese', '跳到主要内容': 'Skip to main content',
    '同济大学 · 智能制造工程': 'Tongji University · Intelligent Manufacturing',
    '先把问题': 'Understand the problem', '想清楚': 'clearly', '，再动手。': ', then build.',
    '我是 Yoyo，在同济读智能制造。我现在主要做医学影像 AI、深度学习和机械设计，也会把这里当作自己的项目档案。': 'I am Yoyo, an Intelligent Manufacturing student at Tongji University. I currently work on medical imaging AI, deep learning, and mechanical design, and use this site as an archive of my projects.',
    '看看我的项目': 'See my projects',
    '把复杂问题': 'I like turning hard problems', '变成': 'into answers that can be ', '可验证': 'tested', '的答案。': '.',
    '我是 Yoyo，关注医学影像 AI、深度学习与智能机械。我的作品横跨算法建模、工程设计和真实问题的系统化解决。': 'I am Yoyo. I work across medical imaging AI, deep learning, and mechanical engineering, with a focus on building and testing complete solutions.',
    '查看代表项目': 'Selected work', '阅读个人简历': 'Read my CV',
    '研究，不只停留在想法。': 'Ideas are only the starting point.',
    '最近在做的几件事。': 'A few things I am working on.',
    '这里放着我目前最想介绍的项目。每一项都有完整的背景、过程和结果，也记录了中间遇到的问题。': 'These are the projects I most want to share right now. Each page covers the background, process, results, and problems I encountered along the way.',
    '从数据、模型到机械结构，我把每个项目组织成一条可以被理解、验证和继续推进的路径。': 'From data and models to mechanical structures, each project records a process that can be understood, tested, and improved.',
    '肺癌脑膜转移预测': 'Leptomeningeal metastasis prediction',
    '融合 MRI 影像、Transformer 与可解释 AI 的临床预测系统。': 'A clinical prediction project combining MRI, Transformers, and model interpretation.',
    '航空发动机剩余寿命预测': 'Aero-engine remaining life prediction',
    '基于 NASA C-MAPSS 数据集的时序退化建模与寿命预测。': 'Time-series degradation modeling with the NASA C-MAPSS dataset.',
    '减速箱系统设计': 'Gearbox system design',
    '从参数计算、结构设计到工程图与装配动画的完整工程闭环。': 'A complete workflow from calculations and structure design to drawings and assembly animation.',
    '浏览全部项目': 'Browse all projects', '浏览全部': 'Browse all',
    '查看 3D 打印、数学建模、机器人与机械创新项目。': 'See projects in 3D printing, mathematical modeling, robotics, and mechanical design.',
    '用结果标记成长。': 'A few milestones so far.',
    '一些阶段性的记录。': 'A few milestones so far.', '包括课程、比赛和项目。以后有新的进展，我也会继续补在这里。': 'These come from courses, competitions, and projects. I will keep adding new progress here.',
    '这些数字不是终点，而是我在研究、竞赛与工程实践中持续迭代的坐标。': 'These are simply markers from ongoing study, competitions, and engineering practice.',
    '专业排名': 'Major ranking', '智能制造类': 'Intelligent Manufacturing', '跨学科项目': 'Cross-disciplinary projects',
    '医学影像': 'Medical imaging', '深度学习': 'Deep learning', '智能机械': 'Intelligent mechanics', 'AI / 医学 / 机械': 'AI / Medicine / Mechanics',
    '国家级': 'National level', '创新项目': 'Innovation project', '项目负责人': 'Project lead', '竞赛与荣誉': 'Awards and competitions', '持续更新': 'Still counting',
    '先理解问题，': 'Understand the problem,', '再选择技术。': 'then choose the tools.',
    '我喜欢在交叉地带工作：让算法理解医学影像，也让工程设计从真实需求出发。比“用了什么模型”更重要的，是问题如何被拆解、验证并形成完整闭环。': 'I enjoy working where disciplines meet: using algorithms to read medical images and grounding engineering choices in real needs. The process of framing and testing a problem matters more to me than the name of a model.',
    '我喜欢先弄清楚问题来自哪里，再决定该用模型、实验还是机械结构来解决。对我来说，过程是否讲得清、结果能不能复现，比模型名称更重要。': 'I like to understand where a problem comes from before deciding whether it needs a model, an experiment, or a mechanical design. A clear process and reproducible result matter more to me than the name of a model.',
    '认识完整的我': 'More about me', '让研究继续发生。': 'Keep the work moving.', 'AI 导览': 'Quick guide', 'PDF 简历': 'PDF résumé',
    '项目不是清单，': 'Projects are more than a list—', '而是': 'they show how I ', '思考的轨迹。': 'think.',
    '这些项目，': 'These projects show', '记录了我在': 'what I have been ', '做什么。': 'working on.',
    '从医学影像到机械结构，我把项目背景、自己的分工、采用的方法和已有结果整理在了这里。': 'From medical imaging to mechanical structures, these pages cover the background, my role, the methods, and the results so far.',
    '从医学影像到机械结构，每个项目都记录了我如何定义问题、选择方法、验证结果，并把研究推进到可展示的成果。': 'From medical images to mechanical structures, these projects show how I frame questions, choose methods, test results, and turn the work into something concrete.',
    '全部': 'All', 'AI 研究': 'AI research', '机械工程': 'Mechanical engineering', '建模': 'Modeling',
    '3D 打印质量与参数优化': '3D printing quality and parameter optimization',
    '以头部 MRI 为核心，探索 CNN、Transformer 与多模态信息融合的临床预测系统。': 'A clinical prediction project combining head MRI, CNNs, Transformers, and multimodal information.',
    '面向复杂退化序列，以 LSTM 和注意力机制构建可验证的剩余寿命预测框架。': 'A remaining-life prediction framework for complex degradation sequences using LSTM and attention.',
    '覆盖设计计算、三维结构、二维工程图和装配演示的机械设计完整闭环。': 'A complete mechanical design workflow covering calculations, 3D structure, engineering drawings, and assembly demonstration.',
    '把物理信息与机器学习带入增材制造质量控制，连接参数、过程与成型结果。': 'Using physical knowledge and machine learning to connect process parameters with print quality.',
    '叶菜洁净包装一体机': 'Leafy vegetable cleaning and packaging machine',
    '围绕清洗、沥干、包装三道工序，完成自动化设备的结构与传动设计。': 'Structural and transmission design for an automated cleaning, draining, and packaging workflow.',
    '数维杯数学建模': 'Shuwei Cup mathematical modeling',
    '从问题假设、数据分析、优化算法到论文表达的高强度协作实践。': 'A team project covering assumptions, data analysis, optimization, and technical writing.',
    '第一主持人': 'Lead researcher', '核心成员': 'Core member', '独立设计': 'Independent design', '机械设计': 'Mechanical design', '建模与编程': 'Modeling and programming',
    '国家级项目 · 金奖': 'National project · Gold award', '国豪论坛汇报': 'Guohao Forum presentation', '上海市创新项目': 'Shanghai innovation project', '课程项目': 'Course project', '上海市二等奖': 'Shanghai second prize', '竞赛项目': 'Competition project',
    '在工程与智能之间，': 'Between engineering and intelligence,', '寻找真实问题的': 'I look for practical ', '新解法。': 'ways forward.',
    '我是同济大学智能制造工程专业本科生 Yoyo。我的学习轨迹从机械与数学出发，逐渐延伸到深度学习、医学影像和具身智能。': 'I am Yoyo, an undergraduate in Intelligent Manufacturing at Tongji University. I started with mechanics and mathematics, and gradually moved into deep learning, medical imaging, and embodied intelligence.',
    '我享受把一个模糊问题拆成清晰路径的过程：理解场景、组织数据、建立模型、验证结果，再把它讲给别人听。': 'I enjoy turning an open-ended question into a clear path: understand the setting, organize the data, build and test a model, and explain the result clearly.',
    '我的工作方式': 'How I work',
    '技术会不断变化，但理解问题、连接知识和验证结果，是我希望长期保留的能力。': 'Tools change. I want to keep getting better at understanding problems, connecting ideas, and testing results.',
    '从问题出发': 'Start with the problem', '先确认问题值得解决，再决定模型、数据和工程路径。': 'First decide whether a problem is worth solving, then choose the data, model, and engineering path.',
    '跨过学科边界': 'Work across disciplines', '医学、AI 与机械不是三座孤岛，而是可以彼此解释的系统。': 'Medicine, AI, and mechanics are not isolated fields; each can help explain the others.',
    '让结果可验证': 'Make results testable', '用实验、图表、结构和文档，让想法能够被复现、被讨论。': 'Use experiments, figures, structures, and documentation so the work can be reproduced and discussed.',
    '一条仍在延伸的轨迹': 'A path still taking shape', '进入同济大学': 'Started at Tongji University',
    '机械工程与机器人学院 · 智能制造工程': 'School of Mechanical Engineering and Robotics · Intelligent Manufacturing',
    '专业起点': 'Starting point', '打牢数学与工程基础': 'Built a foundation in mathematics and engineering',
    '四学期绩点 5.0 / 5.0 / 4.88 / 4.78，智能制造类专业第一。': 'GPA over four semesters: 5.0 / 5.0 / 4.88 / 4.78; ranked first in the major.',
    '2024至今': '2024–Now', '2025至今': '2025–Now', '2024-2025；2025-2026连续两个学年': 'Two consecutive academic years: 2024–2025 and 2025–2026',
    '国家奖学金': 'National Scholarship', '把 AI 带入工程问题': 'Applied AI to engineering problems',
    '航空发动机 RUL、3D 打印质量控制、数学建模与机械创新。': 'Aero-engine RUL, 3D printing quality control, mathematical modeling, and mechanical design.',
    '研究实践': 'Research practice', '走向医学 AI 与具身智能': 'Moving toward medical AI and embodied intelligence',
    '聚焦 MRI、多模态深度学习、可解释 AI 与机器人系统。': 'Focusing on MRI, multimodal deep learning, model interpretation, and robotic systems.', '持续探索': 'In progress',
    '荣誉只是坐标，': 'Awards mark the journey,', '下一步仍然向前。': 'not the destination.',
    '中国大学生数学竞赛': 'Chinese Mathematics Competition', '上海市一等奖': 'Shanghai first prize', '国际工程力学奥林匹克竞赛': 'International Engineering Mechanics Olympiad', '个人二等奖 · 团体三等奖': 'Individual second prize · Team third prize', '国创赛校内选拔': 'National Innovation Competition selection', '金奖 · 国家级立项': 'Gold award · National-level project',
    '想继续了解我的具体实践？': 'Want to see the work in detail?', '从一个项目开始。': 'Start with a project.', '打开项目档案': 'Open the project archive',
    '智能制造工程本科生 · AI 研究者 · 工程实践者': 'Intelligent Manufacturing undergraduate · AI researcher · Engineering practitioner',
    '下载 PDF': 'Download PDF', '项目档案': 'Project archive',
    '同济大学机械工程与机器人学院，智能制造工程专业，关注医学影像 AI、时序预测与具身智能。': 'Intelligent Manufacturing student at Tongji University, working on medical imaging AI, time-series prediction, and embodied intelligence.',
    '同济大学': 'Tongji University', '机械工程与机器人学院 · 智能制造工程': 'School of Mechanical Engineering and Robotics · Intelligent Manufacturing',
    '四学期绩点：5.0 / 5.0 / 4.88 / 4.78': 'Four-semester GPA: 5.0 / 5.0 / 4.88 / 4.78', '智能制造类专业排名第一': 'Ranked first in Intelligent Manufacturing', '2024—2025、2025—2026 学年国家奖学金': 'National Scholarship, 2024–2025 and 2025–2026',
    '2025—2026 学年度': '2025–2026 academic year', '国创赛校内选拔赛金奖': 'Gold Award, National Innovation Competition campus selection', '国家级项目': 'National-level project',
    '叶菜洁净包装一体化机器': 'Integrated vegetable cleaning and packaging machine', '机械设计 · 上海市二等奖': 'Mechanical design · Shanghai second prize',
    '外研社国才杯': 'FLTRP ETIC Cup', '英语综合能力竞赛 · 银奖。': 'English competition · Silver award.',
    '从一个问题，': 'Get to know my work', '快速认识我。': 'through a few questions.',
    '不知道先看哪里？': 'Not sure where to start?', '可以从这里开始。': 'Start here.', '选一个你关心的问题，我会给你一段简短介绍，再带你去对应的页面。': 'Choose a question for a short introduction and a link to the most relevant page.',
    '这是一个轻量的作品集导览。选择你关心的问题，我会把最相关的信息和下一步入口呈现给你。': 'Choose a question for a short introduction and a relevant next step.',
    '当前知识范围：研究项目、技能、教育经历与未来方向。': 'Covers projects, skills, education, and current interests.',
    '你好，我可以带你快速浏览 Yoyo 的研究与工程实践。你想先从哪里开始？': 'Hi. What would you like to know about Yoyo’s research and engineering work?',
    '选择下方任意问题，答案会显示在这里。': 'Choose a question below.', '她目前最关注什么？': 'What is she working on now?', '最有代表性的项目？': 'Which project best represents her work?', '她擅长哪些技能？': 'What are her main skills?', '她的研究路径是什么？': 'How did her interests develop?',
    '返回项目索引': 'Back to project archive', '项目概述': 'Project overview', '我的角色': 'My role', '技术路线': 'Approach', '核心成果': 'Results', '技术栈': 'Tools', '我的贡献': 'My contributions', '项目亮点': 'Highlights', '竞赛概述': 'Competition overview', '竞赛内容': 'Competition work', '代码仓库': 'Code repository', '设计计算说明书': 'Design calculation report', '总装体爆炸图': 'Assembly explosion view', '二维工程图': '2D engineering drawings'
    ,'MRI数据': 'MRI data', '预处理': 'Preprocessing', 'CNN特征提取': 'CNN features', 'Transformer编码': 'Transformer encoding', '多模态融合': 'Multimodal fusion', '分类预测': 'Classification', '可解释分析': 'Interpretation'
  };

  const originals = new WeakMap();
  const originalAttributes = new WeakMap();
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const titles = {
    '/': ['Yoyo · AI × Engineering', 'Yoyo · AI × Engineering'],
    '/research': ['研究项目 · Yoyo', 'Projects · Yoyo'],
    '/about': ['关于 Yoyo', 'About · Yoyo'],
    '/resume': ['简历 · Yoyo', 'CV · Yoyo'],
    '/assistant': ['AI 导览 · Yoyo', 'Quick guide · Yoyo'],
    '/projects/lung-cancer-lm-prediction': ['Yoyo | 肺癌脑膜转移AI预测', 'LM prediction · Yoyo'],
    '/projects/lstm-aero-engine-rul': ['Yoyo | LSTM 航空发动机寿命预测', 'Aero-engine RUL · Yoyo'],
    '/projects/3d-printing-ml': ['Yoyo | 3D打印机器学习研究', '3D printing ML · Yoyo'],
    '/projects/gearbox-design': ['Yoyo | 减速箱设计', 'Gearbox design · Yoyo'],
    '/projects/shuweibei-mathmodel': ['Yoyo | 数维杯数学建模竞赛', 'Mathematical modeling · Yoyo'],
    '/projects/smart-veggie-packaging': ['Yoyo | 叶菜洁净包装一体化机器', 'Packaging machine · Yoyo']
  };

  const themeLabels = {
    zh: { system: '系统', light: '日间', dark: '夜间' },
    en: { system: 'System', light: 'Light', dark: 'Dark' }
  };

  const syncControls = () => {
    const language = document.documentElement.dataset.language === 'en' ? 'en' : 'zh';
    const theme = document.documentElement.dataset.themeMode || 'system';
    document.querySelectorAll('[data-theme-label]').forEach((label) => { label.textContent = themeLabels[language][theme]; });
    document.querySelectorAll('[data-language-label]').forEach((label) => { label.textContent = language === 'en' ? 'English' : '中文'; });
    document.querySelectorAll('[data-theme-option]').forEach((button) => { button.setAttribute('aria-checked', String(button.dataset.themeOption === theme)); });
    document.querySelectorAll('[data-language-option]').forEach((button) => { button.setAttribute('aria-checked', String(button.dataset.languageOption === language)); });
  };

  const setTheme = (mode) => {
    const safeMode = ['system', 'light', 'dark'].includes(mode) ? mode : 'system';
    const resolved = safeMode === 'system' ? (systemTheme.matches ? 'dark' : 'light') : safeMode;
    document.documentElement.dataset.themeMode = safeMode;
    document.documentElement.dataset.theme = resolved;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolved === 'dark' ? '#07110f' : '#fff9f5');
    document.querySelectorAll('[data-theme-select]').forEach((select) => { select.value = safeMode; });
    syncControls();
  };

  const prepareBilingual = (root) => {
    root.querySelectorAll('.en').forEach((english) => {
      if (english.dataset.languageReady === 'true') return;
      english.dataset.languageReady = 'true';
      const parent = english.parentElement;
      if (!parent) return;
      Array.from(parent.childNodes).forEach((node) => {
        if (node === english || node.nodeType !== Node.TEXT_NODE || !node.textContent.trim()) return;
        const span = document.createElement('span');
        span.className = 'auto-zh';
        span.textContent = node.textContent;
        node.replaceWith(span);
      });
    });
  };

  const translateText = (root, language) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const parent = node.parentElement;
      if (!parent || parent.closest('script,style,.en,.auto-zh,[data-no-translate]')) return;
      if (language === 'zh') {
        if (originals.has(node)) node.nodeValue = originals.get(node);
        return;
      }
      const value = node.nodeValue;
      const clean = value.trim();
      if (!copy[clean]) return;
      if (!originals.has(node)) originals.set(node, value);
      const leading = value.match(/^\s*/)?.[0] || '';
      const trailing = value.match(/\s*$/)?.[0] || '';
      node.nodeValue = `${leading}${copy[clean]}${trailing}`;
    });
  };

  const translateAttributes = (root, language) => {
    root.querySelectorAll('[aria-label],[title],[placeholder]').forEach((element) => {
      const snapshot = originalAttributes.get(element) || {};
      ['aria-label', 'title', 'placeholder'].forEach((name) => {
        const current = element.getAttribute(name);
        if (!current) return;
        if (language === 'en' && copy[current]) {
          if (!snapshot[name]) snapshot[name] = current;
          element.setAttribute(name, copy[current]);
        } else if (language === 'zh' && snapshot[name]) {
          element.setAttribute(name, snapshot[name]);
        }
      });
      if (Object.keys(snapshot).length) originalAttributes.set(element, snapshot);
    });
  };

  const setLanguage = (language) => {
    const safeLanguage = language === 'en' ? 'en' : 'zh';
    document.documentElement.dataset.language = safeLanguage;
    document.documentElement.lang = safeLanguage === 'en' ? 'en' : 'zh-CN';
    if (document.body) {
      prepareBilingual(document.body);
      translateText(document.body, safeLanguage);
      translateAttributes(document.body, safeLanguage);
    }
    const route = window.location.pathname.replace(/\/$/, '') || '/';
    if (titles[route]) document.title = titles[route][safeLanguage === 'en' ? 1 : 0];
    document.querySelectorAll('[data-language-select]').forEach((select) => { select.value = safeLanguage; });
    syncControls();
  };

  const bind = () => {
    document.querySelectorAll('[data-pref-menu] > .pref-trigger').forEach((trigger) => {
      if (trigger.dataset.bound === 'true') return;
      trigger.dataset.bound = 'true';
      trigger.addEventListener('click', () => {
        const current = trigger.closest('[data-pref-menu]');
        const willOpen = !current?.classList.contains('is-open');
        document.querySelectorAll('[data-pref-menu].is-open').forEach((item) => {
          item.classList.remove('is-open');
          item.querySelector('.pref-trigger')?.setAttribute('aria-expanded', 'false');
          const popover = item.querySelector('.pref-popover');
          if (popover) popover.hidden = true;
        });
        if (willOpen) {
          current?.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          const popover = current?.querySelector('.pref-popover');
          if (popover) popover.hidden = false;
        }
      });
    });
    document.querySelectorAll('[data-theme-select]').forEach((select) => {
      if (select.dataset.bound === 'true') return;
      select.dataset.bound = 'true';
      select.addEventListener('change', () => {
        localStorage.setItem('yoyo-theme', select.value);
        setTheme(select.value);
      });
    });
    document.querySelectorAll('[data-language-select]').forEach((select) => {
      if (select.dataset.bound === 'true') return;
      select.dataset.bound = 'true';
      select.addEventListener('change', () => {
        localStorage.setItem('yoyo-language', select.value);
        setLanguage(select.value);
      });
    });
    document.querySelectorAll('[data-theme-option]').forEach((button) => {
      if (button.dataset.bound === 'true') return;
      button.dataset.bound = 'true';
      button.addEventListener('click', () => {
        localStorage.setItem('yoyo-theme', button.dataset.themeOption);
        setTheme(button.dataset.themeOption);
        const menu = button.closest('[data-pref-menu]');
        menu?.classList.remove('is-open');
        menu?.querySelector('.pref-trigger')?.setAttribute('aria-expanded', 'false');
        const popover = menu?.querySelector('.pref-popover');
        if (popover) popover.hidden = true;
      });
    });
    document.querySelectorAll('[data-language-option]').forEach((button) => {
      if (button.dataset.bound === 'true') return;
      button.dataset.bound = 'true';
      button.addEventListener('click', () => {
        localStorage.setItem('yoyo-language', button.dataset.languageOption);
        setLanguage(button.dataset.languageOption);
        const menu = button.closest('[data-pref-menu]');
        menu?.classList.remove('is-open');
        menu?.querySelector('.pref-trigger')?.setAttribute('aria-expanded', 'false');
        const popover = menu?.querySelector('.pref-popover');
        if (popover) popover.hidden = true;
      });
    });
    setTheme(localStorage.getItem('yoyo-theme') || 'system');
    setLanguage(localStorage.getItem('yoyo-language') || 'zh');
  };

  systemTheme.addEventListener('change', () => {
    if ((localStorage.getItem('yoyo-theme') || 'system') === 'system') setTheme('system');
  });
  document.addEventListener('astro:page-load', bind);
  document.addEventListener('site:content-change', () => setLanguage(localStorage.getItem('yoyo-language') || 'zh'));
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
})();
