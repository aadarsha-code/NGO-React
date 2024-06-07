import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Program from './Program'
import Page_Not from './Page_Not'

function Sections() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/program' element={<Program />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Page_Not />} />
            </Routes>

        </>
    )
}

export default Sections
