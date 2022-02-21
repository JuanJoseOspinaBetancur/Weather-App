import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activo: false,
            intento: 'estamos intentando'
        }

    }


    estaActivo = () => {
        return this.state.activo ? ' activo' : ' No activo'
    }

    //el state es inmutable, no lo puedo cambiar, tiene que ser por una funcion setState
    // incorrecto this.state.activo = true
    onClickHandler = () => {
        this.setState({ activo: !this.state.activo })
        this.setState({ intento: 'intentamos bien :D' })
        console.log(this.state.activo)
    }

    componentDidMount() {

        console.log("El componente se ha montado")

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("estado previo", prevState.activo)
        console.log("estado nuevo", this.state.activo)
        console.log("El componente se ha Actualizado")

    }

componentWillMount(){
    
}

    render() {
        return (

            <div>
                <button onClick={this.onClickHandler}>Activar</button>

                <h1>
                    hola {this.props.saludo} <br /> {this.state.intento}<br />
                    {
                        this.estaActivo()
                    }
                </h1>
            </div>

        )
    }
}
export default ErrorBoundary