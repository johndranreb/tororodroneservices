import React from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Head from 'next/head'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })


export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [alertColor, setAlertColor] = useState('text-green-500');


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    }
    const jsonData = JSON.stringify(data);
  
    const response = await fetch('/api/form',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
    },
    body: jsonData,
  });
    const result = await response.json();
    console.log(result.data);

    setSubmitStatus(true);
    setResponseMessage(result.data);

    if(!response.ok){
        setAlertColor('text-red-500');
    }
    else{
      setAlertColor('text-green-500');
    }
  }

  return (
    <>
    <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon-32x32.png" />
    </Head>
     <Header/>
      <section>
        <div className="container mx-auto lg:max-w-xl py-16">
      <h1 className="text-4xl text-center text-slate-700 py-8">Contact us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name"/>

        <label hmltFor="email">Email:</label>
        <input type="email" id="email"/>

        <label hmltFor="message">Message:</label>
        <input type="message" id="message"/>

        <button type="submit">Submit</button>
      </form>
      {submitStatus ? <SubmissionAlert message = {responseMessage} alertColor={alertColor}/>: null}
      </div>
      </section>
   <Footer/>
    </>
  );
}


const SubmissionAlert = ({message, alertColor}) => {
  return (
    <div className={`${alertColor} py-2 px-4 mt-4 font-bold`}>{message}
    </div>
  )
}