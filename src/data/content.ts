// Edit everything about the portfolio here.
export const profile = {
  name: 'Damar Lintang',
  role: 'Digital Business Graduate • UI/UX Designer • Creative Problem Solver',
  intro: 'Digital Business graduate exploring UI/UX, digital products, web experiences and data-driven problem solving.',
  email: 'your@email.com',
  socials: [['LinkedIn', '#'], ['Instagram', '#'], ['Behance', '#'], ['GitHub', '#']] as [string, string][],
};
export type Tone = 'brand' | 'sun' | 'ink';
export type Project = {
  id: string; title: string; category: string; year: string; description: string;
  coverImage: string; role: string; tools: string[]; challenge: string; approach: string;
  solution: string; outcome: string; galleryImages: string[]; tone: Tone; cls: string; h: string;
};
// Add a project = add an object. Put image paths/URLs in coverImage and galleryImages.
export const projects: Project[] = [
  { id: 'queasy', title: 'Queasy', category: 'UI/UX / Product Design', year: '2025', tone: 'brand', cls: 'md:col-span-7', h: 'h-[26rem] md:h-[32rem]',
    description: 'A questionnaire platform concept designed to help students and researchers recruit thesis respondents more efficiently.',
    coverImage: '', role: 'UI/UX Designer', tools: ['Figma'], galleryImages: [],
    challenge: 'Finding enough respondents for a thesis questionnaire is slow and unstructured. Edit this text.',
    approach: 'Describe your research, user flows, wireframes and visual design process. Edit this text.',
    solution: 'A platform concept that connects students and researchers with respondents. Edit this text.',
    outcome: 'Write a short conclusion or what you learned. Edit this text.' },
  { id: 'kilat', title: 'KILAT', category: 'UI/UX Design', year: '2025', tone: 'sun', cls: 'md:col-span-5 md:mt-24', h: 'h-[24rem] md:h-[28rem]',
    description: 'A public transportation app concept focused on making transportation information easier to access.',
    coverImage: '', role: 'UI/UX Designer', tools: ['Figma'], galleryImages: [],
    challenge: 'Transportation information is often scattered and hard to read. Edit this text.',
    approach: 'Describe your process: user flow, wireframes, UI design, prototype. Edit this text.',
    solution: 'An app concept that puts routes and schedules in one clear place. Edit this text.',
    outcome: 'Write a short conclusion or what you learned. Edit this text.' },
  { id: 'netflix', title: 'Netflix Data Analysis', category: 'Data Analysis / Power BI', year: '2025', tone: 'ink', cls: 'md:col-span-8 md:-mt-6', h: 'h-[24rem] md:h-[28rem]',
    description: 'An exploratory data analysis project using a Netflix titles dataset to examine content distribution, genres, ratings, countries and other patterns.',
    coverImage: '', role: 'Data Analyst', tools: ['Power BI', 'Excel'], galleryImages: [],
    challenge: 'Make a large titles dataset easy to explore and understand. Edit this text.',
    approach: 'Describe data cleaning, analysis and dashboard design. Edit this text.',
    solution: 'An exploratory dashboard covering genres, ratings, countries and more. Edit this text.',
    outcome: 'Write your key findings. Edit this text.' },
];
export const skills = [
  ['UI/UX', ['User Flow', 'Wireframing', 'UI Design', 'Prototyping', 'Figma', 'Visual Hierarchy']],
  ['Data', ['Microsoft Excel', 'Power BI', 'Data Cleaning', 'Data Visualization', 'Basic Python']],
  ['Digital / Web', ['Responsive Design', 'WordPress', 'Wix', 'HTML/CSS', 'Front-end fundamentals']],
  ['Creative', ['Canva', 'Adobe Illustrator', 'Audacity', 'Content Creation']],
] as [string, string[]][];
export const experience = [
  { role: 'Networking Intern', org: 'Deka Group / Independence Partner', type: 'Internship' },
  { role: 'Freelance Audio Editor', org: 'Kwikku', type: 'Freelance' },
  { role: 'Organizational & project experience', org: '', type: 'Experience' },
  { role: 'UI/UX competitions & projects', org: '', type: 'Competition' },
];
export const process = [
  ['Discover', 'Understand the problem, context and users.'],
  ['Define', 'Turn the problem into a clear direction.'],
  ['Design', 'Explore solutions through wireframes and visual design.'],
  ['Build', 'Turn the design into a functional digital experience.'],
  ['Refine', 'Iterate, test and polish the result.'],
];
