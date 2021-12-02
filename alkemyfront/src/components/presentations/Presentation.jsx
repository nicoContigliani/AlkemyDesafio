import React from 'react'
import Info from './Info'
import Transition from './Transition'

const Presentation = (props) => {
    console.log(typeof(props.value.data.id_user),"presentacion")


      switch(props.value.data.id_user) {
    case 0:
      return <Info/>;
    case !0:
      return 'You are a Manager.';
    default:
      return <Transition/>;
  }

    return (
        <div className="presentation">
            <div className="container">
                <h1>Esta es la presentación</h1>

            </div>
        </div>
    )
}

export default Presentation
