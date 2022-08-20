
import './App.css';
import Estreno from './componentes/Estreno'; 

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estrenos 2022 / 2023</h1>
        <Estreno
        foto='john'
        nombre='John wick 4'
        fecha='24 de Marzo de 2023'
        genero='Accion, suspenso, aventura, crimen'
        descripcion='No se ha lanzado una sinopsis oficial de lo que nos espera en John Wick 4, pero todo apunta a una continuación más o menos directa del final de la tercera entrega. Recordemos que el personaje interpretado por Reeves era traicionado por Winston, quien le disparaba en repetidas ocasiones, recuperando así su cargo como gerente del Continental.'
        />
        <Estreno
        foto='knock'
        nombre='Knock at the Cabin'
        fecha='February 3, 2023 '
        genero='Horror, mistery'
        descripcion='Knock at the Cabin is an upcoming American apocalyptic horror film written, directed and produced by M. Night Shyamalan for Blinding Edge Pictures. It stars Dave Bautista, Rupert Grint, Nikki Amuka-Bird, Ben Aldridge, and Jonathan Groff.'
        />
        <Estreno
        foto='quiet'
        nombre='A Quiet Place: Day One'
        fecha='September 22, 2023'
        genero='Horror'
        descripcion='A Quiet Place: Day One (also known as A Quiet Place Prequel) is a 2023 American horror film, a spinoff and prequel to the A Quiet Place film series. Michael Sarnoski directs the prequel/spinoff, produced by Paramount Pictures, Platinum Dunes and Sunday Night Productions, distributed by Paramount Pictures, the cast is unknown yet.
        A Quiet Place: Day One will be released in the United States in 2023 by Paramount Pictures.'
        />
         <Estreno
        foto='scream'
        nombre='Scream 6'
        fecha='March 31, 2023'
        genero='Horror, gore'
        descripcion='In the next installment, the four survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City.'
        />
        <Estreno
        foto='aquaman'
        nombre='Aquaman and the lost kingdom'
        fecha='March 17, 2023'
        genero='Action, superhero,science fiction, fantasy. '
        descripcion='Aquaman forges an uneasy alliance with an unlikely ally in a bid to save Atlantis and the rest of the planet.'
        />
        <Estreno
        foto='avatar'
        nombre='Avatar 2'
        fecha='December 15, 2022 '
        genero='Action, adventure, science fiction, fantasy'
        descripcion='Jake Sully and Neytiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.'
        />
        <Estreno
        foto='fastx'
        nombre='Fast X'
        fecha='May 19, 2023'
        genero='Action, adventure, crime film'
        descripcion='Fast X is an upcoming American action film directed by Louis Leterrier and written by Justin Lin and Dan Mazeau. It is the sequel to F9, serving as the tenth main installment, and the eleventh feature-film in the Fast y Furious franchise.'
        />
        <Estreno
        foto='wonka'
        nombre='Wonka'
        fecha='December 15, 2023'
        genero='Comedy, musical, adventure, fantasy, childrens film'
        descripcion='Wonka is an upcoming musical fantasy film directed by Paul King from a screenplay written by Simon Farnaby and King. The film serves as a prequel to the 1964 novel Charlie and the Chocolate Factory by Roald Dahl and stars Timothée Chalamet as the title character, following his early days as an eccentric chocolatier. '
        />
        
   
      </div>
    </div>
  );
}

export default App;
