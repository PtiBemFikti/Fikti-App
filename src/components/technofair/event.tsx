export default function EventPage() {
    return (
        <div style={{ margin: '75px', padding: '35px', backgroundColor: 'lightgray' }}>
            <div>
                <h1 className="text-3xl"><strong>Our Upcoming Events</strong></h1>
            </div>
            <div style={{ margin: '30px', padding: '15px'}}>
               <div style={{ margin: '15px', padding: '7px'}}>
                    <h2 className="text-lg">Seminars & Workshops</h2>
                </div>
            <div style={{margin: '15px', padding: '7'}}>
                <p>Webinar</p>
                <br/>
                <p>Big Data</p>
            </div>
                <p>A dynamic language popular for</p>
                <p>web development, big data,</p>
                <p>science, and scripting</p>
                <br/>
                <p>June 22-24, 2024 10.30 WIB</p>
                <p>Information & Cybersecurity</p>
                <p>Online</p>
                <p>Learn more</p>
            </div>
        </div>
    );
}
