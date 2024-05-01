import React from 'react';

export default function HeroSectionComponent() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Raining
                        Offers For Hot Summer!</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Effortlessly
                        blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters,
                        versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures</p>
                    <a href="/"
                       className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Get started
                    </a>
                    <a href="/products"
                       className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-yellow-400 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Shop Now
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/025/212/400/non_2x/3d-rendering-online-store-isolated-useful-for-ecommerce-business-retail-store-online-delivery-and-marketplace-design-element-png.png"
                        alt="mockup"/>
                </div>
            </div>
        </section>
    );
}

