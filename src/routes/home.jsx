import Tiles from "../components/Tiles"
import Contact from "../components/Contact"
import About from "../components/About"
import { useEffect, useState } from "react"

export default function Home(){

    const [position, setPosition] = useState(0)

    const getSections = () => [
        document.querySelector('.full-screen'),
        document.querySelector('.contact-desktop'),
        document.querySelector('.about')
    ];

    useEffect(() => {

        let debounce = false;
        let debounceHandle;
        /**
         * Will scroll snap stuff
         * @param {WheelEvent} e 
         */
        function scrollSnap(e){
            console.log(e.deltaY);
            e.preventDefault();
            if (debounce) return;
            
            // look at e.deltaY to determine direction
            if (e.deltaY > 0){
                setPosition(position => Math.min(position+1, sections.length - 1));
            } else if (e.deltaY < 0) {
                setPosition(position => Math.max(position-1, 0));
            } else {
                console.log('something unexpected')
            }

            debounce = true;
            if (debounceHandle)
                window.clearTimeout(debounceHandle);

            debounceHandle = window.setTimeout(() => {
                debounce = false;
            }, 2000);

            // if not an edge case, scroll to corresponding
            // next section

            // we can scroll by
            //container.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }

        const sections = getSections();

        /** @type {HTMLElement} */
        const container = document.querySelector('.snapper');

        container.addEventListener('wheel', scrollSnap);

        return () => {
            container.removeEventListener('wheel', scrollSnap);
        };

    },[])

    useEffect(() => {
        const sections = getSections();

        /** @type {HTMLElement} */
        const scrollTo = sections[position];
        // console.log('attempting to scroll to', scrollTo);
        
        scrollTo.scrollIntoView(false);

    }, [position]);

    return (
        <>
        <Tiles />
        <Contact />
        <About />
        </>
    )
}