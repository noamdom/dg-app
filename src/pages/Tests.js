import React, { useState, useEffect } from "react";

export default function Tests() {
    const [title, setTitle] = useState("All steps");

    return (
        <div>
            <div className="display-4 text-primary mt-3 mb-2">
                {title}
            </div>
            {/* <div><pre>{JSON.stringify(menu, null, 2)}</pre></div> */}

        </div>




    )
}
