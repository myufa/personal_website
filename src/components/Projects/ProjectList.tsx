import * as React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { projectData } from './ProjectData';
import ProjectItem from './ProjectItem';
import { ExperienceHeader } from '../../styles/experience-style'



const WorkList: React.FC = () => (
    <div className='workList' id='projects'
    css={css`
        padding: 40px;
        width: auto;
    `}>
        <ExperienceHeader>
          Projects
        </ExperienceHeader>
        <div css={css`width: fit-content; margin: 0 auto;`}>
            {projectData.map((project: any, index: number)=>(
                <ProjectItem key={index} project={project}/>
            ))}
        </div>
    </div>
);


export default WorkList;