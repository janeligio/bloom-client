import React from 'react';
import Skill, { SkillCategory } from '../../types/Skill.interface';
import { Paper, Typography } from '@mui/material';
import './portfolio.sass';

export default function Portfolio() {
    const skillsComponent = exampleSkills.map((skill: Skill) => {
        const { id, category, name, proficiency } = skill;
        return (
            <div id={`${id}`}>
                <Typography variant="body1">
                    {name} ({category})
                </Typography>
                {ProficiencyComponent({ proficiency }).map((i) => i)}
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
                <Typography variant="h2">Experiences</Typography>
            </Paper>
            <Paper className="section">
                <Typography variant="h2">Education</Typography>
            </Paper>
        </main>
    );
}

function ProficiencyComponent(props: { proficiency: number }) {
    const { proficiency } = props;
    const proficiencyComponent = [];
    for (let i = 0; i < proficiency; i++) {
        proficiencyComponent.push(<span>&#9733;</span>);
    }
    return proficiencyComponent;
}

const exampleSkills: Skill[] = [];

let index = 0;
for (const skill of ['JavaScript', 'React', 'HTML', 'CSS', 'Node']) {
    index++;
    const skillObj: Skill = {
        id: index,
        name: skill,
        proficiency: 3,
        category: [SkillCategory.Language],
    };
    exampleSkills.push(skillObj);
}
