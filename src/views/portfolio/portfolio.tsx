import React from 'react';
import Skill, { SkillCategory } from '../../types/Skill.interface';
import { Link as LinkInterface } from '../../types/Experience.interface';
import { Chip, Divider, Link, Paper, Stack, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ProficiencyComponent from '../../components/proficiency/Proficiency';
import './portfolio.sass';
import {
    EducationExperience,
    ProjectExperience,
    WorkExperience,
} from '../../types/Experience.interface';

export default function Portfolio() {
    const educationComponent = exampleEducation.map(
        (education: EducationExperience) => {
            const {
                id,
                type,
                skills,
                institution,
                major,
                degree,
                startDate,
                endDate,
                courses,
            } = education;

            const dateFormatted =
                `${startDate}` + (endDate ? ` - ${endDate}` : ' - Current');
            return (
                <div key={`${id}`}>
                    <Typography variant="h5">{institution}</Typography>
                    <Typography variant="subtitle1">{dateFormatted}</Typography>
                    <Typography variant="body1">
                        {degree} {major}
                    </Typography>
                </div>
            );
        }
    );

    const workComponent = exampleWork.map((work: WorkExperience) => {
        const {
            id,
            type,
            skills,
            location,
            company,
            description,
            position,
            startDate,
            endDate,
        } = work;

        const formattedDate = `${startDate}` + (endDate ? ` - ${endDate}` : '');
        let formattedSkills;

        if (skills) {
            formattedSkills = (
                <Stack direction="row" spacing={2}>
                    {skills.map((skill: Skill) => (
                        <Chip label={skill.name} key={`${skill.id}`} />
                    ))}
                </Stack>
            );
        }

        let formattedDescription;
        if (description) {
            if (typeof description === 'string') {
                formattedDescription = (
                    <li>
                        <Typography variant="body1">{description}</Typography>
                    </li>
                );
            }
            if (typeof description === 'object') {
                // If description is an array of strings, render each string as a paragraph

                formattedDescription = description.map((paragraph: string) => (
                    <li>
                        <Typography variant="body1">{paragraph}</Typography>
                    </li>
                ));
            }
        }
        return (
            <div id={`${id}`}>
                <Typography variant="h5">{company}</Typography>
                <Typography variant="subtitle1">{position}</Typography>
                <Typography variant="subtitle2">{formattedDate}</Typography>
                <Typography variant="body1">{location}</Typography>
                {formattedSkills}
                <ul>{formattedDescription}</ul>
            </div>
        );
    });

    const skillsComponent = exampleSkills.map((skill: Skill) => {
        const { id, category, name, proficiency } = skill;
        return (
            <div key={`${id}`}>
                <Typography variant="body1">
                    {name} ({category})
                </Typography>
                <ProficiencyComponent proficiency={proficiency} />
            </div>
        );
    });

    const projectsComponent = exampleProjects.map(
        (project: ProjectExperience) => {
            const {
                id,
                type,
                skills,
                name,
                description,
                startDate,
                endDate,
                links,
            } = project;

            let formattedSkills;
            if (skills) {
                formattedSkills = (
                    <Stack direction="row" spacing={2}>
                        {skills.map((skill: Skill) => (
                            <Chip label={skill.name} key={`${skill.id}`} />
                        ))}
                    </Stack>
                );
            }
            let formattedDescription;
            if (description) {
                if (typeof description === 'string') {
                    formattedDescription = (
                        <li>
                            <Typography variant="body1">
                                {description}
                            </Typography>
                        </li>
                    );
                }
                if (typeof description === 'object') {
                    // If description is an array of strings, render each string as a paragraph

                    formattedDescription = description.map(
                        (paragraph: string) => (
                            <li>
                                <Typography variant="body1">
                                    {paragraph}
                                </Typography>
                            </li>
                        )
                    );
                }
            }

            const formattedLinks = (
                <Stack direction="row" spacing={2}>
                    {links.map((link: LinkInterface) => (
                        <Link target="_blank" rel="noreferrer" href={link.url}>
                            {link.name}
                        </Link>
                    ))}
                </Stack>
            );
            return (
                <div>
                    <Typography variant="h5">{name}</Typography>
                    {formattedSkills}
                    <ul>{formattedDescription}</ul>
                    {formattedLinks}
                </div>
            );
        }
    );
    return (
        <main id="portfolio">
            <Paper className="section">
                <Typography variant="h2">Education</Typography>
                {educationComponent}
            </Paper>
            <Paper className="section">
                <Typography variant="h2">Skills</Typography>
                {skillsComponent}
                <TextField
                    id="standard-name"
                    className="add-skill-input"
                    fullWidth
                    size="small"
                    label="Add a skill"
                    InputProps={{ endAdornment: <AddBoxIcon /> }}
                />
            </Paper>
            <Paper className="section">
                <Typography variant="h2">Work Experience</Typography>
                {workComponent}
            </Paper>
            <Paper className="section">
                <Typography variant="h2">Projects</Typography>
                {projectsComponent}
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

const exampleEducation: EducationExperience[] = [];

exampleEducation.push({
    id: 1,
    type: 'education',
    institution: 'UH Manoa',
    major: 'Computer Science',
    degree: 'Bachelor of Science',
    startDate: 'August 2016',
});

exampleEducation.push({
    id: 2,
    type: 'education',
    institution: 'Kaimuki High School',
    major: 'N/A',
    degree: 'N/A',
    startDate: '2012',
    endDate: '2016',
});

const exampleWork: WorkExperience[] = [];

exampleWork.push({
    id: 1,
    type: 'work',
    skills: [...exampleSkills],
    location: '',
    company: 'Hawaiian Dredging',
    description: [
        'Test description',
        'Develop application to facilitate network maintenance in offsite construction sites.',
        'Diagnose, troubleshoot, and resolve hardware, software, or other network and system problems, and replace defective components when necessary',
    ],
    position: 'IT Intern',
    startDate: 'May 2019',
    endDate: 'August 2019',
});

exampleWork.push({
    id: 1,
    type: 'work',
    skills: [...exampleSkills],
    location: '',
    company: 'Broadside Digital',
    description: [
        'Design, build, or maintain web sites, using modern JavaScript.',
        'Deliver updates to Gatsby website to reflect static Express server in preparation for migration.',
        'Implement functions to interface with database to develop novel notification system.',
        'Write, design, or edit web page content.',
        'Evaluate code to ensure that it is valid, is properly structured, and meets industry standards.',
        'Maintain understanding of current web technologies or programming practices through continuing educating, reading, and practice.',
    ],
    position: 'IT Intern',
    startDate: 'May 2019',
    endDate: 'August 2019',
});

const exampleProjects: ProjectExperience[] = [];

exampleProjects.push({
    id: 1,
    type: 'project',
    skills: [...exampleSkills],
    name: 'Bloom',
    description: 'An application to keep track of your skills and projects.',
    // startDate: null,
    // endDate: null,
    links: [
        {
            name: 'GitHub',
            url: 'https://github.com/janeligio/bloom-client',
        },
    ],
});
