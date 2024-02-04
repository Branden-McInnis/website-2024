import './short-about-me.css'
import { NavLink } from 'react-router-dom'

const Abouts = () =>{
    return(
        <div className='app-about-me'>
                <div className='about-container'>
                    <p className='intro'>A little bit about me</p>
                    <p className='body'> I'm a Software Developer -  I enjoy solving algorithms and creating projects that have real world 
                    applications :). To help with my goals in software development I'm pursuing a Bachelor's Degree at Dalhousie University!</p>

                    <p className='body'>I specialize in Java programming having developed several projects in both teams and on my own! I 
                    am very passionate about computers and servers and I am currently completeing my Co-op at Grant Thornton as a IT Analyst :D.</p>
                </div>

                <div className='seperator'></div>
                
                    <div className='category-container'>
                        <button className='languages'>Languages</button>
                        <button className='frameworks'>Frameworks</button>
                        <button className='soft-skills'>Soft skills</button>
                    </div>
                <div className='language-box'>
                        <div className='language-text'>
                            <ul>
                                <li> Java </li>
                                <li> C </li>
                                <li> SQL </li>
                                <li> JavaScript </li>
                                <li> HTML </li>
                                <li> CSS </li>
                                <li>Python</li>
                            </ul>
                        </div>
                </div>

                <footer>&copy; 2024 Branden McInnis. All rights reserved.</footer>
        </div>
    )
}

export default Abouts