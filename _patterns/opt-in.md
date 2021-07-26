---
layout: default
name: Opt-in to give consent
short-description: Notifying the user of data collection and asking them to consent to it.
lang-link: opt-in-fr.html
lang: en
status: in development
date-modified: 2021-07-22
---

<section class="alert alert-info">
    <p>This pattern is currently <strong>{{ page.status }}</strong>.</p>
</section>

{{ page.short-description }}

We have a responsibility to ask users for consent when we want to collect, store, or use their data especially personal information.

This pattern asks the user to:

* Read a summarized privacy notice
* Confirm that they clearly understand and freely agree to how their data will be collected and used.

## When to use this pattern

Use this pattern when:

* Privacy notices (statements, terms of use, etc.) are required. For example, signing up for a new service or storing data in cookies.
* You are required by law to record when and how consent is given. This includes the version of a privacy notice the user agreed to.
* The user understands what data is collected, where it is stored, what it is used for, and for how long.
* The user is able to opt-out, correct, or delete their data at any time.

## When not to use this pattern

Don't use this pattern when:

* The type of data is collected, where it is stored, what it is used for, and for how long, is unspecified or will change often.
* The user isn't able to see or access the other data that organization collects and its purposes or uses.
* There isn't a clear process for the user to opt-out, correct, or delete their data at any time.

## How it works

When you collect a user's data, make sure the following are **present, easy to find, read, and use**.

* A summarized privacy statement highlighting the type(s) of data collection, storage, and use, with links to the full statement.
* A short description of how to opt-out, correct, or delete their data later.
* An affirmative action the user can take to opt-in by aggreeing to the privacy statement (i.e. a checkbox that isn't pre-selected).

## Research and impacts

Coming soon

## Examples

### Collecting users' demographic data for research on Canada.ca

<!-- IMPORTANT - Add links to SCL and sign up once live! -->

Service Canada Labs - a test site for experimental ideas and works in progress - invites users to sign up to help improve that work by participating in research activities.

The sign up form asks users to share some mandatory contact information and some optional demographic information.

When collecting users' demographic data for research on Canada.ca (and related sites like Service Canada Labs), the following components should be included on the same page as the form collecting the data.

> **Privacy policy**
>
> Your information will not be used for any decision-making process that affects your access to Government of Canada services.
> Your personal information will not be used for any administrative purposes.
>
> Your participation is completely voluntary.
> You can withdraw your participation and personal information from our list at any time with no impact on your access to government services or benefits.
>
> Your personal information and feedback is confidential.
>
> Your information will be used by Employment and Social Development Canada for policy analysis, research, and evaluation purposes.
>
> **What we will collect**
>
> We need the following information so we can contact you:
>
> * Email address
> * Year of birth
> * Language preference
>
> You can also choose to share more information with us so we can invite you to research and testing opportunities based on your life experiences:
>
> * Province or territory
> * Gender identity
> * Indigenous identity
> * Disabilities
> * Visible Minority group
> * Income range
>
> We collect this information to ensure our research groups are diverse, and to identify trends in feedback for specific groups.
>
> [Read the full privacy policy.](https://www.canada.ca/en/transparency/privacy.html)
>
> **How to unsubscribe from research invites**
>
> If you have previously signed up to become a participant and no longer wish to be contacted for future research studies, you can [unsubscribe](#unsubscribe) yourself from the participant list and we will remove your personal information.
>
> _Put your form here._
>
> <div class="checkbox">
> <input type="checkbox" id="consent" name="consent" value="consent">
> <label for="consent" class="required"><strong>I have read, understood and agree to the above. I affirm that I am 18 years old, or older. I understand that I can withdraw from this participant pool, or any research study at any time without consequence.</strong></label>
> </div>

Once the user consents to their data being collected and submits the form, the form passes that information to a database where it is stored.

To learn about the technical components that make up Service Canada Labs' sign up form, read this [design documentation](https://github.com/DTS-STN/Alpha-Site/wiki/Design-Doc-004-Screener-Intake-Process).

## Related patterns and components

* [Privacy Disclaimer (Canada.ca Design System)](https://design.canada.ca/common-design-patterns/privacy-disclaimer.html)
* [Privacy Statements Generator (Canadian Digital Service)](https://privacy-statements.cds.alpha.canada.ca/en/)

### Recent changes

* 2021-07-13 - Started development
* 2021-07-22 - Published first draft
