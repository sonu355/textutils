import React from 'react'

const Alert = (props) => {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert'>
        <strong>{props.alert.type}</strong>: {props.alert.msg}
      <button type='button' data-bs-dismiss='alert' className='btn-close' aria-label='Close'></button>
    </div>
  )
}

export default Alert
