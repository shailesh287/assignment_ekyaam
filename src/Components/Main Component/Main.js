import TopNavBar from '../Navigation/TopNavBar'
import SideNavBar from '../Navigation/SideNavBar'
import './main.css'
import AddUser from '../Add User/AddUser';
import { Box, Grid } from '@mui/material';
import UserDetails from '../UserDetails/UserDetails';
import SessionInfo from '../ShceduleSession/SessionInfo';

function Main() {
    return (
        <>
       
        <div className='top_bar'>
        <TopNavBar/>
        </div>
        <div className='side_bar'>
        <SideNavBar/>
        </div>
        <div className='Main_Container'>
        <div className='addUser'>
            <AddUser/>
        </div>
        <div className='sub_container'>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} style={{height:'100%'}}>
          <UserDetails/>
        </Grid>
        <Grid item xs={12} md={4} style={{ height: '100%' }}>
          <SessionInfo/>
        </Grid>
    
      </Grid>
    </Box>
    </div>
      </div>
      </>
    );
  }
  
  export default Main;