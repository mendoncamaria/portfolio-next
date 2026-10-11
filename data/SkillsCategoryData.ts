interface SkillCategory {
  category: string;
  skills: { title: string; link: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { title: "HTML", link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
      { title: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { title: "TypeScript", link: "https://www.typescriptlang.org/" },
      { title: "Python", link: "https://www.python.org/" },
    //   { title: "PHP", link: "https://www.php.net/" },
    //   { title: "C#", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
      { title: "Node.js", link: "https://nodejs.org/" },
      { title: "Go", link: "https://go.dev/" },
      { title: "Java", link: "https://www.java.com/" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { title: "ReactJS", link: "https://react.dev/" },
      { title: "React Native", link: "https://reactnative.dev/" },
      { title: "NextJS", link: "https://nextjs.org/" },
      { title: "Express.js", link: "https://expressjs.com/" },
      { title: "AstroJS", link: "https://astro.build/" },
      { title: "Gin-Gonic", link: "https://gin-gonic.com/" },
      { title: "Radix UI", link: "https://www.radix-ui.com/" },
      { title: "Headless UI", link: "https://headlessui.com/" },
      { title: "React Aria", link: "https://react-spectrum.adobe.com/react-aria/" },
      { title: "Zustand", link: "https://zustand-demo.pmnd.rs/" },
      { title: "xState", link: "https://stately.ai/xstate" },
      { title: "Redux", link: "https://redux.js.org/" },
      { title: "Chart.js", link: "https://www.chartjs.org/" },
    ],
  },
  {
    category: "A11y & Inclusive Design",
    skills: [
      { title: "WCAG 2.1/2.2", link: "https://www.w3.org/WAI/standards-guidelines/wcag/" },
      { title: "WAI-ARIA", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" },
      { title: "Screen Readers (NVDA/VoiceOver)", link: "https://webaim.org/articles/screenreaders/" },
      { title: "Keyboard Navigation", link: "https://webaim.org/techniques/keyboard/" },
      { title: "Color Contrast Analysis", link: "https://webaim.org/resources/contrastchecker/" },
      { title: "Focus Management", link: "https://developer.mozilla.org/en-US/docs/Web/API/Element/focus" },
      { title: "Semantic HTML5", link: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { title: "MongoDB", link: "https://www.mongodb.com/" },
      { title: "SQL", link: "https://www.iso.org/standard/63555.html" },
      { title: "MySQL", link: "https://www.mysql.com/" },
      { title: "PL/SQL", link: "https://www.oracle.com/database/technologies/appdev/plsql.html" },
      { title: "Postgres", link: "https://www.postgresql.org/" },
    ],
  },
  {
    category: "Styling & Preprocessing",
    skills: [
      { title: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { title: "Sass", link: "https://sass-lang.com/" },
      { title: "Tailwind CSS", link: "https://tailwindcss.com/" },
      { title: "Material UI", link: "https://mui.com/" },
    ],
  },
  {
    category: "Testing, Debugging & Quality",
    skills: [
      { title: "Jest", link: "https://jestjs.io/" },
      { title: "React DevTools", link: "https://react.dev/learn/react-developer-tools" },
      { title: "Cypress-axe", link: "https://github.com/component-driven/cypress-axe" },
      { title: "React Testing Library", link: "https://testing-library.com/docs/react-testing-library/intro/" },
      { title: "Accessibility Insights", link: "https://accessibilityinsights.io/" },
      { title: "Webpack", link: "https://webpack.js.org/" },
      { title: "SonarQube", link: "https://www.sonarsource.com/products/sonarqube/" },
      { title: "ESLint", link: "https://eslint.org/" },
      { title: "axe-core", link: "https://www.deque.com/axe/" },
      { title: "Lighthouse CI", link: "https://github.com/GoogleChrome/lighthouse-ci" },
      { title: "eslint-plugin-jsx-a11y", link: "https://github.com/jsx-eslint/eslint-plugin-jsx-a11y" },
    ],
  },
  {
    category: "Cloud, DevOps & Infrastructure",
    skills: [
      { title: "GCP (GKE, Cloud Functions, Pub/Sub)", link: "https://cloud.google.com/" },
      { title: "Google Firebase", link: "https://firebase.google.com/" },
      { title: "Docker", link: "https://www.docker.com/" },
      { title: "Jenkins", link: "https://www.jenkins.io/" },
      { title: "Vercel", link: "https://vercel.com/" },
      { title: "Netlify", link: "https://www.netlify.com/" },
      { title: "Git & GitLab/GitHub", link: "https://git-scm.com/" },
    ],
  },
  {
    category: "Editors & Design Tools",
    skills: [
      { title: "VS Code", link: "https://code.visualstudio.com/" },
      { title: "Visual Studio", link: "https://visualstudio.microsoft.com/" },
      { title: "Notepad++", link: "https://notepad-plus-plus.org/" },
      { title: "Sublime Text", link: "https://www.sublimetext.com/" },
      { title: "Eclipse", link: "https://www.eclipse.org/" },
      { title: "Figma", link: "https://www.figma.com/" },
      { title: "Zeplin", link: "https://zeplin.io/" },
    ],
  },
];

export const topSkills = [
  { title: "TypeScript", link: "https://www.typescriptlang.org/" },
  { title: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { title: "ReactJS", link: "https://react.dev/" },
  { title: "NextJS", link: "https://nextjs.org/" },
  { title: "Tailwind CSS", link: "https://tailwindcss.com/" },
  { title: "WCAG 2.1/2.2", link: "https://www.w3.org/WAI/standards-guidelines/wcag/" },
  { title: "Zustand", link: "https://zustand-demo.pmnd.rs/" },
  { title: "Node.js", link: "https://nodejs.org/" },
  { title: "Go", link: "https://go.dev/" },
  { title: "GCP", link: "https://cloud.google.com/" },
  { title: "Git & GitHub", link: "https://git-scm.com/" },
  { title: "Figma", link: "https://www.figma.com/" },
];