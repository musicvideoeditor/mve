import { Box, Tooltip } from "@chakra-ui/react";
import UserPin from "./UserPin";

interface VideoFrameProps {
  src: string;
  title?: string;
  showBookmarks?: boolean;
}

const VideoFrame = ({ src, title, showBookmarks }: VideoFrameProps) => (
  <Box
    position="relative"
    width="100%"
    h={['35vh', '65vh']}
    paddingBottom="56.25%"
    mb={8}
    rounded={12}
    overflow={"hidden"}
  >
    <iframe
      title={title || "No title"}
      src={src}
      allowFullScreen
      className="video-frame"
    />

    {showBookmarks ? (
      <Box pos={"absolute"} bottom={[14, 12]} width={"100%"}>
        <UserPin color="yellow" seek={"28"} message="Add flute music here..." />
        <UserPin color="red" seek={"280"} message="Add flute music here..." />
      </Box>
    ) : null}
  </Box>
);

export default VideoFrame;
