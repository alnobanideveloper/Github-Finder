import React, { useContext } from 'react';
import AlertContext from '../../contexts/alert/AlertContext';
const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i/> {alert.msg}
      </div>
    )
  )
}



export default Alert;