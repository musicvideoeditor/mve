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
    paddingBottom="56.25%"
    mb={8}
    rounded={12}
    overflow={"hidden"}
  >
    <iframe
      title={title || "No title"}
      src={src}
      allowFullScreen
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    />

    {showBookmarks ? (
      <Box pos={"absolute"} bottom={12} width={"100%"}>
        <UserPin color="yellow" seek={"28"} message="Add flute music here..." />
        <UserPin color="red" seek={"280"} message="Add flute music here..." />
      </Box>
    ) : null}
  </Box>
);

export default VideoFrame;
