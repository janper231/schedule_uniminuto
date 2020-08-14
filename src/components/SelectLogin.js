import React from 'react';
import { Link } from 'react-router-dom';
import { Fab } from '@material-ui/core';

const SelectLogin = props => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
        width: 500,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.12)',
          borderRadius: 20,
          padding: 20,
        }}
      >
        <img
          src="https://i.ytimg.com/vi/5Y1RFQWFGr4/maxresdefault.jpg"
          alt="uniminuto"
          style={{ height: 200, width: '100%', borderRadius: 20 }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Fab variant="extended" style={{ marginTop: '30px' }}>
            <Link
              to="/login/1"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Acceso Docentes
            </Link>
          </Fab>
          <Fab variant="extended" style={{ marginTop: '30px' }}>
            <Link
              to="/login/2"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Acceso Estudiantes
            </Link>
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default SelectLogin;
