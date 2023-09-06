import { useState } from 'react';
import styles from './Contact.module.css'
import PopUp from './PopUpComponent';

//import { useState, useEffect } from 'react';

// import { useFetch } from '../hooks/useFetch';
// import { useState } from 'react';

const url = "https://api.viniciusfranca.com.br/index.php?graphql";
const contactEmail = "viniciusxpb@gmail.com";

const Contact = ({t}) => {

    
   // controls if popup displays
   const [popUp, setPopUp] = useState(false)

    //const [status, setStatus] = useState("Submit");
    //const { data: items, httpConfig, loading } = useFetch(url);

    const [loading, setLoading] = useState(false);

    //mudar óbvio, tem que ser um hook
    const handleSubmit = async (e) => {
        e.preventDefault();
        //setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        const q = {
            operationName: "SEND_EMAIL",
            query:
                `
            mutation SEND_EMAIL {
             sendEmail(
               input: {
                 to: "${contactEmail}"
                 from: "${details.email}"
                 subject: "${details.name}"
                 body: "${details.message}"
                 clientMutationId: "test"
               }
             ) {
               origin
               sent
               message
             }
           }
            `,
            variables: null
        };
        setLoading(true);
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(q),
        });
        //setStatus("Submit");
        let result = await response.json();

        console.log(result);
        setLoading(false);

        setPopUp(true);
        //alert(result.status);
    };



    // const handleSubmit = () => {
    //     debugger;
    //     httpConfig("teste", "POST");
    // };

    return (
        <>
            <div>
                {
                    !loading && <form onSubmit={handleSubmit}>
                    <div className={styles['Contact']}>
                        {/* <input type="text" id="name" required className={styles['Contact__input']} /> */}
                        <div className='contactForm__wrapper-fullname'>
                            <label htmlFor="name" className={styles['Contact__label']}>{t('Name')}:</label>
                            <input type="text" id="name" required className='Contact__input' />
                        </div>
    
                        <div className='contactForm__wrapper-email'>
                            <label htmlFor="email" className={styles['Contact__label']}>E-mail:</label>
                            <input type="text" id="email" required className='Contact__input' />
                        </div>
    
                        <div className='contactForm__wrapper-subject'>
                        <label htmlFor="subject" className={styles['Contact__label']}>{t('Subject')}:</label>
                            <input type="text" id="subject" required className='Contact__input' />
                        </div>
    
                        <div className='contactForm__wrapper-message'>
                        <label htmlFor="message" className={styles['Contact__label']}>{t('Message')}:</label>
                            <textarea id='message' rows={4} cols={40} className='Contact__input' />
                        </div>
    
                    </div>
                    <div  className={styles['Contact__buttonWrapper']}>
                        <button type="submit" className='global-button'>{t('Send')}</button>
                    </div>
                </form>
                }
            
            </div>
            

            <div>
                {loading && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
            </div>

            {popUp && <PopUp t={t} setPopUp={setPopUp}/>}

        </>

    )
}

export default Contact;