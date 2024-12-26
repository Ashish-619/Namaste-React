import React from "react";
const Contact = () => {
    return (
        <>
            <h1>Contact us Page</h1>
            <form>
                <input type="text" placeholder="Name.." className="p-3 bg-slate-300 mx-3"/>
                <input type="email" placeholder="Email.." className="p-3 bg-slate-300 mx-3"/>
                <input type="submit" className="p-3 bg-slate-500 mx-3 cursor-pointer"/>
            </form>
        </>
    );
}

export default Contact;