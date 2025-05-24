import Link from 'next/link'
import React from 'react'

const SeoFooter = ({ footerService = {} }) => {
    return (
        <div className='seo-footer py-5'>
            <h2>{footerService?.heading}</h2>
            <p>{footerService?.parahgraph}</p>

            <Link className="custom-btn primary-btn" href="#">Let's Talk</Link>
        </div>
    )
}

export default SeoFooter
