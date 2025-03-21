import { Box, Tooltip } from "@chakra-ui/react";
import UserPin from "./UserPin";
import { apiBaseURL, storageBaseUrl } from "@/lib/constants";
import ReactPlayer from "react-player";

interface VideoFrameProps {
  source?: "local" | string;
  url?: string;
  title?: string;
  showBookmarks?: boolean;
  thumbnailUrl?: string;
}

const VideoFrame = ({
  url,
  source = "bunny",
  title,
  thumbnailUrl,
  showBookmarks,
}: VideoFrameProps) => {
  if (!url) {
    return (
      <>
        <p>No video URL provided</p>
      </>
    );
  }

  return (
    <Box
      position="relative"
      width={["100%", "100%"]}
      // bgColor={"red"}
      h={["35vh", "65vh"]}
      // paddingBottom="56.25%"
      mb={8}
      rounded={12}
      overflow={"hidden"}
    >
      {source == "local" && (
        <ReactPlayer
          url={source == "local" ? storageBaseUrl + url : url}
          controls
        />
      )}
      {source == "bunny" && (
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            src="https://iframe.mediadelivery.net/embed/391272/86385ac2-c236-40fc-843a-2fc66acd9c21?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
            loading="lazy"
            style={{border:0,position:"absolute",top:0,height:"100%",width:"100%"}}
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          ></iframe>
        </div>
      )}

      <p>{url}</p>

      {/* {showBookmarks ? (
        <Box pos={"absolute"} bottom={["14%", "18%"]} width={"100%"}>
          <UserPin
            color="white"
            seek={"28"}
            message="Add flute music here..."
          />
          <UserPin
            color="white"
            seek={"280"}
            message="Add flute music here..."
          />
        </Box>
      ) : null} */}
    </Box>
  );
};

export default VideoFrame;
