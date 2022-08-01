import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NewsComponent from './NewsComponent';
import DownloadPage from '../../components/DownloadPage';


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

export default function KnowledageTab() {

//    let newsData = props.newsData
// console.log('data at knowledge tab ',props.newsData)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div  className='flex flex-row'>
        <div>
  
        </div>
        <div>
          <div className=' w-full border'>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="NEWS" {...a11yProps(0)} />
                  <Tab label="DOWNLOADS" {...a11yProps(1)} />
                  <Tab label="demo" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
              <NewsComponent />
              </TabPanel>
              <TabPanel value={value} index={1}>
           <DownloadPage />
              </TabPanel>
              <TabPanel value={value} index={2}>
            downloads
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
