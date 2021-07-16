/* import moment from 'moment'; */
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css'

function Avatar({ hash }) {

  const url = `http://www.pngmart.com/files/${hash}`;
  return (
    <img src={url}
      className="imagen"
      alt="avatar" />
  )
}
Avatar.propTypes = {
  hash: PropTypes.string
};

function Nombre({ txt }) {
  return (
    <div className="nombre">
      {txt}
    </div>
  )
}

Nombre.propTypes = {
  txt: PropTypes.string
};


function Tarjeta({ files }) {
  
  return (

    <div className="row">
      {files.map(file=>( 
           <div className="column" key={file.id}>
            <div className="card"  >
              <Avatar hash={file.gravatar}/>
              <p>{file.titulo}</p>
            </div>
            </div>
         ))}
      
    </div>

  );
}

Tarjeta.propTypes = {
  files:PropTypes.array

};



const testTarjeta = [
  {
    id: 1,
    gravatar: "17/The-Simpsons-Cartoon-Transparent-Background.png",
    titulo:"Bart"
    
  },
  {
    id: 2,
    gravatar: "17/The-Simpsons-Cartoon-Transparent-PNG.png",
    titulo:"Lisa"
    
  },

  {
    id: 3,
    gravatar: "17/The-Simpsons-Cartoon-PNG-Image.png",
    titulo:"Simpson Family"
   
  },
];


ReactDOM.render(<Tarjeta files={testTarjeta} />, document.querySelector('#root'));