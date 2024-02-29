import '../styles/global.css'; // global styles can only be applied in _app.js file

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}