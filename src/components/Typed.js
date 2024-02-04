import { TypeAnimation } from "react-type-animation"
import './typed.css'
import branden from '../images/Branden.png'
const Typed = () => {
    return(
        <div className="app">
                                        <img className="branden-image" src={branden} alt="Branden Image"/>

            <div className="container-typed">
                <div className="text-contatiner">
                <div className="animated-typing">
                    <p className="about">Hello, I'm</p>
                    <p className="branden">Branden McInnis </p>
                    <TypeAnimation

                    sequence={[
                        "Full Stack Developer.",
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
                    <button className="about">About me</button>

                </div>

            </div>

        </div>
    )
}

export default Typed