import React,{useState} from "react";
import { Button } from "../banner/Style";
import {
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
  const options = ['Monday', 'Tuesday', 'Thursday', 
  'Friday', 'Saturday', 'Sunday']
  return (
    <Container>
      <Box>
        <TextBox>
          <Heading>Ready to get started?</Heading>
          <SubHeading>Create an account for free</SubHeading>
        </TextBox>
        <InputBox>
          <InputTab>
          <input type="text" list="dataList" />
          <datalist name="option" id="dataList">
        {options.map((value,index)=>{
            return (
                <option value={value} key={index}>{value}</option>
            )
        })}
        </datalist>
            <Button>Join today</Button>
          </InputTab>
          <Subtitle>
            Already a member?<strong>Sign in here.</strong>
          </Subtitle>
        </InputBox>
      </Box>
    </Container>
  );
};

export default EmailStyle;
