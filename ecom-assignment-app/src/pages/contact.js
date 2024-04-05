import React from "react";
import {Container, Row} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
 
const schema = yup
  .object({
    fullName: yup.string().min(3, "Name must be at least 3 characters or longer").required(),
    subject: yup.string().min(3, "Subject must be at least 3 characters or longer").required(),
    eMail: yup.string().email("E-mail is not valid").required("E-mail is a required field"),
    bodyMessage: yup.string().min(3, "Message must be at least 3 characters or longer").required(),
  })
  .required();


function Contact(){
    const successRef = React.createRef();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
      function onSubmit(data) {
        console.log(data);
        reset();
        successRef.current.innerHTML = "Great success! Your message was recieved!";
      }

    return (
        <main>
            <Container>
                <h1>Contact Us</h1>
                <h2>Please reach out with any request,<br></br> 
                we will get back to you as soon as we can.</h2>
                
                <div className="justify-content-center">
                    <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                        
                        <p ref={successRef} className="text-success"></p>

                        <label htmlFor="fullName">Full name: </label>
                        <input {...register('fullName')} />
                        <p className="text-danger">{errors.fullName?.message}</p>

                        <label htmlFor="subject">Subject: </label>
                        <input {...register('subject')} />
                        <p className="text-danger">{errors.subject?.message}</p>

                        <label htmlFor="eMail">E-mail: </label>
                        <input {...register('eMail')} />
                        <p className="text-danger">{errors.eMail?.message}</p>

                        <label htmlFor="bodyMessage">Message: </label>
                        <input {...register('bodyMessage')} />
                        <p className="text-danger">{errors.bodyMessage?.message}</p>

                        <button className="btn btn-info mt-1 mb-2" type="submit">Submit</button>
                    </form>
                </div>
            </Container>
            
        </main>
    );
};
 
export default Contact;