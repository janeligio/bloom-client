import React from 'react';
import Skill, { SkillCategory } from '../../types/Skill.interface';
import { Paper, Typography } from '@mui/material';
import ProficiencyComponent from '../../components/proficiency/Proficiency';
import './portfolio.sass';

export default function Portfolio() {
    const skillsComponent = exampleSkills.map((skill: Skill) => {
        const { id, category, name, proficiency } = skill;
        return (
            <div id={`${id}`}>
                <Typography variant="body1">
                    {name} ({category})
                </Typography>
                <ProficiencyComponent proficiency={proficiency} />
            </div>
        );
    });
    return (
        <main id="portfolio">
            <Paper className="section">
                <Typography variant="h2">Skills</Typography>
                {skillsComponent}
            </Paper>
            <Paper className="section">
                <Typography variant="h2">Projects</Typography>
            </Paper>
            <Paper className="section">
                <Typography variant="h2">Work Experience</Typography>
            </Paper>
            <Paper className="section">
                <Typography variant="h2">Education</Typography>
            </Paper>
        </main>
    );
}

const exampleSkills: Skill[] = [];

let index = 0;
for (const skill of ['JavaScript', 'React', 'HTML', 'CSS', 'Node']) {
    index++;
    const skillObj: Skill = {
        id: index,
        name: skill,
        proficiency: 5,
        category: [SkillCategory.Language],
    };
    exampleSkills.push(skillObj);
}
