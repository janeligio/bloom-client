import Skill from './Skill.interface';

export default interface Experience {
    id: number;
    type: ExperienceType;
    skills?: Skill[];
}

type ExperienceType = 'work' | 'education' | 'project';

export interface WorkExperience extends Experience {
    location?: string;
    company: string;
    description: string[] | string;
    position: string;
    startDate: string;
    endDate?: string;
}

export interface EducationExperience extends Experience {
    institution: string;
    major: string;
    degree: string;
    startDate: string;
    endDate?: string;
    courses?: string[];
}

export interface ProjectExperience extends Experience {
    name: string;
    description: string[] | string;
    startDate?: string;
    endDate?: string;
    links: Link[];
}

interface Link {
    name: string;
    url: string;
}