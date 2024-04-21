import React from 'react';
import Avatar from '@site/static/img/dylan.jpg';
import Link from '@docusaurus/Link';

const Intro = () => {
    return (
        <section className="pt-16 mb-6">
            <header className="text-center max-w-2xl mx-auto">
                <img className="w-48 rounded-full mb-6" src={Avatar} alt="pf" />
                <h1 className="text-5xl font-normal text-neutral-800 dark:text-neutral-200 mb-4">
                    Hi{' '}
                    <span className="inline-block animate-[wave_.5s_ease-in-out_2]">
                        👋
                    </span>{' '}
                    I’m Dylan!
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-4">
                    I'm a Software Engineer student at the{' '}
                    <a
                        href="https://www.hva.nl/"
                        target="_blank"
                        className="text-primary-600 font-medium"
                    >
                        Amsterdam University of Applied Sciences
                    </a>{' '}
                    who enjoys programming and reading.
                </p>
                <p className="font-medium text-lg flex space-x-8 justify-center">
                    <Link
                        to="/docs/category/projects"
                        className="flex space-x-2 bg-primary-500 text-white px-4 py-2 rounded-md hover:text-white hover:bg-primary-600 hover:no-underline transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-5 -2 24 24"
                            width="24"
                            fill="currentColor"
                        >
                            <path d="M5 18V1H3v17H0V0h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5zM6 4v2h5V4H6zm0 3v2h5V7H6zM3 18h2v2H3v-2z"></path>
                        </svg>
                        <span>Projects</span>
                    </Link>
                </p>
            </header>
        </section>
    );
};

export default Intro;
