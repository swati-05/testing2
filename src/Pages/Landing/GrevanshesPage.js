import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GrevanceComplainForm from './GrevanceComplainForm';
import GrevanceStatusTable from './GrevanceStatusTable';


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
    <div className='sm:p-0 w-9/12  border-2 m-auto bg-slate-100 '>
      <Box >
      <Box sx={{ border: 1, borderColor: 'divider',backgroundColor:'white' }} className='drop-shadow-md'>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="New Complain" {...a11yProps(0)} />
          <Tab label="Track Complain" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
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
