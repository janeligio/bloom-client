
export default interface Skill {
    id: number;
    category: SkillCategory[];
    name: string;
    proficiency: number;
}

enum SkillCategory {
    TechnicalSkill = 'TechnicalSkill',
    SoftSkill = 'SoftSkill',
    Language = 'Language',
    Framework = 'Framework',
    Methodology = 'Methodology',
}