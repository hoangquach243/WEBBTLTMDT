import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { privateRoute, publicRoutes } from './Route';
import { jwtDecode } from 'jwt-decode';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.element} />;
                    })}
                    {privateRoute.map((route, index) => {
                        const cookies = document.cookie.split(';');
                        let token = null;

                        // Tìm token trong cookies
                        for (let i = 0; i < cookies.length; i++) {
                            const cookie = cookies[i].trim();
                            if (cookie.startsWith('Token=')) {
                                token = cookie.substring('Token='.length);
                                break;
                            }
                        }

                        try {
                            if (token) {
                                const decoded = jwtDecode(token);
                                if (decoded && (decoded.admin || decoded.employee)) {
                                    return <Route key={route.path} path={route.path} element={route.element} />;
                                }
                            }
                        } catch (error) {
                            console.error('Invalid token:', error);
                        }

                        // Nếu không có token hoặc không có quyền admin/employee, chuyển hướng về trang chủ
                        return <Route key={index} path={route.path} element={<App />} />;
                    })}
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
