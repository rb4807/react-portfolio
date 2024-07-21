const Footer = () => {

    return (
        <>
            <footer className="bg-baseLight dark:bg-baseDark" id="social">
                <hr className="my-6 border-titleLight sm:mx-auto dark:border-titleDark lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm ml-4 mb-2 text-contentLight dark:text-contentDark sm:text-center">© 2024 Copyright. All Rights Reserved.</span>
                    <div className="flex mt-4 space-x-5 p-2 sm:justify-center sm:mt-0">
                        <a href="https://www.linkedin.com/in/rajesh-mbalu">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin bg-baseColor rounded-full hover:bg-red-500" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                <path d="M8 11l0 5" />
                                <path d="M8 8l0 .01" />
                                <path d="M12 16l0 -5" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg>
                        </a>
                        <a href="https://github.com/rb4807">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github bg-baseColor rounded-full hover:bg-red-500" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                        </a>
                        <a href="mailto:rajesh.mbalu@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google bg-baseColor rounded-full hover:bg-red-500" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
                            </svg>
                        </a>
                        <a href ="https://instagram.com/https://instagram.com/_._r__b_._">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram bg-baseColor rounded-full hover:bg-red-500" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M16.5 7.5l0 .01" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

