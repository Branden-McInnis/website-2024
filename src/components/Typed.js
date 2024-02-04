import { TypeAnimation } from "react-type-animation"
import './typed.css'
const  Typed = () => {
    return(
        <div className="app">
            <div className="container-typed">
                <div className="animated-typing">
                    <TypeAnimation

                    sequence={[
                        "I'm a Full Stack Developer.",
                        1000,
                        "Computer Science Student.",
                        1000,
                        "Life Long Learner.",
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                            
                    
                </div>
            </div>
        </div>
    )
}

export default Typed