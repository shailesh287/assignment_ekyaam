import TopNavBar from '../Navigation/TopNavBar'
import SideNavBar from '../Navigation/SideNavBar'
import './main.css'
import AddUser from '../Add User/AddUser';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import UserDetails from '../UserDetails/UserDetails';
import SessionInfo from '../ShceduleSession/SessionInfo';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
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