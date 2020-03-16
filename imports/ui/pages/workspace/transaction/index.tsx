import React from 'react';
import { Box, Tabs, TabList, Tab, TabPanel, TabPanels, Avatar, Text, Flex } from "@chakra-ui/core";
import { withTracker } from 'meteor/react-meteor-data';
import styled from '@emotion/styled'
import { FormButton } from '/imports/ui/components'
import { PageHeader, BreakLayout, CustomerList, TransactionList } from '/imports/ui/components'


//imports for API call
import { Meteor } from 'meteor/meteor'
import { Transactions } from '/imports/api/collections'
import { ITransaction } from '/imports/api/schema';
import path from '/imports/ui/router';


const StyledTransaction = styled.main`
  display: flex;
  flex-direction: column;
`

interface TransactionProps {
  transactions: ITransaction[]
}


class Transaction extends React.Component<TransactionProps> {

  render() {
    console.log(this.props)
    // const { transactions } = this.props

    return (
      <StyledTransaction>
        <PageHeader useHeader title="Your Transactions" />

        {/* Button */}
        <Box my="2">
          <FormButton buttonName="CREATE NEW TRANSACTION" analyticName="Verify" buttonColor="#0B69FF" color="#FFF" handleAction={() => handleSubmit()} />
        </Box>

        <Box mt="10">
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Paid</Tab>
              <Tab>Unpaid</Tab>
            </TabList>
            <TabPanels>
              <TabPanel> */}
                <CustomerList
                  customerName="John Azumah"
                  iconName="Christian Nwamba"
                  Date="15 Feb 2020"
                />
                <CustomerList
                  customerName="John Azumah"
                  iconName="Christian Nwamba"
                  Date="11 April 2020"
                />
                <CustomerList
                  customerName="John Azumah"
                  iconName="Christian Nwamba"
                  Date="30 May 2020"
                />
              </TabPanel>

              {/* Second Tab Panel` */}
              <TabPanel>
                {this.props.transactions.map((val, index) => {
                  return (


                    <TransactionList
                      key={val._id}
                      analyticName="View a Transaction"
                      customerStatus="10 days to overdue"
                      customerName={val.owner?.profile.name}
                      amount="GHc233"
                      paymentStatus="PAID"
                      overdueAmount="GHC346"
                      overdueStatus="OVERDUE"
                      cardLink="/signup"
                      iconName="chevron-right"
                      iconSize="24px"
                    />

                  )
                })
                }

              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

      </StyledTransaction>


    )
  }
}



export default withTracker(() => {
  Meteor.subscribe('transactions')
  console.log(Transactions.find().fetch())
  return {
    transactions: Transactions.find().fetch()
  };
})(Transaction);