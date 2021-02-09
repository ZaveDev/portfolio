import React from "react";
import Styled from "styled-components";

const SContact = Styled.div`
  height: 94vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  section{
    text-align: left;
    padding: 2%;
    background: rgb(39, 41, 59);
    border-radius: 10px;
    width: 50%;
    height: 50%;
    h1{
      padding-left:10%;
    }
    form{
      padding-left:10%;
      display: flex;
      flex-direction: column;
      input, textarea{
        width: 50%;
        background: rgba(0,0,0,0);  
        border: none;
        border-bottom: 1px solid whitesmoke;
        transition: 0.3s ease-in-out;
        &:focus{
          background: rgba(255,255,255,0.05);
          outline: none;
          border-radius: 3px;
        }
      } 
      button{
        margin-top: 4%;
        width: 25%;
        cursor: pointer;
      }
    }
  }
`;

const Contact = () => {
  return (
    <SContact>
      <section>
        <h1>Connect with me!</h1>
        <form>
          <h3>Name</h3>
          <input type="text" />
          <h3>Email</h3>
          <input type="text" />
          <h3>Message</h3>
          <textarea />
          <button>Submit</button>
        </form>
      </section>
    </SContact>
  );
};

export default Contact;
