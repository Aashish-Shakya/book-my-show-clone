import React, { useState } from 'react';
//
import axios from "axios";


//Component
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/Herocarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';


//Layout HOC
import DefaultLayoutHoc from '../layouts/Default.layout'
import { useEffect } from 'react';

const HomePage = () => {

    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);


    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get('/movie/top_rated');
            setRecommendedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get('/movie/popular');
            setRecommendedMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get('/movie/top_rated');
            setPremierMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get('/movie/upcoming');
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, []);

    return (
        <>
            <HeroCarousel />
            <div className='container mx-auto px-4 md:px-12 my-8'>

                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider title="Recommended Movies" subtitle="List of recommended movies" posters={recommendedMovies} isDark={false} />
            </div>


            <div className='bg-premier-800 py-12'>
                <div className='container mx-auto px-14 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="Rupay" className='w-full h-full' />
                    </div>
                    <PosterSlider title="Premiers" subtitle="Brand new releases every friday" posters={premierMovies} isDark={true} />
                </div>
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider title="Online Streaming Event" subtitle="" posters={onlineStreamEvents} isDark={false} />
            </div>
        </>
    )
}

export default DefaultLayoutHoc(HomePage);