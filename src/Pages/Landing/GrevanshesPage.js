 //////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - GrevanshesPage
//    DESCRIPTION - GrevanshesPage Component is for grivance landing containing tabs in which components are {GrevanceComplainForm, GrevanceStatusTable}
//////////////////////////////////////////////////////////////////////////////////////

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GrevanceComplainForm from './GrevanceComplainForm';
import GrevanceStatusTable from './GrevanceStatusTable';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function GrevanshesPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    // complain and grivance landing page which contain component in tabs

    
    <div className=' w-full h- full m-auto bg-white '>
      <Box >
        <Box sx={{ borderColor: 'divider', backgroundColor: 'white' }} >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
            <Tab icon={<AnnouncementIcon color="warning" variant="contained"/>} label="Complain" {...a11yProps(0)} />
            <Tab icon={<ViewTimelineIcon color="success" variant="contained"/>} label="Track Complain" {...a11yProps(1)} />
            <Tab icon={<AnnouncementIcon color="secondary" variant="contained"/>} label="Complain" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} >
          <GrevanceComplainForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GrevanceStatusTable />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        {/* <Outlet /> */}
      </Box>
    </div>
  );
}
