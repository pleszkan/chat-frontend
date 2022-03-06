import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const ChatPage = React.lazy(() => import("./pages/ChatPage/ChatPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <React.Suspense fallback={<></>}>
                        <ChatPage/>
                    </React.Suspense>
                }/>
                <Route path="/login" element={
                    <React.Suspense fallback={<></>}>
                        <LoginPage/>
                    </React.Suspense>
                }/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
