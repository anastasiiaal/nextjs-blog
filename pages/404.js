import Layout, { siteTitle } from '../components/layout';

export default function Custom404() {
    return (
        <Layout>
            <h1>404 - Page Not Found</h1>
        </Layout>
    )
}

// if this file is deleted, a generic 404 will be generated