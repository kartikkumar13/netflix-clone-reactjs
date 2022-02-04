import react from "react";
import Header from "./components/Header";
import Row from "./components/Row";
import VideoBanner from "./components/VideoBanner";
import demovideo from "./videos/demovideo.mp4";

function App() {
  const API_Key = "90960b054269e57eee840e5aee61fe1d";
  const API_URl = "https://api.themoviedb.org/3/";
  const videoData = {
    thumbnailUrl:
      "https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZyLF5uKURfo7X6mdE0K0gkf-1naNs7njYJQil4YePZV27EY0IvF0Cq9YQt1Tdka3HEZSGEQvYy7u8LblMp3mQ0g1RVF.webp?r=de4",
    videoUrl: demovideo,
    titleUrl:
      "https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZ9b9-3RZGFTEaiqsvuxx4BkatVMGLcuwv3Jf3dIVFnAOpJJhHeFBa9lvOA_Bzl_7iXAIBIyqXfMdAFFORg2nwBlHh4W8udFR7hu5CTg7wCORNFGcUqGEQsrHTblqfQ5cP6aZHiiW03AaRQn5PL-SMQJLzDVbXgECsbrhK2FSYNBAw.webp?r=c0c",
    synopsis:
      "Five women with the same birthmark set out to unravel the truth about their pasts and discover a tragic web of lies spun by a powerful politician.",
    contentType: "7+",
  };
  return (
    <>
      <Header />
      <VideoBanner data={videoData} />
      <div className="">
        <Row
          title="Netflix Originals"
          isLargePoster={true}
          url={`${API_URl}discover/tv?api_key=${API_Key}&with_networks=213`}
        />
        <Row
          title="Popular Movies"
          isLargePoster={true}
          url={`${API_URl}movie/popular?api_key=${API_Key}`}
        />
        <Row
          title="Trending TV Series"
          isLargePoster={true}
          url={`${API_URl}trending/tv/week?api_key=${API_Key}&with_networks=213`}
        />
        <Row
          title="Trending Movies"
          isLargePoster={true}
          url={`${API_URl}trending/movie/week?api_key=${API_Key}&with_networks=213`}
        />
        <Row
          title="Comedy Originals"
          isLargePoster={true}
          url={`${API_URl}movie/popular?api_key=${API_Key}`}
        />
      </div>
    </>
  );
}

export default App;
