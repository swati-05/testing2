import React, { useState } from 'react'

function ImageUpload() {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log("File" , e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
            <div className="App">

                <input type="file" onChange={handleChange} />
                {/* <img src={file} /> */}

            </div>



        </>
    )
}

export default ImageUpload