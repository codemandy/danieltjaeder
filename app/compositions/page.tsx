export default function CompositionsPage() {
  const soundCloudTracks = [
    // "https://soundcloud.com/seoulcommunityradio/sets/25-04-10-koi-koi-raw-hearts",
    // "https://soundcloud.com/seoulcommunityradio/sets/25-04-10-koi-koi-raw-hearts",
    // "https://soundcloud.com/seoulcommunityradio/sets/25-04-10-koi-koi-raw-hearts",
    // "https://soundcloud.com/seoulcommunityradio/sets/25-04-10-koi-koi-raw-hearts",
    // "https://soundcloud.com/seoulcommunityradio/sets/25-04-10-koi-koi-raw-hearts",
    
  ];

  return (
    <div className="container mx-auto px-4 py-20 mt-20">
      <div className="space-y-10">
        {soundCloudTracks.map((trackUrl, index) => (
          <div key={index} className="w-full">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                trackUrl
              )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
} 
