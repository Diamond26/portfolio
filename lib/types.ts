export interface Project {
    id: string;
    title: string;
    description: string;
    problem: string;
    solution: string;
    tags: string[];
    githubUrl: string;
    imageAlt: string;
    status: "live" | "wip" | "this";
    year: string;
    kicker: string;
    previewImages?: string[];
    showGithub?: boolean;
    privacyNote?: string;
}

export interface TechItem {
    name: string;
    icon: string;
    glyph: string;
    category: string;
}

export interface ServiceItem {
    n: string;
    title: string;
    desc: string;
    bullets: string[];
}

export interface TimelineItem {
    year: string;
    live?: boolean;
    title: string;
    desc: string;
    chips: string[];
}

export interface PersonalInfo {
    name: string;
    role: string;
    tagline: string;
    email: string;
    github: string;
    linkedin: string;
    location: string;
}
