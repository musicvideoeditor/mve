import { API } from "@/lib/api";
import { colors } from "@/lib/constants";
import { useAppDispatch } from "@/lib/redux/store";
import { CreateProjectSchema } from "@/lib/schema/project-schema";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const ProjectTitleForm = () => {
  const [isPending, startTransition] = useTransition();
  // const dispatch = useAppDispatch();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof CreateProjectSchema>>({
    resolver: zodResolver(CreateProjectSchema),
  });

  async function handleProjectCreation(v: z.infer<typeof CreateProjectSchema>) {
    startTransition(async () => {
      try {
        const res = await API.PROJECT.createProject({ data: v });
        toast({
          status: "success",
          description: "Project created successfully",
        })
        window.location.href = `/dashboard/projects/${res.data.documentId}`
      } catch (error:any) {
        toast({
          status: "error",
          description: error?.message,
        })
      }
    });
  }

  return (
    <>
      <Box
        w={["full", "80%"]}
        p={[4, 8]}
        border={"1px solid #333"}
        rounded={12}
        mx={"auto"}
      >
        <form onSubmit={handleSubmit(handleProjectCreation)}>
          <VStack
            w={"full"}
            h={"full"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text fontWeight={"semibold"} textAlign={["center", "left"]}>
              What is the name of your Project?
            </Text>
            <br />
            <br />
            <FormControl mb={4} w={["full", "sm"]} isInvalid={!!errors.name}>
              <Input
                variant={"flushed"}
                placeholder="Project Title"
                borderBottom={"1px solid #000"}
                {...register("name")}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <br />
            <FormControl mb={4} w={["full", "sm"]}>
              <Textarea
                h={24}
                variant={"flushed"}
                placeholder="Description"
                borderBottom={"1px solid #000"}
                {...register("description")}
              />
            </FormControl>
            <br />
            <Button
              px={16}
              size={"lg"}
              type={"submit"}
              rounded={"full"}
              colorScheme="orange"
              bgColor={colors.orange}
              boxShadow={"-4px 4px #000"}
              isLoading={isPending}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  );
};

export default ProjectTitleForm;
