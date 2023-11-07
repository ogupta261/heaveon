import React from 'react'

export default function Footer(props) {

    return (
        <>
            <footer className="d-flex flex-column py-3 my-4 justify-content-center align-items-center align-self-bottom my-auto w-100" style={{ backgroundColor: 'transparent', color: props.secondary, marginTop: '50px', position: 'relative', bottom: 0, left: 0 }}>
                <div className="col-md-6 d-flex flex-column rounded justify-content-center footer-contact w-75" style={{ backgroundColor: props.primary, boxShadow: `0px 0px 2px 0px ${props.secondary}` }}>
                    <span className="fs-1 fw-bolder text-center mb-1">Heaveon</span>
                    <span className="fs-2 fw-semibold text-center mb-4">Bold and Futuristic</span>
                    <div className="d-flex flex-row flex-wrap justify-content-center my-3">
                        <div className="text-center">
                            <input type="email" className="form-control rounded-pill w-100" id="floatingInput" placeholder="Enter Your Email" />
                        </div>
                        <button className="btn bg-transparent fw-bold border-0" style={{ color: props.secondary }}>Notify Me</button>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    {/* <img className='rounded-circle mx-2' src={logo} alt="" /> */}
                    <span className="mb-md-0" style={{ color: props.secondary }}>© 2023 Company, Inc</span>
                </div>
            </footer>
        </>
    )
}
