'use client';

import type { FormEvent } from 'react';

import { SITE } from '@/lib/site';

export function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const company = String(data.get('company') ?? '');
    const reason = String(data.get('reason') ?? 'General');
    const message = String(data.get('message') ?? '');
    const subject = `Seaforth inquiry: ${reason}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : '',
      `Reason: ${reason}`,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field field-full">
        <label htmlFor="company">
          Company <span aria-hidden="true">(optional)</span>
        </label>
        <input id="company" name="company" autoComplete="organization" />
      </div>
      <div className="field field-full">
        <label htmlFor="reason">Reason for reaching out</label>
        <select id="reason" name="reason" defaultValue="Studio project">
          <option>Studio project</option>
          <option>Venture opportunity</option>
          <option>Product collaboration</option>
          <option>Partnership</option>
          <option>Investment</option>
          <option>Founder introduction</option>
          <option>Media</option>
          <option>General</option>
        </select>
      </div>
      <div className="field field-full">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      <div className="field-full">
        <button className="solid-link" type="submit">
          Send
        </button>
      </div>
      <p className="form-note">
        Submitting opens your email application with the message prepared for Seaforth.
      </p>
    </form>
  );
}
