import React from 'react'

function Faq({ faq, index, toggleFAQ }) {
    return (
        <div
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question">
                <span dangerouslySetInnerHTML={{ __html: faq.question }}></span>
                <span style={{ paddingRight: "10px" }}>+</span>
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default Faq