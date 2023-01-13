import { useState } from 'react'
import '../css/Account.css'
import '../css/Default.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Account() {

  const Element = (props)=>{
    return <div className='element'>{props.titolo}</div>
  }
  
  return (
    <div className="Account">

        <div className="nav-bar">
            <div className="bar">
            <Link to={'/'} className="home">home</Link>
            </div>
            <Link to={'Account'} className="circleAccount"><div className="imgAccount"></div></Link>
        </div>

        <div className="content">

          <div className="info">
            <div className="foto"></div>
            <div className="testo">
              <div className="nome">Federico Anzani</div>
              <div className="telefono">+39-111-222-3333</div>
              <div className="email">federico.anzani04@gmail.com</div>
            </div>
          </div>

          <div className="sezione">
            <div className="titolo">Ordini</div>
            <Element titolo="I miei ordini"/>
            <Element titolo="Iscriviti a FarmaDrone prime"/>
          </div>

          <div className="sezione">
            <div className="titolo">Impostazioni Account</div>
            <Element titolo="Accesso e sicurezza"/>
            <Element titolo="Inidirizzi di spedizione"/>
            <Element titolo="collegamento con SPID e CIE"/>
            <Element titolo="Gestisci metodi di pagamento"/>
          </div>

          <div className="sezione">
            <div className="titolo">Privacy</div>
            <Element titolo="Autorizzazioni Privacy"/>
            <Element titolo="Visualizza Termini e Condizioni"/>
            <Element titolo="Scarica tutti i tuoi Dati"/>
          </div>
          
          <div className="sezione">
            <Element titolo="Esci"/>
          </div>

          <div className="sezione">
            <Element titolo="Elimina Account"/>
          </div>

        </div>

    </div>
  )
}

export default Account
