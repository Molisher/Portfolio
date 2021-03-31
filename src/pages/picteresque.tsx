import React from "react";
import { Project, Sidebar } from "../components";
import { ROUTES } from "../constants/ROUTES";

export default function Picteresque() {
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
        <Sidebar.SubTitle>Work</Sidebar.SubTitle>
      </Sidebar>
      <Project>
        <Project.Title>Picteresque</Project.Title>
        <Project.Wrapper>
          <Project.Meta title="Industry">Photo/Video</Project.Meta>
          <Project.Meta title="Role">Creator</Project.Meta>
          <Project.Meta title="Technologies">
            React
            <br />
            Styled Components
            <br />
            Framer Motion
            <br />
            React Router
          </Project.Meta>
        </Project.Wrapper>
        <Project.Description>
          HD Vest, one of the largest financial advisory groups in the US, takes
          a tax-smart approach to financial planning that allows their Advisors
          to provide a uniquely strategic perspective for their clients.
        </Project.Description>
        <Project.Description>
          The team at HD Vest came to Handsome in dire need of a modern website
          that reflected their unique approach to advisory and investing. By
          rethinking the information architecture, content, personality, and
          visual design of the site, we were able to help HD Vest turn over a
          new leaf and better communicate their message to advisors and clients
          alike.
        </Project.Description>
        <Project.ExternalLink
          href="https://molisher.github.io/picturesque/#/"
          target="_blank"
        >
          View Site
        </Project.ExternalLink>
        <Project.Image src="/images/picteresque/main.png" />
        <Project.Image src="/images/picteresque/work.png" />
        <Project.Image src="/images/picteresque/workInner.png" />
        <Project.Wrapper>
          <Project.ExternalLink
            href="https://molisher.github.io/picturesque/#/"
            target="_blank"
          >
            View Site
          </Project.ExternalLink>
          <Project.Meta title="Credits">Dmitry Belov</Project.Meta>
        </Project.Wrapper>
      </Project>
    </div>
  );
}
