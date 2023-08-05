import React from 'react'
import './session.css'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function SessionInfo() {
  return (
    <div className='session_con'>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
      <Grid item xs={12} >
          <Item style={{height:'100%', backgroundColor:'rgba(255, 255, 255, 0.5)', borderRadius:'15px'}}>
          <div className='header'>
            <div className='t_info'>
            <img src='Icons/noun-time-period-5100841 1.svg' alt='img'/>
            <div style={{fontSize:'16px', fontWeight:'bold', width:"100%", marginLeft:'10px'}} >Shceduled Session</div>
            </div>
            
            <button className='add_session'>+ Add Session</button>
        </div>
        <div className='date_tab'>
            <div className='t_info'>
            <div style={{fontSize:'13px', fontWeight:'bold', width:"100%", marginLeft:'10px'}} >23 March 2023</div>
            </div>
            <div>
            <span style={{fontSize:'12px', width:"100%", marginLeft:'10px'}} >Today</span>
            <span style={{fontSize:'12px', width:"100%", marginLeft:'10px'}} >Weekly</span>
            <span style={{fontSize:'12px', width:"100%", marginLeft:'10px'}} >Monthly</span>
            </div>
        </div>
        <div className='calender'>
        <img src='Icons/LeftArrow.svg' alt='img'/>
        <img style={{width:'90%'}} src='Icons/calander_group.svg' alt='img'/>
        <img src='Icons/SideArrow.svg' alt='img'/>
        </div>

        <div className='current_session'>
            Current Session
        </div>

        <div style={{marginTop:'10px'}}>
        <Grid spacing={2}>
        <Grid item xs={12} >
          <Item style={{height:'90%', backgroundColor:'rgba(255, 255, 255, 0.5)', borderRadius:'15px', paddingTop:"20px"}}>
            <div className='curr_info'>
               <div className='curr_text'>
               <div className='time'>
                    <div style={{fontSize:'16px', fontWeight:'bold'}}>11:00 AM</div>
                    <div style={{fontSize:'12px', marginTop:'5px'}}>12:00 PM</div>

                </div>
                    <hr></hr>
                <div className='s_name'>
                    <div style={{fontSize:'16px', fontWeight:'bold'}}>
                        Kiran Rathi 
                    </div>
                    <div>
                        Previous Session:
                    </div>
                    <div>
                       Tuseday, March 5, 2023
                    </div>
                </div>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img src='Icons/Arrow.svg' alt='img'/>
                </div>
             
            </div>
            <button className='start_btn'>Start Session</button>
          </Item>
        </Grid>
        <div className='current_session'>
            Next Few Sesions
        </div>
        <Grid item xs={12} style={{marginTop:'10px'}} >
          <Item style={{height:'90%', backgroundColor:'rgba(255, 255, 255, 0.5)', borderRadius:'15px'}}>
            <div className='curr_info'>
               <div className='curr_text'>
               <div className='time'>
                    <div style={{fontSize:'16px', fontWeight:'bold'}}>11:00 AM</div>
                    <div style={{fontSize:'12px', marginTop:'5px'}}>12:00 PM</div>

                </div>
                    <hr></hr>
                <div className='s_name'>
                    <div style={{fontSize:'16px', fontWeight:'bold'}}>
                        Kiran Rathi 
                    </div>
                    <div>
                        Previous Session:
                    </div>
                    <div>
                       Tuseday, March 5, 2023
                    </div>
                </div>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img src='Icons/Arrow.svg' alt='img'/>
                </div>
             
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} style={{marginTop:'10px'}} >
          <Item style={{height:'90%', backgroundColor:'rgba(255, 255, 255, 0.5)', borderRadius:'15px'}}>
            <div className='curr_info'>
               <div className='curr_text'>
               <div className='time'>
                    <div style={{fontSize:'16px', fontWeight:'bold'}}>11:00 AM</div>
                    <div style={{fontSize:'12px', marginTop:'5px'}}>12:00 PM</div>

                </div>
                    <hr></hr>
                <div className='s_name'>
                    <div style={{fontSize:'16px', fontWeight:'bold'}}>
                        Kiran Rathi 
                    </div>
                    <div>
                        Previous Session:
                    </div>
                    <div>
                       Tuseday, March 5, 2023
                    </div>
                </div>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img src='Icons/Arrow.svg' alt='img'/>
                </div>
             
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} style={{marginTop:'10px'}}>
          <Item style={{height:'90%', backgroundColor:'rgba(255, 255, 255, 0.5)', borderRadius:'15px'}}>
            <div className='curr_info'>
               <div className='curr_text'>
               <div className='time'>
                    <div style={{fontSize:'16px', fontWeight:'bold'}}>11:00 AM</div>
                    <div style={{fontSize:'12px', marginTop:'5px'}}>12:00 PM</div>

                </div>
                    <hr></hr>
                <div className='s_name'>
                    <div style={{fontSize:'16px', fontWeight:'bold'}}>
                        Kiran Rathi 
                    </div>
                    <div>
                        Previous Session:
                    </div>
                    <div>
                       Tuseday, March 5, 2023
                    </div>
                </div>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img src='Icons/Arrow.svg' alt='img'/>
                </div>
             
            </div>
          </Item>
        </Grid>
        </Grid>
        </div>
          </Item>
        </Grid>
        
        </Grid>
        </Box>
       
    </div>
  )
}

export default SessionInfo
