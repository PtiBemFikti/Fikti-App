import { image } from "@nextui-org/react"
import Image from "next/image"

const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
]

const Column = ({images}: {images: string[]}) => {
    return (
        <div className="column">
            {
                images.map((src, index) => {
                    return <div key={index} className="imageContainer">
                        <Image src={`/technofair/${src}`} fill alt="Technofair 2024"/>
                    </div>
                })
            }
        </div>
    )
}

export default function ScrollImage() {
    return (
        <div className="main">
            <div className="gallery">
                <Column images={[images[0], images[1], images[2]]}/>
                <Column images={[images[3], images[4], images[5]]}/>
                <Column images={[images[6], images[7], images[8]]}/>
                <Column images={[images[1], images[9], images[10]]}/>
            </div>
        </div>
    )
}