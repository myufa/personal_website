import * as React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { 
    Experience, 
    Employer,
    Title,
    When,
    SkillBox,
    Skill,
    BulletBox,
} from '../../styles/experience-style';

// props: {project {title: '', summary: '', when: '', skills: [], bullets: [] } }
interface Props {
    project: any
}

const ProjectItem: React.FC<Props> = (props: any) => (
    <Experience className="project">
        {props.project.employer ? 
            <Employer>
                {props.project.employer}
            </Employer>
            : null
        }
        <Title>
            {props.project.title}
        </Title>
        <When>
            {props.project.when}
        </When>
        <SkillBox>
            {props.project.skills ? props.project.skills.map((skill: string, index: number)=>(
                    <Skill id='skill' key={index}>{skill}</Skill>
                ))
                :
                ``
            }
        </SkillBox>
        <BulletBox>
            {props.project.bullets ? props.project.bullets.map((bullet: string, index: number) => (
                    <p key={index}>{bullet}</p>
                )) : ''
            }
        </BulletBox>
    </Experience>
);

ProjectItem.propTypes = {
    project: PropTypes.any.isRequired
}

export default ProjectItem;