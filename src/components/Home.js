import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (<Container>
      <Section 
        title="Model S"
        description="Order online for touchless delivery"
        backgroundImage="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section 
        title="Model Y"
        description="Order online for touchless delivery"
        backgroundImage="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section 
        title="Model 3"
        description="Order online for touchless delivery"
        backgroundImage="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
     />

      <Section 
        title="Model X"
        description="Order online for touchless delivery"
        backgroundImage="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money Back Guarantee"
        backgroundImage="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section 
        title="Solar for New Roofs"
        description="Solar Roofs that cost less than a new Electrical Roof"
        backgroundImage="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section 
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftBtnText="Shop Now"
        rightBtnText=""
      />
  </Container>);
}

export default Home;

const Container = styled.div`
    height: 100vh;
`