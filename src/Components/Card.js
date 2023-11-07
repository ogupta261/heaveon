import React from 'react'

export default function Card(props) {
    return (
        <>
            <div className="mx-2 my-2 rounded text-start" style={{ width: "45%", minWidth: "200px", backgroundColor: props.primary, boxShadow: `0px 0px 2px 0px ${props.primary}`, alignSelf: props.align  }}>
                <div className="p-4">
                    <figure className="figure">
                        {props.title && <figcaption className="figure-caption fw-bold fs-4 text-wrap mb-2" style={{ color: props.secondary }}>{props.title}</figcaption>}
                        {props.caption && <figcaption className="figure-caption lh-2 text-wrap" style={{ color: props.secondary }}>{props.caption}</figcaption>}
                    </figure>
                </div>
            </div>
        </>
    )
}
