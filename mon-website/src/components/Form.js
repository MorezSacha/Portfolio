import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://formspree.io/f/xgvwgoqa"
  method="POST">
            <label>Votre Nom</label>
            <input type ="text" name="name" required></input>
            <label>Email</label>
            <input type ="email" name="email" required ></input>
            <label>Objet</label>
            <input type ="text" name ="Subject" required></input>
            <label>Message</label>
            <textarea name="message" rows="6"placeholder="Entrez votre message ici" />
            <button type="submit" className="btn">Envoyer</button>
        </form>
    </div>
  )
}

export default Form