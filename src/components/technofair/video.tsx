import Image from 'next/image';

export default function VidYoutube() {
  return (
    <div className="video-responsive">
      {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FrgSTVJ6_4k?si=raIVWtVUgTBAJYaZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        /> */}
      <Image src={'/technofair/mentahan-vid.png'} alt="video-tf" width={390} height={219} className='w-screen' />
    </div>
  );
}
