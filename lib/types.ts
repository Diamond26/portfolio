/**
 * Type definitions for the portfolio data layer.
 * Edit these interfaces when adding new fields to any section.
 */

/** A single portfolio project */
export interface Project {
    id: string;
    title: string;
    description: string;
    problem: string;
    solution: string;
    tags: string[];
    githubUrl: string;
    imageAlt: string;
}

/** A technology / tool in the stack */
export interface TechItem {
    name: string;
    /** Inline SVG path or URL */
    icon: string;
    category: "language" | "runtime" | "database" | "tool" | "security";
}

/** Personal information used across the page */
export interface PersonalInfo {
    name: string;
    role: string;
    tagline: string;
    email: string;
    github: string;
    linkedin: string;
    location: string;
}
