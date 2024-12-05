import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
console.log('hello im header');

const Header = () => {
  const [user, setUser] = useState(null);
  console.log('hello');
  // useEffect(() => {
  //   console.log('Проверка текущего статуса пользователя');
  //   // Проверка текущего статуса пользователя
  //   fetch('/api/v1/current_user')
  //     .then((response) => response.json())
  //     .then((data) => setUser(data.user));
  // }, []);

  // const handleLogout = () => {
  //   console.log('Удаление сессии пользователя');
  //   // Удаление сессии пользователя
  //   fetch('/users/sign_out', {
  //     method: 'DELETE',
  //     headers: {
  //       'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content,
  //     },
  //   }).then(() => setUser(null));
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Recipe App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">Welcome, {user.email}</span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/users/sign_up">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users/sign_in">
                    Log In
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
