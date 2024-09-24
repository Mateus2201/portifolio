'use client'

import Aside from "@/components/Aside";
import Main from "@/components/Main";
import Navgation from "@/components/Navgation";
import { Section } from "@/components/Section";
import { useEffect, useState, MouseEvent } from "react";
import classNames from 'classnames';
import Home from "@/components/Options/Home";
import Experience from "@/components/Options/Experience";
import Work from "@/components/Options/Work";
import Contact from "@/components/Options/Contact";

interface OptionsProps {
    title: string,
    classNames?: string,
    component: JSX.Element
}

export default function page() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [options, setOptions] = useState<OptionsProps[] | null>(null);

    useEffect(() => {
        const options: OptionsProps[] = [
            { title: 'Home', component: <Home /> },
            { title: 'Experience', component: <Experience /> },
            { title: 'Work', component: <Work /> },
            { title: 'Contact', component: <Contact /> },
        ];

        setOptions(options);
    }, []);

    const handleClick = (index: number, e: MouseEvent<HTMLButtonElement>) => {
        setActiveIndex(index);
    };

    const returnTranslateZ = () => {
        const carouselInner = document.querySelector('.section-root');

        if (!carouselInner || !options) return 0;

        return carouselInner.clientWidth / 2 / Math.tan(Math.PI / options.length);
    };

    const handleScroll = (e: WheelEvent) => {
        if (e.deltaY > 0)
            setActiveIndex(prevIndex => (prevIndex + 1) % (options?.length || 1));
        else
            setActiveIndex(prevIndex => (prevIndex - 1 + (options?.length || 1)) % (options?.length || 1));
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [options]);

    function OptionsComponent() {
        return options?.map((option, index) => {
            const rotateY = `rotateY(${index * (360 / options.length)}deg) translateZ(${returnTranslateZ()}px)`;
            return <Section.Item
                key={index}
                className={classNames('absolute flex h-full w-full justify-center items-center')}
                style={{ transform: rotateY, backfaceVisibility: 'hidden' }}
            >
                {option.component}
            </Section.Item>
        });
    }

    return <Main>
        <Navgation className={`hidden sm:block w-1/3 h-screen `}>
            <Aside>
                {options?.map((option, index) => (
                    <button key={index} onClick={e => handleClick(index, e)} className={classNames('m-[2rem] block ', { 'text-violet-400': activeIndex === index, 'text-white': activeIndex !== index })}>
                        {option.title}
                    </button>
                ))}
            </Aside>
        </Navgation>
        {options && (
            <Section.Root className={classNames(`section-root w-screen sm:w-4/5 h-screen transition-transform duration-1000  `)} style={{ transform: `rotateY(${-activeIndex * (360 / options.length)}deg)`, transformStyle: 'preserve-3d' }} >
                <OptionsComponent />
            </Section.Root>
        )}
    </Main>
}

