import React from "react";
import { AboutComp, Table, PageWrapper } from "../components";
import { SidebarContainer } from "../containers";

export default function About() {
  return (
    <PageWrapper>
      <SidebarContainer subtitle="About" />
      <AboutComp>
        <AboutComp.Title>Creative frontend developer</AboutComp.Title>
        <AboutComp.Description>
          I’m a Front-End Developer located in Minsk/Saint Petersburg. I have a
          serious passion for UI effects, animations and creating intuitive,
          dynamic user experiences. Well-organised person, problem solver with
          high attention to detail.
        </AboutComp.Description>
        <AboutComp.Description>
          Interested in the entire frontend spectrum, fullstack direction and
          working on ambitious projects with positive people.
        </AboutComp.Description>
        <Table>
          <Table.Title>Experience</Table.Title>
          <Table.Content>
            <Table.Row>
              <Table.Column>BOBRUISKAGROMACH</Table.Column>
              <Table.Column>Electromechanic</Table.Column>
              <Table.Column>2018-2020</Table.Column>
            </Table.Row>
            <Table.Row>
              <Table.Column>School of Business of BSU</Table.Column>
              <Table.Column>React Developer</Table.Column>
              <Table.Column>March 2020 – October 2020</Table.Column>
            </Table.Row>
          </Table.Content>
        </Table>
        <Table>
          <Table.Title>Education</Table.Title>
          <Table.Content>
            <Table.Row>
              <Table.Column>School of Business of BSU</Table.Column>
              <Table.Column>Information System Software</Table.Column>
              <Table.Column>2018–2020</Table.Column>
            </Table.Row>
            <Table.Row>
              <Table.Column>BSUIR</Table.Column>
              <Table.Column>Quantum information systems</Table.Column>
              <Table.Column>2014–2018</Table.Column>
            </Table.Row>
          </Table.Content>
        </Table>
      </AboutComp>
    </PageWrapper>
  );
}
