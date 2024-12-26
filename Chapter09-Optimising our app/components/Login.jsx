import React from 'react';
import { Formik, useFormik } from 'formik';
import ReactDOM from "react-dom";
import * as Yup from "yup";
import "../App.css";

const Login = () => {

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3).required("Please enter name"),
            email: Yup.string().email("Invalid email address").required("Please enter email"),
            password: Yup.string().min(5, "minimum 5 characters needed").required("Please enter password"),
        }),
        onSubmit: (values, action) => {
            alert(JSON.stringify(values, null, 2));
            action.resetForm();
        }
    });

    return (
        <div className='login-form-box'>
            <div className='form-container'>
                <h2>Login</h2>
                <div className='form-modal'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-name'>
                            <label htmlFor='name'>Name</label>
                            <input name='name' id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            {touched.name && errors.name ? (
                                <div className='error'>{errors.name}</div>
                            ) : null}
                        </div>
                        <div className='form-email'>
                            <label htmlFor='email'>Email</label>
                            <input name='email' id='email' value={values.email} onChange={handleChange} nBlur={handleBlur} />
                            {touched.email && errors.email ? (
                                <div className='error'>{errors.email}</div>
                            ) : null}
                        </div>
                        <div className='form-password'>
                            <label htmlFor='password'>password</label>
                            <input name='password' id='password' value={values.password} onChange={handleChange} nBlur={handleBlur} />
                            {touched.password && errors.password ? (
                                <div className='error'>{errors.password}</div>
                            ) : null}
                        </div>
                        <div className='login-btn-form'>
                            <button type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);