import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

export const Gallery = ({ data }) => {
  return (
    <div id="portfolio" className="text-center gallery-container">
      <style>
        {`
          .gallery-container {
            padding: 50px 0; /* Increased padding for top and bottom */
            background-color: #f8f9fa; /* Light background for contrast */
          }

          .section-title {
            margin-bottom: 40px; /* Increased margin below the title */
          }

          .title {
            font-size: 36px; /* Larger title font size */
            color: #333; /* Darker color for better readability */
          }

          .subtitle {
            font-size: 20px; /* Increased subtitle font size */
            color: #666; /* Softer color */
          }

          .vertical-timeline-element-title {
            font-size: 24px; /* Larger title for each timeline element */
          }

          .vertical-timeline-element-subtitle {
            font-size: 18px; /* Larger subtitle for each timeline element */
            color: #888; /* Softer color */
          }
          }

          .vertical-timeline-element-description {
            font-size: 16px; /* Slightly larger description text */
            line-height: 1.5; /* Increased line height for better readability */
          }

          .loading-text {
            font-size: 18px; /* Increased size for loading text */
            color: #777; /* Softer color */
          }
        `}
      </style>

      <div className="container">
        <div className="section-title">
          <h2 className="title">Project Timeline</h2>
          {/* <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leonec.
          </p> */}
        </div>
        <VerticalTimeline>
          {data ? (
            data.map((item, index) => {
              let icon;
              switch (item.title) {
                case "Proposal presentation":
                  icon = <AssignmentLateIcon style={{ fontSize: '60px', color: '#fff' }} />;
                  break;
                case "Progress Presentation I":
                  icon = <TrendingUpIcon style={{ fontSize: '60px', color: '#fff' }} />;
                  break;
                case "Progress Presentation II":
                  icon = <TrendingUpIcon style={{ fontSize: '60px', color: '#fff' }} />;
                  break;
                case "Final presentation & VIVA":
                  icon = <SchoolIcon style={{ fontSize: '60px', color: '#fff' }} />;
                  break;
                default:
                  icon = null;
              }

              return (
                <VerticalTimelineElement
                  key={`${item.title}-${index}`}
                  className={`vertical-timeline-element--${item.type}`}
                  iconStyle={item.type === 'work' ? { background: 'rgb(33, 150, 243)', color: '#fff' } : { background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={icon}
                >
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.date}</h4>
                  <p className="vertical-timeline-element-description">{item.description}</p>
                </VerticalTimelineElement>
              );
            })
          ) : (
            <p className="loading-text">Loading...</p>
          )}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarIcon style={{ fontSize: '60px' }} />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};
