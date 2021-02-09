import React, { Fragment } from 'react'

export const AddUserComponent = (props) => {
    let firstNameInput = React.createRef();
    let lastNameInput = React.createRef();

    const addUser = () => {
        let singleUser = {
            firstName: firstNameInput.current.value, 
            lastName : lastNameInput.current.value
        }
        props.user.push(singleUser)
    }

    const handleClick = () => {
        addUser();
    }

    return (
        <Fragment>
            <label htmlFor="firstName">First Name :</label>
            <input ref={firstNameInput} type="text" name="firstName" id="firstName"/>
            <label htmlFor="lastName">Last Name :</label>
            <input ref={lastNameInput} type="text" name="lastName" id="lastName"/>
            <button onClick={handleClick}>{props.btnText}</button>
        </Fragment>
    )
}
