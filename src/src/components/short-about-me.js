import './short-about-me.css'

const Abouts = () =>{
    return(
        <div className='app-about-me'>
                <div className='about-container'>
                    <p className='intro'>A Little Bit About Me</p>
                    <p className='body'> I'm a Software Developer -  I enjoy solving algorithms and creating projects that have real world 
                    applications. To help with my goals in software development I'm pursuing a Bachelor's of Computer Science Degree at Dalhousie University!</p>

                    <p className='body'>I specialize in Java programming having developed several projects in both teams and on my own. I 
                    am very passionate about computers and networking! Currently I am completeing my Co-op at Grant Thornton LLP as a IT Analyst!</p>
                </div>

                <div className='seperator'></div>
                
                    <div className='category-container'>
                        <p className='languages'>Languages</p>
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
                                <li>PHP</li>
                            </ul>
                        </div>
                        
                </div>

                <div className='seperator'></div>
                <div className='button-container'>
                    <button>Projects</button>
                    <button>Contact</button>
                    <button>About</button>
                </div>
                <footer>&copy; 2024 Branden McInnis. All rights reserved.</footer>
        </div>
    )
}

export default Abouts