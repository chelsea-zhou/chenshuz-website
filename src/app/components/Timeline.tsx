import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function LeftAlignedTimeline() {
  return (
    <Timeline className='mt-0 p-0 border-2'
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0,
          margin:0,
          paddingLeft:0,
          marginLeft: 0
        },
      }}
    >
      {/* potential bug? this item is centered */}
      <TimelineItem >
          <TimelineOppositeContent color="textSecondary">
          </TimelineOppositeContent>
          <TimelineContent></TimelineContent>
      </TimelineItem>
     
      
      
      <TimelineItem >
        <TimelineOppositeContent color="textSecondary">
          2024/10
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Write of Passage Cohort 13</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2024/04
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><a className="underline" href="https://chenshuz.substack.com/p/13-no-i-didnt-travel-on-my-sabbatical">Started taking a sabbatical</a></TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2024/03
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><a className="underline" href="https://chenshuz.substack.com/p/dali"> Lived in a digital nomad community (NCC) in China for two weeks</a></TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2023/12
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Visited 8 cities in Mexico in one month</TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2023/08
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent><a className="underline" href="https://chenshuz.substack.com/p/burning-man-stories-how-to-figure">First Burning Man experience</a></TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}