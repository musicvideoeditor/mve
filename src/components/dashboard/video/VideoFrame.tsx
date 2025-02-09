import { Box, Tooltip } from "@chakra-ui/react";
import UserPin from "./UserPin";
import { apiBaseURL } from "@/lib/constants";

interface VideoFrameProps {
  source?: "local" | string;
  url?: string;
  title?: string;
  showBookmarks?: boolean;
}

const VideoFrame = ({ url, source, title, showBookmarks }: VideoFrameProps) => {
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
      width="100%"
      h={["35vh", "65vh"]}
      paddingBottom="56.25%"
      mb={8}
      rounded={12}
      overflow={"hidden"}
    >
      {source == "local" ? (
        <video className="video-frame" src={apiBaseURL + url} controls />
      ) : (
        <iframe
          title={title || "No title"}
          src={url}
          allowFullScreen
          className="video-frame"
        />
      )}

      {showBookmarks ? (
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
      ) : null}
    </Box>
  );
};

export default VideoFrame;
