import { Heading, VStack } from "@chakra-ui/react"
import { useLocalFile } from "gatsby-theme-wild-child"
import Layout from "gatsby-theme-wild-child/src/components/Layout"
import Section from "gatsby-theme-wild-child/src/components/Section"
import React from "react"

function HomepagePage() {
  const data = useLocalFile("Setup-Cost-Hero")

  return (
    <Layout>
      <Section>
        <VStack spacing={4}>
          <Heading as="h1" size="2xl">
            Homepage
          </Heading>
        </VStack>
      </Section>
    </Layout>
  )
}

export default HomepagePage
