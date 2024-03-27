import { useEffect, useState } from "react";

const App = () => {
    const [text,setText] = useState('')
    useEffect(() =>{
        const handleChange = (e) => {
            setText(e.target.value)
        }
    },[text])
    return (
        <>
            <div className="app">
                <div className="textarea">
                    <input type="text" value={text} onChange={handleChange} />
                </div>
                <div className="preview">
                    <input type="text" value={text}  contentEditable/>
                </div>
            </div>
        </>
    )
}

export default App;