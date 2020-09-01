import React, {useState} from 'react'
import renderHTML from 'react-render-html';

export default function Question({index, question, options, correct, selected}) {

    let newOptions = [...options, correct];

    const shuffle = (options) => {
        options.sort(() => Math.random() - 0.5);
    }
    shuffle(newOptions)

    const [answer, setAnswer] = useState(newOptions);


    return (
       <div className="mt-5">
			<div>{index}: {renderHTML(question)}</div>
            {answer.map((text, index) => {
                return <button key={index} className="btn btn-primary mt-2 mr-2" onClick={() => {
                    setAnswer([text]);
                    selected(text)
                }}>{renderHTML(text)}</button>
            })}
        </div>
    )
}