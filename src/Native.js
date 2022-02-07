import { useState } from "react";
function Native() {
    let [native, setNative] = useState("Native Here");
    function addNative(event) {
        event.preventDefault();
        let divTag = event.target;
        let inputTag = divTag.native;
        setNative(inputTag.value);
    }
    return (
        <div className="native">
            <form onSubmit={addNative}>
                <h3>Native:{native}</h3>
                <input className="native_input" type="text" placeholder="Enter Your Native Place" name="native" /><br/>
                <button className="native_btn">Add</button><br/>
            </form>
        </div>
    );
}
export default Native;