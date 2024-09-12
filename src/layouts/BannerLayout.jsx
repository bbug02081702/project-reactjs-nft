import React from 'react';
import Button from '../components/Button';

const BannerLayout = () => {
    return (
        <section className='pt-[100px]'>
            <div className="wrapper mt-[229px] flex gap-x-[164px]">
                <div className="max-w-[738px] w-full">
                    <h1 className='text-[100px] font-bold'>
                    Discover <br /> Collect and <br />
                    Sell NFT.
                    </h1>
                    <p className='text-[30px] mt-[50px]'>Explore on the world’s best largest NFT marketplace</p>
                    <Button className='bg-primary-gradient h-[60px]'>Explore</Button>
                </div>
                <div className="flex-1">
                    Image Banner
                </div>
            </div>
        </section>
    );
};

export default BannerLayout;