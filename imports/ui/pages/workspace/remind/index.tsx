import React from 'react';
import {
  Icon, Box, Stack, Heading, Flex, Text, Select, NumberInput, NumberInputField,NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Textarea} from "@chakra-ui/core";
import styled from '@emotion/styled'
import { FormButton } from '/imports/ui/components'

const StyledRecord = styled.main`
  display: flex;
  flex-direction: column;
`


export default class record extends React.Component {
  render() {
    return (
      <StyledRecord>
        <Box>
          <Icon name="arrow-back" size="24px" />
        </Box>
        <Stack spacing={3}>
         <Heading as="h1" size="2xl">
          Create a Reminder
         </Heading>
         <Box mt="6">
          <h6>Select Channels</h6>
          </Box>
          </Stack>

            {/* Channels */}
          <Flex flexDirection="row" mt="10px" justify="space-between" textAlign="center">
        <Box border="1px" borderRadius="md" w="25%" h="59px" mr="3" style={{borderColor: "blue"}}>
            <Box mt="3">
              <Icon name="phone" size="24px" />
            </Box>
           
          </Box>
          <Box border="1px" borderRadius="md" borderColor="blue" w="25%" h="59px" mr="3" style={{ borderColor: "blue" }}>
            <Box mt="3">
              <Icon name="email" size="24px" />
            </Box>
          </Box>
          <Box border="1px" borderRadius="md" borderColor="blue" w="25%" h="59px" mr="3" style={{ borderColor: "blue" }}>
            <Box mt="3">
              <Icon name="chat" size="24px" />
            </Box>
          </Box>
          <Box border="1px" borderRadius="md" borderColor="blue" w="25%" h="59px" style={{ borderColor: "blue" }}>
            <Box mt="3">
              <Icon name="at-sign" size="24px" />
            </Box>
          </Box>
        </Flex>

            {/* Set reminders */}
        <Stack spacing={2} mt="10">
          
          
          <Text fontSize="md">Set Intervals</Text>
         
          <Text fontSize="xs">With intervals you can set what frequency how many times your 
          reminder will be fired to this user.</Text>
        </Stack>





        <Stack shouldWrapChildren isInline mt="10"> 
          <NumberInput size="sm" defaultValue={15} min={10}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select placeholder="Select option">
            <option value="option1">Daily</option>
            <option value="option2">Weekly</option>
            <option value="option3">Monthly </option>
          </Select>
          </Stack>

          <Box mt="10">
        <Text fontSize="md">Message Template</Text>
          <Textarea placeholder="Here is a sample placeholder" />
        </Box>
        
        <Box mt="10"> 
        <FormButton buttonName="Send" analyticName="Verify" buttonColor="#0B69FF" color="#FFF" handleAction={() => handleSubmit()} />
        </Box>

      </StyledRecord>


    )
  }
}