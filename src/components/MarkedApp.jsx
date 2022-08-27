import React from 'react';
import {ReactDom} from 'react-dom'
import { marked } from 'marked';
import '../components/MarkedApp.css'

let initialMark = `# ¡Hola! Bienvenido a mi anotador personal
- - - - 

## Este anotador forma parte de uno de los proyectos que realice para FreeCodeCamp

### [¿Que es FreeCodeCamp?](https://www.freecodecamp.org/espanol/learn/) **<--- Aquí podras responder la primera duda que se te viene a la cabeza**

- - - -
## ¿Como fue construido?

> ### Este anotador fue construido enteramente en React, aunque un poco desactualizado ya que no fue construido con Hooks, sino con clases que heredan de \`React.Component\`

Los elementos mas importantes que involucran este proyecto son:
*  El uso de Market para convertir el texto 
*  Cuenta con una clase padre que hereda el estado de este \`textarea\` y el preview de abajo que en realidad es un \`<div />\` vacio donde se va cargando todo el codigo.

#### ¿Como funciona Marked?

\`\`\`\`
 function (nuestroString) => {
 return marked.parse(nuestroString)
}

\`\`\`\`

> **marked.parse** hace la mayoria del trabajo, convirtiendo el string que recibe de este \`textarea\` a codigo HTML, luego se carga en el <div/> vacio por medio de \`dangerouslySetInnerHTML\`

![reactLogo](https://i.postimg.cc/RZx05qvS/react2.png)
\n **(Las imagenes se mantienen pequeñas para no entorpeser a la vista)**`

export class MarkedApp extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        textarea: initialMark,
        preview: marked.parse(initialMark),
    };
    
    this.handleChange = this.handleChange.bind(this);
   
  }
  
handleChange(e) {
  this.setState(state => {
    return {
      textarea: e.target.value,
      preview: e.target.value,
    }
  })
}
  


render(){
    return (
        <div id='appContainer'>
          <TextArea handleChange={this.handleChange} textarea={this.state.textarea}/>
          <Preview  changePreview={this.changePreview} preview={this.state.preview} />
        </div>
    )
  }
  
}


const TextArea = (props) => {
   return (
     
     <div id='textAreaContainer'>
       
       <p class='windowHeader'>Editor</p>
       <textarea
      className='content textAreaContent'
      value={props.textarea}
      onChange={props.handleChange}
      id='editor'></textarea>
        
      </div>
    
)}




const Preview = (props) => {

  let data = marked.parse(props.preview);

  return (
    <div id='previewContainer'>
      <p className='windowHeader'>Notepad</p>
      <div className='content previewContent' id='preview' dangerouslySetInnerHTML={{__html: data}} />
      
    </div>
    
  )
 
}
