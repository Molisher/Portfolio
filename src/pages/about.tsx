import React from "react";
import { Sidebar, AboutComp, Table } from "../components";
import { ROUTES } from "../constants/ROUTES";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Sidebar>
        <Sidebar.BackButton to={ROUTES.HOME} />
        <Sidebar.Title>Dmitry Belov</Sidebar.Title>
        <Sidebar.SubTitle>About</Sidebar.SubTitle>
      </Sidebar>
      <AboutComp>
        <AboutComp.Title>Creative frontend developer</AboutComp.Title>
        <AboutComp.Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          autem ea cumque reprehenderit? Explicabo aut esse ea fugiat
          perspiciatis? Sed a unde dolor excepturi, repellat in dolores esse,
          incidunt quasi ullam eum ipsam est! Amet rerum laboriosam sequi quidem
          necessitatibus voluptatem culpa, magnam hic, minima quasi non
          sapiente? Suscipit, ipsa.
        </AboutComp.Description>
        <Table>
          <Table.Title>Experience</Table.Title>
          <Table.Content>
            <Table.Row>
              <Table.Column>Product Designer</Table.Column>
              <Table.Column>Handsome</Table.Column>
              <Table.Column>2017–2019</Table.Column>
            </Table.Row>
            <Table.Row>
              <Table.Column>Associate Creative Director</Table.Column>
              <Table.Column>Handsome</Table.Column>
              <Table.Column>2019–Present</Table.Column>
            </Table.Row>
            <Table.Row>
              <Table.Column>Designer</Table.Column>
              <Table.Column>Freelance</Table.Column>
              <Table.Column>2016–Present</Table.Column>
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
    </div>
  );
}
