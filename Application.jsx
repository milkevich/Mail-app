import {useRef} from "react";
import emailjs from '@emailjs/browser';
import './Application.css';



const Application = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_b6cqkjh', 'template_q3mdjb7', form.current, 'kxw8hLvZFDeipK2xX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    const form = useRef()

    return (
        <section>
            <div className="container">
                <h1>Fill Out the application!</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input name="Full_Name" placeholder="Full Name" type="text" required /> <br/>
                    <input name="Email_Adress" placeholder="Your Email" type="email" required /><br/>
                    <input name="Age" placeholder="Your Age" type="number" required /> <br/>
                    <input name="Company_Name" placeholder="Company Name" type="text" required /> <br/>

                    <button>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Application;