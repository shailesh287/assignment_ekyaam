import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import './userdetails.css'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function UserDetails() {
    const [users, setUsers] = useState([
        { img: 'Icons/Rectangle 31.svg', name: 'Madhu Pandey' },
        { img: 'Icons/Rectangle 31 (1).svg', name: 'Nerraja Singh' },
        { img: 'Icons/Rectangle 31 (2).svg', name: 'Vikas Vishwakarma' },
        { img: 'Icons/Rectangle 31 (3).svg', name: 'Shahid Choudhary' },
        { img: 'Icons/Rectangle 31 (4).svg', name: 'Nikhil Pandey' },
        { img: 'Icons/Rectangle 31 (5).svg', name: 'Prabhas Rao' },
        { img: 'Icons/Rectangle 31 (6).svg', name: 'Shailesh Bind' },
        { img: 'Icons/Rectangle 31 (4).svg', name: 'Akshat naik' }
      ]);    
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
      <Grid item  xs={12} sm={6} md={3}>
          <Item style={{height:'14vh', backgroundColor:'rgba(255, 255, 255, 0.5)', borderRadius:'15px'}}>
            <div className='card'>
                <div>
                <img src='Icons/noun-pending-clipboard-4492385 1.svg'/>
                </div>
                <div className='text'   >
                <div style={{fontSize:'14px'}}>Pending Task</div>
                <div style={{fontSize:'36px', fontWeight:'bold',marginTop:"-9px"}}>15</div>
                </div>
            </div>
          </Item>
        </Grid>
        <Grid item  xs={12} sm={6} md={3}  >
          <Item style={{height:'14vh', backgroundColor:'rgba(255, 255, 255, 0.5)', borderRadius:'15px'}}>
            <div className='card'>
                <div>
                <img src='Icons/noun-prescription-3102451 1.svg'/>
                </div>
                <div className='text2'   >
                <div style={{fontSize:'14px'}}>Prescription Due</div>
                <div style={{fontSize:'36px', fontWeight:'bold',marginTop:"-9px"}}>16</div>
                </div>
            </div>
          </Item>
        </Grid>
        <Grid item  xs={12} sm={6} md={3}  >
          <Item style={{height:'14vh',backgroundColor:'rgba(255, 255, 255, 0.5)', borderRadius:'15px'}}>
            <div className='card'>
                <div>
                <img src='Icons/Patient.svg'/>
                </div>
                <div className='text2'   >
                <div style={{fontSize:'14px'}}>Inactive Patients</div>
                <div style={{fontSize:'36px', fontWeight:'bold', marginTop:"-9px"}}>80</div>
                </div>
            </div>
          </Item>
        </Grid>
        <Grid item  xs={12} sm={6} md={3}  >
          <Item style={{height:'14vh', backgroundColor:'rgba(255, 255, 255, 0.5)', borderRadius:'15px'}}>
            <div className='card'>
                <div>
                <img src='Icons/Patient.svg'/>
                </div>
                <div className='text2'   >
                <div style={{fontSize:'14px'}}>Update Records</div>
                <div style={{fontSize:'36px', fontWeight:'bold',marginTop:"-9px"}}>190</div>
                </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} >
          <Item style={{height:'100%', backgroundColor:'rgba(255, 255, 255, 0.6)', borderRadius:'15px',overflow:'hidden'}}>
            <div className='therapist_cont'>
               <div className='t_header'>
                <div className='t_info'>
                <img src='Icons/Health.svg'/>
                <div style={{fontSize:'16px', fontWeight:'bold', width:"100%", marginLeft:'10px'}} >Available Therapist</div>
                </div>
               
                <button className='view_all'>View All</button>
               </div>
               <div style={{marginTop:'25px'}}>
                 <Grid container spacing={1}>
                {users.map((user, index) => (
                    <Grid  item  xs={12} sm={6} md={3} className='user-container' key={index}>
                    <img src={user.img} />
                    <p>{user.name}</p>
                    </Grid>
                ))}
                </Grid> 
                </div>         
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} >
        <Item style={{height:'100%', backgroundColor:'rgba(255, 255, 255, 0.6)', borderRadius:'15px',overflow:'hidden'}}>
            <div className='therapist_cont'>
               <div className='t_header'>
                <div className='t_info'>
               
            <IconButton className="asdfg"size="small" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <img style={{width:"30px", height:'30px'}}src='Icons/Communication.svg'/>
              </Badge>
            </IconButton>
            <div style={{fontSize:'16px', fontWeight:'bold', width:"100%"}} >Unread Chats</div>
            <IconButton
              size="small"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
              <img style={{width:"30px", height:'30px'}}src="Icons\Objects & Tools.svg" alt="Download" />
              </Badge>
            </IconButton>
            <div style={{fontSize:'16px', fontWeight:'bold', width:"100%"}} >Unread Chats</div>


                </div>
               
                <button className='view_all'>View All</button>
               </div>

               <div className='patient_list'>
                <div className='card2'>
                <div className='p_info'>
                    <div>
                    <img src='Icons/Rectangle 28.svg'/>
                    </div>
                    <div className='p_name'   >
                    <div style={{fontSize:'14px',fontWeight:'bold'}}>Sahal Nadolia</div>
                    <div style={{fontSize:'13px'}}>Patient</div>
                    </div>
                    </div>
                    <div>
                    <img src='Icons/SideArrow.svg'></img>
                    </div>
                </div>
            <div className='card2'>
            <div className='p_info'>
                <div>
                <img src='Icons/Rectangle 28 (1).svg'/>
                </div>
                <div className='p_name'   >
                <div style={{fontSize:'14px',fontWeight:'bold'}}>Abhishek Kumar</div>
                <div style={{fontSize:'13px'}}>Patient</div>
                </div>
                </div>
                <div>
                <img src='Icons/SideArrow.svg'></img>
                 </div>
            </div>
            <div className='card2'>
            <div className='p_info'>
                <div>
                <img src='Icons/Rectangle 28 (2).svg'/>
                </div>
                <div className='p_name'   >
                <div style={{fontSize:'14px',fontWeight:'bold'}}>Akhat Parsai</div>
                <div style={{fontSize:'13px'}}>Patient</div>
                </div>
                </div>
                <div>
                <img src='Icons/SideArrow.svg'></img>
                 </div>
            </div>
            <div className='card2'>
                <div className='p_info'>
                <div>
                <img src='Icons/Rectangle 28 (3).svg'/>
                </div>
                <div className='p_name'>
                <div style={{fontSize:'14px',fontWeight:'bold'}}>Vishwanath Sawant</div>
                <div style={{fontSize:'13px'}}>Patient</div>
                </div>
            
                </div>
                <div>
                <img src='Icons/SideArrow.svg'></img>
                 </div>
            </div>
                </div>
            </div>
          </Item>
        </Grid>
      </Grid>

    </Box>
    </div>
  )
}

export default UserDetails
