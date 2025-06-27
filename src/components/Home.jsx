import React from 'react'
import Header from './Header'
import Banner from './Banner'
import PropertyList from './PropertyList'
import Footer from './Footer'

const Home = () => {
return (
    <div>
        <div style={{ marginBottom: '70px' }}>
            <Header />
        </div>
        <div style={{ marginBottom: '20px' }}>
            <Banner />
        </div>
        <div style={{ marginBottom: '20px' }}>
            <PropertyList />
        </div>
        <Footer />
    </div>
)
}

export default Home
