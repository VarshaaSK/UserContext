import { fireEvent, render, screen } from '@testing-library/react';
import Profile from '../Profile';
import { LoginContext } from '../../LoginContext/LoginContext';

// const myName = "Varshaa"

// const userName = {myName};
// console.log(userName.myName);

// const MockLoginContext = () => {
//     return (
//         <LoginContext.Provider value={userName}>
//             <Profile/>
//         </LoginContext.Provider>
//     )
// }
const userName = 'varshaa'
const email = 'varshaa.harinee@gmail.com'

const MockLoginContext = () => {
    
    return (
        <LoginContext.Provider value={{userName,email}}>
            <Profile/>
        </LoginContext.Provider>
    )
}



it("Should check if Username is present", () =>{
    render(<MockLoginContext/>)
    // const userNameElement = screen.getByRole("heading",{name : userName});
    const userNameElement = screen.getByText('varshaa');
    console.log(userName)
    expect(userNameElement).toBeVisible();
})

it("Should check if Email is present", () =>{
    render(<MockLoginContext/>)
    // const userNameElement = screen.getByRole("heading",{name : userName});
    const emailElement = screen.getByText('varshaa.harinee@gmail.com');
    console.log(email)
    expect(emailElement).toBeVisible();
})