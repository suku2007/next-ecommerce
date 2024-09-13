'use client'
import { RatingProps } from '@/app/utilities/types';
import React from 'react';
import StarRatings from 'react-star-ratings';
const Rating = ({rating}  : RatingProps) =>{
    return(
        <StarRatings
          rating={rating}
          starRatedColor="#eac959"
          numberOfStars={5}
          name='rating'
          starDimension='20px'
          starSpacing='3px'
        />
    );
}

export default Rating;