import React from "react";
import styled from "styled-components";

const InfoBox = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 20%;
  background: #6363638f;
  font-family: sans-serif;
  border-radius: 20px;
  text-align: center;
  padding: 1rem;
`;

const CurrentTravel = styled.h1`
  font-size: 4rem;
  color: white;
`;
const SmallText = styled.h3`
  font-size: 1rem;
  color: white;
`;

const LegendColorStart = styled.div`
  border-radius: 100%;
  height 3rem;
  width 3rem;
  background-image: radial-gradient(red,yellow);
  display: inline-block;
`;

const LegendColorEnd = styled.div`
  border-radius: 100%;
  height 3rem;
  width 3rem;
  background-image: radial-gradient(blue,black);
  display: inline-block;
`;

const LegendDescription = styled.div`
  line-height: 3rem;
  color: white;
  padding: 0 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  ${props => (props.space ? "justifyContent: space-between;" : "")};
`;

export default class Overview extends React.Component {
  render() {
    return (
      <InfoBox>
        <CurrentTravel>{this.props.numberOfRides}</CurrentTravel>
        <SmallText>rides per 10 seconds</SmallText>
        <Wrapper>
          <Wrapper>
            <LegendColorStart />
            <LegendDescription>Startpoints</LegendDescription>
          </Wrapper>
          <Wrapper space>
            <LegendColorEnd />
            <LegendDescription>Endpoints</LegendDescription>
          </Wrapper>
        </Wrapper>
      </InfoBox>
    );
  }
}
