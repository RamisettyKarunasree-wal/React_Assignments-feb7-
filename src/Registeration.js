function Registeration() {
    function showMessage(){
        alert(`Registration Successful`);
    }
    return (
        <div className="register">
            <h1 className="t_heading">Register Here</h1>
            <table className="reg_table">
                <tr>
                    <td className="t_label">First Name:</td>
                    <td><input type="text" name="firstname" placeholder="Enter First Name" /></td>
                </tr>
                <tr>
                    <td className="t_label">Last Name:</td>
                    <td><input type="text" name="lastname" placeholder="Enter Last Name" /></td>
                </tr>
                <tr>
                    <td className="t_label">Email:</td>
                    <td><input type="email" name="email" placeholder="Enter Email" /></td>
                </tr>
                <tr>
                    <td className="t_label">User Name:</td>
                    <td><input type="text" name="username" placeholder="Enter User Name" /></td>
                </tr>
                <tr>
                    <td className="t_label">Age:</td>
                    <td><input type="number" name="age" placeholder="Enter Age" /></td>
                </tr>
            </table>
            <button className="reg_btn" onClick={showMessage}>Register</button>
        </div>
    );
}
export default Registeration;