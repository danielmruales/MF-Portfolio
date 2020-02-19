import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js';
import {Link} from 'react-router-dom'
import Education from './educationPic.jpg'
import Activity from './activityPic.jpg'
import Impact from './impactPic.jpg'
import './Innovation.css'

class Services extends Component {
   
   
    render() {
        var heroQuote = `"Innovating huaman connection through
        organizational diversity and inlcusion"`

        return (
            <div>
                <Navbar/>
                <div className='serviceTest'>
                    <p>{heroQuote}</p>
                </div>
                <hr width="1" size="125" color='#fff' style={{borderLeft: 'dashed 2pt black', marginTop:'20pt' }}/>
                <div className='marketing'>
                    <img src={Education} alt='' className='secondPics'/>
                    <div className='marketingTitle'>
                        <h1>Education & Courses</h1>
                        <p>Completed educational opportunities and courses</p>
                        <p>taken to gain experience, knowledge, and training in</p>
                        <p>fields related to organizational diversity and inclusion work</p>
                        <Link to='/education' className='picsBtn'>View Pics!</Link>
                    </div>
                </div>
                <div className='photo'>
                    <div className='photoTitle'>
                        <h1>Experiences & Activities</h1>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                    </div>
                    <img src={Activity} alt='' className='secondPics' onClick={() => this.props.history.push('/experiences')} />
                </div>
                <div className='business'>
                    <img src={Impact} alt='' className='secondPics' onClick={() => this.props.history.push('/impact')}/>
                    <div className='businessTitle'> 
                        <h1>Impact</h1>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                        <p>lorem impusm lorem impusm lorem impusm lorem impusm</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;

