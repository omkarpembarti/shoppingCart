import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
const Rating = ({ rate, onclick }) => {
    return (
        <>
            {[...Array(5)].map((value, index) => (
                <span style={{ cursor: "pointer" }} key={index} onClick={() => onclick(index)}>
                    {rate > index ? (<AiFillStar fontSize="15px" />) : (<AiOutlineStar fontSize="15px" />)}
                </span>
            ))}

        </>
    )
}

export default Rating
