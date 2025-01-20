import { Button } from "@/components/ui/button";
import { Box, VStack } from "@chakra-ui/react";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <VStack>
      <p className="text-4xl">Hello world</p>
      <Button>Click me</Button>
      <Button variant="outline">ABC</Button>
      <Box asChild height="40px" width="40px" bg="red.500" rounded={8}>
        <motion.div whileHover={{ scale: 1.2, rotate: 90 }}></motion.div>
      </Box>
    </VStack>
  );
}

// <Box asChild height="40px" width="40px" bg="red.500">
// </Box>
