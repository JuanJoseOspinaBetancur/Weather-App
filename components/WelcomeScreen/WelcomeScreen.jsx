import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {

    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)//vanta va a ser inicializado en 0

    console.log("myRefDiv", myRefDiv.current)

    useEffect(() => {
        console.log("myRefDiv con useEffect", myRefDiv.current)



        //solo pasa una vez por dentro del if
        //tambien se puede negar con el !vanta
        if (!vanta) {
            //aca inicializamos vanta
            //Activo el efecto de "Clouds"
            Clouds({
                THREE,
                el: myRefDiv.current
            })
            console.log("Establezco vanta a un valor diferente de 0")
        }
        //Al salir de la pantalla debemos detener el efecto
        //y des-asociar tosos los recursos (div+vanta effect)
        return () => {
            //Dentro de esta funcion se va a realizar la tarea de destruir los recursos tomados por "vanta"
            if (vanta) { vanta.destroy() 
                console.log("libero los recursos") }
        }

    }, [vanta])//con esto me aseguro que siga funcionando bien, si tuviera mas variables "use"


    return (
        <div ref={myRefDiv}>

            WelcomeScreen

        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,

}

export default WelcomeScreen