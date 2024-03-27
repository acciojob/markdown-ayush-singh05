import { useEffect, useState } from "react";

const App = () => {
    const [text, setText] = useState('')
    
    return (
        <>
            <div className="app">
                <div className="textarea">
                    <textarea
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        className="textarea"
                    />
                </div>
                
                <div className="preview">
                    <h1 className="loading">{text.slice(1)}</h1>
                </div>
            </div>
        </>
    )
}

export default App;