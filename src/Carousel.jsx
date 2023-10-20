import React, { useState } from 'react'
import { CarouselItem } from './CarouselItem'


export const Carousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const items = props.items

    const updateIndex = (newIndex) => {
        // if you reach the most left image, continue with the most right
        if (newIndex < 0) {
            newIndex = items.length - 1
        } else
            //if you reach the most right image, continue with the most left
            if (newIndex > items.length - 1) {
                newIndex = 0
            }
        setActiveIndex(newIndex)
    }


    return (
        <div className='carousel'>
            <div className='inner'
                style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                {items.map((item) => < CarouselItem key={item.title} item={item} />
                )}
            </div>

            <div className='carousel-buttons'>
                <button className='button-arrow'
                    onClick={(e) => updateIndex(activeIndex - 1)}
                >
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </button>
                <div className='indicators'>
                    {items.map((item, index) =>
                        <button key={index}
                            className='indicator-buttons'
                            onClick={(e) => updateIndex(index)} >
                            <span
                                className={`material-symbols-outlined indicator-symbol${(index === activeIndex)
                                        ? '-active' : ''
                                    }`}>
                                radio_button_checked
                            </span>
                        </button>
                    )}
                </div>
                <button className='button-arrow'
                    onClick={(e) => updateIndex(activeIndex + 1)}>
                    <span className="material-symbols-outlined">arrow_forward_ios
                    </span>
                </button>
            </div>
        </div >
    )
}
