import { 
  Server, 
  Eye, 
  Zap, 
  Users, 
} from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  metric?: string;
}

interface AchievementCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  achievements: Achievement[];
}
export const achievementsData: AchievementCategory[] = [
  {
    id: 'architecture',
    title: 'System Architecture & Microservices',
    icon: <Server className="w-5 h-5 text-indigo-400"></Server>,
    description: 'Scaling complex distributed frontend systems and modernizing legacy stacks.',
    achievements: [
      {
        title: 'Microservices at Scale',
        description: 'Managed and scaled a high-complexity module spanning 120+ microservices, ensuring high availability, fault tolerance, and seamless inter-service communication.',
        metric: '120+ Microservices',
      },
      {
        title: 'Legacy Monolith Migration',
        description: 'Led the architectural transformation of a legacy monolithic application into a modern microservices-based system, significantly improving global deployment scalability and system maintainability.',
      },
      {
        title: 'State Management Design',
        description: 'Architected complex frontend states using Zustand and custom React Hooks, optimizing data flow across high-load applications and improving runtime performance.',
        metric: '+20% Speed',
      },
      {
        title: 'FlutterFlow Migration R&D',
        description: 'Spearheaded research and architectural planning for an enterprise FlutterFlow migration, evaluating low-code scalability, custom widget integration, and cloud infrastructure alignment.',
      },
    ],
  },
  {
    id: 'a11y',
    title: 'Accessibility (a11y) & Frontend Fidelity',
    icon: <Eye className="w-5 h-5 text-teal-400" />,
    description: 'Enforcing WCAG 2.1 compliance and building pixel-perfect design systems.',
    achievements: [
      {
        title: 'Architectural Accessibility (a11y)',
        description: 'Spearheaded a high-priority organization initiative to achieve WCAG 2.1 Compliance across core platforms. Integrated automated accessibility auditing (Axe-core) directly into the CI/CD pipeline to ensure inclusive UX by design.',
        metric: 'WCAG 2.1 AA',
      },
      {
        title: 'Pixel-Perfect UI & Component Libraries',
        description: 'Developed dynamic, high-fidelity user interfaces using React and Redux, translating complex design systems and Figma mockups into production-ready, reusable component libraries.',
      },
      {
        title: 'Modern Refactoring',
        description: 'Improved codebase health and developer velocity by refactoring legacy JSX patterns into performance-optimized, type-safe functional components.',
      },
    ],
  },
  {
    id: 'performance',
    title: 'Performance, Governance & Reliability',
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    description: 'Optimizing web vitals, reducing defects, and maintaining high availability.',
    achievements: [
      {
        title: 'Performance Leadership',
        description: 'Led a dedicated Performance Enhancement Team to optimize frontend delivery pipelines, driving a 30% improvement in system responsiveness and Core Web Vitals (LCP, CLS, INP).',
        metric: '+30% Core Web Vitals',
      },
      {
        title: 'Quality Governance',
        description: 'Established strict linting rules, automated static analysis, and Clean Code guardrails, achieving a 20% reduction in production defects.',
        metric: '-20% Defects',
      },
      {
        title: 'Incident Response & Availability',
        description: 'Maintained exceptional system availability by resolving critical production login bottlenecks with a 30-minute Mean Time To Recovery (MTTR).',
        metric: '30m MTTR',
      },
      {
        title: 'End-to-End Testing',
        description: 'Engineered seamless frontend-backend integrations accompanied by robust E2E and integration test suites to eliminate regression risks.',
      },
    ],
  },
  {
    id: 'leadership',
    title: 'Technical Leadership & Stakeholders',
    icon: <Users className="w-5 h-5 text-purple-400" />,
    description: 'Mentoring engineers, setting coding standards, and managing client expectations.',
    achievements: [
      {
        title: 'Mentorship & Code Standards',
        description: 'Active mentor for junior developers, instilling Clean Code practices, SOLID design principles, and rigorous peer review standards.',
      },
      {
        title: 'Knowledge Transfer (KT)',
        description: 'Conducted structured KT workshops on low-code architecture, state patterns, and documentation best practices to upskill engineering teams.',
      },
      {
        title: 'Stakeholder Alignment',
        description: 'Directly managed client communications and technical requirements, acting as the primary bridge between cross-functional business stakeholders and engineering execution.',
      },
    ],
  },
];