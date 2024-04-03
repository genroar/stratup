import React from 'react'
import Header from "@/component/templates/Header";
import Footer from "@/component/organisms/Footer";
import Blog from '@/component/templates/Blog';


function blog() {
    return (
        <div>
            <Header />
            <Blog />
            <Footer />
        </div>
    )
}

export default blog