import * as React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { workData } from './WorkData'
import WorkItem from './WorkItem';
import { ExperienceHeader } from '../../styles/experience-style'



const WorkList: React.FC = () => (
    <div className='workList' id='experience'
    css={css`
        padding: 40px;
        width: auto;
    `}>
        <ExperienceHeader>
          Experience
        </ExperienceHeader>
        <div css={css`width: fit-content; margin: 0 auto;`}>
            {workData.map((project: any, index: number)=>(
                <WorkItem key={index} project={project}/>
            ))}
        </div>
    </div>
);


export default WorkList;