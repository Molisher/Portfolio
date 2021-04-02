import React from "react";
import { Contacts, PageWrapper } from "../components";
import { SidebarContainer } from "../containers";

export default function ContactPage() {
  return (
    <PageWrapper>
      <SidebarContainer subtitle="Contact" />
      <Contacts>
        <Contacts.Title>Let's make something</Contacts.Title>
        <Contacts.Wrapper>
          <Contacts.ExternalLink href="https://t.me/Molisher" target="_blank">
            Telegram
          </Contacts.ExternalLink>
          <Contacts.ExternalLink href="mailto:molisher@mail.ru">
            molisher@mail.ru
          </Contacts.ExternalLink>
          <Contacts.Description>
            If you are interested, write to me using the links above.
          </Contacts.Description>
          <Contacts.Signature>
            Cheers,
            <br /> Dmitry
          </Contacts.Signature>
        </Contacts.Wrapper>
      </Contacts>
    </PageWrapper>
  );
}
