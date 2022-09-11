import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className="p-4" style={{ minHeight: '25vh' }}>
            <div className="d-flex justify-content-evenly gap-5 m-auto">
                <div>
                    <h2 style={{ fontWeight: '600' }}>Wiki LoL</h2>
                    <div className="text-start">
                        <h6>
                            ©2022 JDGC14. <br /> All Rights Reserved.
                        </h6>
                        <h6>
                            Powered by <span>React</span>.
                        </h6>
                    </div>
                </div>
                <div className="text-center">
                    <h2 style={{ fontWeight: '600' }}>Contact</h2>
                    <a href="https://www.linkedin.com/in/jdgc14/">
                        <i className="fa-brands fa-linkedin buttons-footer"></i>
                    </a>{' '}
                    <br />
                    <a href="https://github.com/jdgc14/">
                        <i className="fa-brands fa-github buttons-footer"></i>
                    </a>
                    <br />
                    <a href="mailto:joseojedapro@gmail.com">
                        <i className="fa-solid fa-envelope buttons-footer"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
