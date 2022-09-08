import React from "react";
import { Button } from "../banner/Style";
import {
  Main,
  Container,
  Box,
  Heading,
  SubHeading,
  TextBox,
  InputBox,
  InputTab,
  Subtitle,
} from "../Email/EmailStyle";

const EmailStyle = () => {
  return (
    <Main>
      <Container>
        <Box>
          <TextBox>
            <Heading>Ready to get started?</Heading>
            <SubHeading>Create an account for free</SubHeading>
          </TextBox>
          <InputBox>
            <InputTab>
              <input type="text" placeholder="Label" />
              <Button>Join today</Button>
            </InputTab>
            <Subtitle>
              Already a member?<strong>Sign in here.</strong>
            </Subtitle>
          </InputBox>
        </Box>
      </Container>
    </Main>
  );
};

export default EmailStyle;
