import { ICONS } from '@/utils/getIcons'
import React from 'react'

const HeaderTop = () => {
  return (
    <div className='heder-top'>
        <div className='container mx-auto'>
            <p>Speak to us to see if it fits to you</p>
            <div className='flex items-start gap-2'>
                {ICONS?.phoneFlip}
                <a href='tel:+92 348 8369640'>+92 348 8369640</a>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop
