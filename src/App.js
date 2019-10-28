import React, { Suspense } from "react";
import { createResource } from "./personApi";
import { Person } from "./Person";

const resource = createResource();

function App() {
    return (
        <div className="App">
            <Suspense fallback={<h1>Loading...</h1>}>
                <Person resource={resource} />
            </Suspense>
        </div>
    );
}

export default App;
