---
layout: default
name: Opt-in to give consent
short-description: Notifying the user of data collection and asking them to consent to it.
feature-img-path: assets\images\opt-in.png
feature-img-alt: Privacy policy with with checkbox prompt to agree and submit button.
lang-link: opt-in-fr.html
lang: en
status: under development
date-modified: 2021-07-22
---

{% include pattern-summary.html %}

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

### Privacy statement

A summarized privacy statement highlighting the type(s) of data collection, storage, and use, with links to the full statement.
Be sure to use proper heading levels, typically a `h2` is used.  

<section>
    <h4>Example of a privacy statement</h4>
    <div class="panel panel-default pattern-demo">
        <div class="panel-body">
            <p class="h2 mrgn-tp-sm">Privacy policy</p>
            <p><em>[You can add a custom privacy statement here that adheres to the Government of Canada privacy. It should be clear how the users personal information <strong>will and will not</strong> be used. Examples follow.]</em></p>
            <p>Your information <strong>will not</strong> be used for any decision-making process that affects your access to Government of Canada services. Your personal information <strong>will not</strong> be used for any administrative purposes.</p>
            <p>Your personal information and feedback is confidential.</p>
            <p>Your information <strong>will</strong> be used by Employment and Social Development Canada for <em>[Briefly explain what the information will be used for]</em>.</p>
            <p class="h3">What we will collect</p>
            <p>We need the following information so we can <em>[Briefly explain why you need the following data]</em>:</p>
            <ul>
                <li>Email address</li>
                <li><em>[List more mandatory personal identifying felids]</em></li>
            </ul>
            <p>You can also choose to share more information with us so we can <em>[Briefly explain how providing the following data will enable services for the user]</em>:</p>
            <ul>
                <li>Province or territory</li>
                <li><em>[List more optional personal identifying felids]</em></li>
            </ul>
            <p>We collect this information to ensure our research groups are diverse, and to identify trends in feedback for specific groups.</p>
            <p><a href="https://www.canada.ca/en/transparency/privacy.html">Read the full privacy policy.</a></p>
        </div>
    </div>
    <details>
        <summary>Code</summary>
        <pre><code>&lt;h2>Privacy policy&lt;/h2>
&lt;p>Your information &lt;strong>will not&lt;/strong> be used for any decision-making process that affects your access to Government of Canada services. Your personal information &lt;strong>will not&lt;/strong> be used for any administrative purposes.&lt;/p>
&lt;p>Your personal information and feedback is confidential.&lt;/p>
&lt;p>Your information &lt;strong>will&lt;/strong> be used by Employment and Social Development Canada for ...&lt;/p>
&lt;h3>What we will collect&lt;/h3>
&lt;p>We need the following information so we can ...:&lt;/p>
&lt;ul>
    &lt;li>Email address&lt;/li>
    &lt;li>...&lt;/li>
&lt;/ul>
&lt;p>You can also choose to share more information with us so we can ...:&lt;/p>
&lt;ul>
    &lt;li>Province or territory&lt;/li>
    &lt;li>...&lt;/li>
&lt;/ul>
&lt;p>We collect this information to ensure our research groups are diverse, and to identify trends in feedback for specific groups.&lt;/p>
&lt;p>&lt;a href="https://www.canada.ca/en/transparency/privacy.html">Read the full privacy policy.&lt;/a>&lt;/p></code></pre>
    </details>
</section>

### Opt-out description

A short description of how to opt-out, correct, or delete their data later.
The section should start with the same level heading as the Privacy statement, typically a `h2`.

<section>
    <h4>Example of an opt-out description</h4>
    <div class="panel panel-default pattern-demo">
        <div class="panel-body">
            <p class="h2 mrgn-tp-sm">How to unsubscribe from <em>[identify what the user is unsubscribing from]</em></p>
            <p>If you have previously signed up to become a participant and no longer wish to be contacted for future <em>[explain in detail what the user is unsubscribing from]</em>, you can <a href="#unsubscribe">unsubscribe</a> yourself from the participant list and we will remove your personal information.</p>
        </div>
    </div>
    <details>
        <summary>Code</summary>
        <pre><code>&lt;h2>How to unsubscribe from ...&lt;/h2>
&lt;p>If you have previously signed up to become a participant and no longer wish to be contacted for future ..., you can &lt;a href="#unsubscribe">unsubscribe&lt;/a> yourself from the participant list and we will remove your personal information.&lt;/p></code></pre>
    </details>
</section>

### Affirmative action

An affirmative action the user can take to opt-in by agreeing to the privacy statement (i.e. a checkbox that isn't pre-selected).

<section>
    <h4>Example of an affirmative action</h4>
    <div class="panel panel-default pattern-demo">
        <div class="panel-body">
            <div class="checkbox-inline">
                <label for="consent" class="required">
                    <input type="checkbox" id="consent" name="consent" value="consent">
                    <strong>I have read, understood and agree to the above. I affirm that I am 18 years old, or older. I understand that I can withdraw from this <em>[service name]</em> at any time without consequence.</strong>
                </label>
            </div>
        </div>
    </div>
    <details>
        <summary>Code</summary>
        <pre><code>&lt;div class="checkbox-inline">
    &lt;label for="consent" class="required">
        &lt;input type="checkbox" id="consent" name="consent" value="consent">
        &lt;strong>I have read, understood and agree to the above. I affirm that I am 18 years old, or older. I understand that I can withdraw from this ... at any time without consequence.&lt;/strong>
    &lt;/label>
&lt;/div></code></pre>
    </details>
</section>

## Research and impacts

Coming soon

## Related patterns and components

* [Privacy Disclaimer (Canada.ca Design System)](https://design.canada.ca/common-design-patterns/privacy-disclaimer.html)
* [Privacy Statements Generator (Canadian Digital Service)](https://privacy-statements.cds.alpha.canada.ca/en/)

### Recent changes

* 2021-07-13 - Started development
* 2021-07-22 - Published first draft
