import React from 'react'
import CustomTimeline, {CustomTimelineSeparator} from '../../components/Timeline/Timeline';
import {Grid, Typography} from '@material-ui/core'
import './Resume.css'
import resumeData from '../../utils/resumeData'
import WorkIcon from '@material-ui/icons/Work';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';


const Resume = () => {
    return (
        <>

        {/* A propos */}
        <Grid container className='section pb_45'>
            <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>À propos de moi</h6>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
            </Grid>
        </Grid>


        {/* Education & expériences*/} 
        <Grid container className='section'>
        <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>Resume</h6>
            </Grid>
        <Grid item xs={12}>
            <Grid container>

                {/* Expériences */}
                <Grid item sm={12} md={6}>
                    <CustomTimeline title={'Projets'} icon={<WorkIcon />}>
                        {resumeData.experiences.map(experience=> (
                            <TimelineItem>
                                <TimelineSeparator className='separator_padding'>
                                    <TimelineDot variant="outlined" className="timeline_dot" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography className="timeline_title">{experience.title}</Typography>
                                    <Typography variant="body2"  className="timeline_description">{experience.description}</Typography>
                                    <Typography variant="caption" className="timeline_lien" ><a href={experience.lien} target='_blank' style={{textDecoration:'none'}}>{experience.lien}</a></Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </CustomTimeline>
                </Grid>
                {/* Education */}
                <Grid item sm={12} md={6}>
                <CustomTimeline title={'Éducation'} icon={<CastForEducationIcon />} />
                </Grid>
            </Grid>
        </Grid>
        </Grid>


        {/* Services */} 
        <Grid container className='section'>

        </Grid>

        {/* Skills */} 
        <Grid container className='section'>

        </Grid>

        {/* Contact */} 
        <Grid container className='section'>

        </Grid>
        </>
    )
}

export default Resume
