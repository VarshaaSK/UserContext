import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../Login';
import { LoginContext } from '../../LoginContext/LoginContext';

const setUsername = jest.fn();
const setShowProfile = jest.fn();
const setEmail = jest.fn();

const MockLogin = () => {
    return(
        <LoginContext.Provider value={{setShowProfile,setUsername,setEmail,setShowProfile}}>
            <Login/>
        </LoginContext.Provider>
    )
}


describe("Should check Login Credentials" , () => {

    it("Should check for the Input Field" , () => {
        render(<Login/>)
        const userName = screen.getByPlaceholderText("Username");
        expect(userName).toBeInTheDocument();
    })

    it("Should check for the Email input Field" , () =>{
        render(<Login/>)
        const email = screen.getByPlaceholderText("email");
        expect(email).toBeVisible();
    })

    it("Should check if the Username value is presnt", () => {
        render(<MockLogin/>)
        const userNameValue = screen.getByPlaceholderText("Username");
        fireEvent.click(userNameValue);
        fireEvent.change(userNameValue,{target : {value : "varshaa"}});
        expect(userNameValue.value).toBe("varshaa");
    })

    it("Should check if the Email value is present", () => {
        render(<MockLogin/>)
        const emailValue = screen.getByPlaceholderText("email");
        fireEvent.click(emailValue);
        fireEvent.change(emailValue,{target:{value : "varshaa.harinee@gmail.com"}});
        expect(emailValue.value).not.toBe("varshaa@gmail.com");
    })
})