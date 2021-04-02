import React from "react";
import { PageWrapper, Project } from "../components";
import { SidebarContainer } from "../containers";

export default function Picteresque() {
  return (
    <PageWrapper>
      <SidebarContainer subtitle="Work" link="back" />
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
          A website for a photo-video studio that demonstrates their advantages,
          work, etc. Designed to enhance styled-components and framer-motion
          skills with page transition.
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
    </PageWrapper>
  );
}
