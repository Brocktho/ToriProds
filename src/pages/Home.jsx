import accent from "../media/pngkey.com-simple-swirls-png-1894818.png"
import separator from "../media/separator.png";
import GalleryCard from "../components/galleryCard";
import screen1 from "../media/video1Screen.png";
import screen2 from "../media/video2Screen.png";
import screen3 from "../media/video3Screen.png";
import screen4 from "../media/video4Screen.png";
import screen5 from "../media/video5Screen.png";
import screen6 from "../media/video6Screen.png";
import screen7 from "../media/video7Screen.png";
import screen8 from "../media/video8Screen.png";
import screen9 from "../media/video9Screen.png";
import screen10 from "../media/video10Screen.png";
import screen11 from "../media/video11Screen.png";
import screen12 from "../media/video12Screen.png";
import video1 from "../media/video1.mp4";
import video2 from "../media/video2.mp4";
import video3 from "../media/video3.mp4";
import video4 from "../media/video4.mp4";
import video5 from "../media/video5.mp4";
import video6 from "../media/video6.mp4";
import video7 from "../media/video7.mp4";
import video8 from "../media/video8.mp4";
import video9 from "../media/video9.mp4";
import video10 from "../media/video10.mp4";
import video11 from "../media/video11.mp4";
import video12 from "../media/video12.mp4";
import {useState} from "react";
import GalleryMount from "../components/galleryMount";
import HeroText from "../components/HeroText";

const Home = () => {

    const [display, setDisplay] = useState(false); 
    const videoGallery = [
        {"image" : screen1, "title" : "Video 1", "video" : video1},
        {"image" : screen2, "title" : "Video 2", "video" : video2},
        {"image" : screen3, "title" : "Video 3", "video" : video3},
        {"image" : screen4, "title" : "Video 4", "video" : video4},
        {"image" : screen5, "title" : "Video 5", "video" : video5},
        {"image" : screen6, "title" : "Video 6", "video" : video6},
        {"image" : screen7, "title" : "Video 7", "video" : video7},
        {"image" : screen8, "title" : "Video 8", "video" : video8},
        {"image" : screen9, "title" : "Video 9", "video" : video9},
        {"image" : screen10, "title" : "Video 10", "video" : video10},
        {"image" : screen11, "title" : "Video 11", "video" : video11},
        {"image" : screen12, "title" : "Video 12", "video" : video12},
    ]
    const [target, setTarget] = useState({image:"", video:""}); 
    const updateDisplay = (event) =>{
        setTarget(videoGallery[event.currentTarget.id]);
        setDisplay(true);
    } 

    return (
        <div className="flex flex-col relative max-w-screen min-w-screen min-h-screen overflow-x-hidden">
            <HeroText/>
            <section id="Home" className="flex flex-row w-screen h-screen overflow-none items-center justify-center relative">
                
                <div className="w-screen h-screen flex flex-row pt-12 -m-4 items-center">
                    <div className="w-full h-full bg-top bg-[url('./media/ToriHero.gif')] bg-blend-darken"/>
                </div>
            </section>
            <section id="Gallery" className="w-screen">
                <div className="flex flex-col items-center w-full h-full text-3xl">
                    <div className="w-full flex flex-col gap-0 items-center">
                        <div className="flex flex-row w-full items-center justify-center bg-[#D2B48C]">
                        <img className="w-1/4 mb-24" src={separator}/>
                        </div>
                        <h1 className="text-6xl w-full text-center bg-[#D2B48C]">
                            Make your events last a lifetime!
                        </h1>
                        <div className="w-full bg-[#D2B48C] flex flex-row items-center justify-center">
                            <img className="w-32 -mt-8" src={accent}/>
                        </div>
                        <div className="w-full py-8 flex flex-row flex-wrap items-center justify-center h-1/2 px-6">
                            {videoGallery.map((item, i) =>{
                            return <GalleryCard image={item.image} id={i} key={i} video={item.video} set={updateDisplay}/>
                            })}
                        </div>
                    </div>
                    <div className="flex flex-row w-full h-full">
                        <div className="flex flex-col w-1/2 items-center">

                        </div>
                        <div className="flex flex-col w-1/2 h-full">
                            
                        </div>
                    </div>
                    <GalleryMount toggle={display} target={target} set={setDisplay}/>
                </div>
            </section>
            <section id="Contact" className="w-screen h-screen flex flex-col gap-8 relative">
                <div className="flex flex-row w-full items-center justify-center">
                    <img className="w-1/4 mb-24" src={separator}/>
                </div>
                <div className="flex flex-row w-full items-center justify-center px-8 gap-8">
                    <form className="w-1/2 flex flex-col gap-4 bg-[#D2B48C] p-8 rounded-md items-center">
                        <h2 className="text-3xl">
                            Schedule me for your wedding!
                        </h2>
                        <input type="text" className="w-full rounded-full pl-2 ring-black border-black" placeholder="Full Name"/>
                        <input type="email" className="w-full rounded-full pl-2" placeholder="Email"/>
                        <input type="date" className="w-full rounded-full pl-2"/>
                        <textarea type="text" rows="3" className="w-full rounded-sm pl-2" placeholder="Event you want to schedule and any other info you'd like me to know!"/>
                        <input type="submit" className="w-1/2 rounded-3xl bg-slate-100 hover:bg-slate-700 cursor-pointer" value="Submit"/>
                    </form>
                    <div className="w-1/2 h-full">
                        <div className="w-full border-2 border-black h-full">
                            <iframe src="https://calendar.google.com/calendar/embed?src=fqkcumuiefsqn456rrs8gpreeg%40group.calendar.google.com&ctz=America%2FNew_York" className="w-full h-full" scrolling="no"></iframe>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full flex flex-row bg-[#D2B48C] p-8">
                    <ul className="w-1/2 h-full list-none flex flex-col gap-4 items-center">
                        <li className="w-full flex flex-row gap-4 items-center">
                            <a href="/" className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                            <a className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
                            </a>
                            <a className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>
                            </a>
                        </li>
                        <li className="w-full flex flex-row gap-4 items-center">
                            <a href="tel:" className="cursor-pointer flex flex-row gap-4 w-full">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>
                                    Phone Number
                                </span>
                            </a>
                        </li>
                        <li className="w-full flex flex-row gap-4 items-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span>
                                Location Here
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Home