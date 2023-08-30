// TEST 하는법: https://codesandbox.io/
// input 관련 common CUSTOM HOOK EX
import "./styles.css";
import { useState } from "react";
const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        const {
            target: { value }
        } = e;

        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};


export default function App() {
    let maxLen = (value) => value.length < 10;
    const name = useInput("수한", maxLen);
    const email = useInput("수한");
    return (
        <div className="App">
            <h1>hello</h1>
            <input placehorder="name" {...name} />
            <input placeholder="email" {...email} />
        </div>
    );
}
