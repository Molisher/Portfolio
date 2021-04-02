import React from "react";
import { PageWrapper, Project } from "../components";
import { SidebarContainer } from "../containers";

export default function ReactPlayer() {
  return (
    <PageWrapper>
      <SidebarContainer subtitle="Work" link="back" />
      <Project>
        <Project.Title>React Player</Project.Title>
        <Project.Wrapper>
          <Project.Meta title="Industry">Multimedia</Project.Meta>
          <Project.Meta title="Role">Creator</Project.Meta>
          <Project.Meta title="Technologies">
            React
            <br />
            Styled Components
          </Project.Meta>
        </Project.Wrapper>
        <Project.Description>
          Simple audio player, song selectable, rewindable and fully responsive.
          Created after graduate work to better understand audio elements in
          React
        </Project.Description>
        <Project.ExternalLink
          href="https://molisher.github.io/react-player/"
          target="_blank"
        >
          View Site
        </Project.ExternalLink>
        <Project.Image src="images/reactPlayer/main.png" />
        <Project.Wrapper>
          <Project.ExternalLink
            href="https://molisher.github.io/react-player/"
            target="_blank"
          >
            View Site
          </Project.ExternalLink>
          <Project.Meta title="Credits">Dmitry Belov</Project.Meta>
        </Project.Wrapper>
      </Project>
    </PageWrapper>
  );
}
