import React, { useState } from 'react';
import uuid from 'uuid';
import { LoggedOut } from './components/wrapper';
import logo from './logo.png';
import {
    Form,
    FormFooter,
    FormFooterLink,
    FormHeader,
    FormHeaderLogo,
    FormHeaderTitle,
    FormInput,
    FormBtn
} from './components/form';

const App = () => {

    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setState({ 
            ...state, 
            [e.target.name]: e.target.value 
        })
    }

    const handleLogin = () => {
        console.log(state);
    }

    const handleChangeView = () => {
        console.log('Change view');
    }

    return (
        <LoggedOut>
            <Form>
                <FormHeader>
                    <FormHeaderLogo classNames='fadeUp' src={logo} alt='Logo' />
                    <FormHeaderTitle classNames='fadeUp-1'>Graphiti</FormHeaderTitle>
                </FormHeader>
                <FormInput placeholder='username' 
                           id={uuid()} 
                           classNames='fadeUp-2' 
                           name='username' 
                           type='text' 
                           onChange={handleChange} 
                        />
                <FormInput placeholder='password' 
                           id={uuid()} 
                           classNames='fadeUp-3' 
                           name='password'
                           type='password'
                           onChange={handleChange} 
                        />
                <FormBtn classNames='fadeUp-4' onClick={handleLogin}>Login</FormBtn>
                <FormFooter classNames='fadeUp-5'>
                    <FormFooterLink onClick={handleChangeView}>Don't have an accout?</FormFooterLink>
                </FormFooter>
            </Form>
        </LoggedOut>
    )
}

export default App;