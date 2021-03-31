import React from "react";
import { Contacts, Sidebar } from "../components";
import { ROUTES } from "../constants/ROUTES";

export default function ContactPage() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Sidebar>
        <Sidebar.BackButton to={ROUTES.HOME} />
        <Sidebar.Title>Dmitry Belov</Sidebar.Title>
        <Sidebar.SubTitle>Contact</Sidebar.SubTitle>
      </Sidebar>
      <Contacts>
        <Contacts.Title>Let's make something</Contacts.Title>
        <Contacts.Wrapper>
          <Contacts.ExternalLink href="mailto:molisher@mail.ru">
            molisher@mail.ru
          </Contacts.ExternalLink>
          <Contacts.Description>
            Reach out at the email above and share some basic info about your
            project, budget, and timeline. I'll get back to you as soon as
            possible.
          </Contacts.Description>
          <Contacts.Signature>
            Cheers,
            <br /> Dmitry
          </Contacts.Signature>
        </Contacts.Wrapper>
      </Contacts>
    </div>
  );
}
