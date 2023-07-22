import { AlertIcon ,Alert} from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      button={"4"}
      left={"50%"}
      transform={"translatex(-50%)"}
      
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorComponent;
