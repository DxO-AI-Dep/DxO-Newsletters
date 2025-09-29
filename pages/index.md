---
layout: default
title: "DxO Newsletters"
permalink: /
---
<section class="home">
  <header class="home__header">
    <h1>Stay current with DxO</h1>
    <p>Quickly browse updates from our Coding & Research teams and the wider DxO organization. New issues drop every three weeks.</p>
  </header>
  <div class="home__sections">
    {%- assign coding_latest = site.newsletters | where: 'rubric', 'coding-research' | sort: 'date' | reverse | first -%}
    {%- assign all_latest = site.newsletters | where: 'rubric', 'all' | sort: 'date' | reverse | first -%}
    <article class="home__section">
      <h2><a href="{{ '/coding-research/' | relative_url }}">Coding & Research</a></h2>
      {%- if coding_latest -%}
        {% include issue-card.html issue=coding_latest %}
      {%- else -%}
        <p>No issues yet—first edition coming soon.</p>
      {%- endif -%}
    </article>
    <article class="home__section">
      <h2><a href="{{ '/all/' | relative_url }}">DxO All</a></h2>
      {%- if all_latest -%}
        {% include issue-card.html issue=all_latest %}
      {%- else -%}
        <p>Company-wide highlights will appear here shortly.</p>
      {%- endif -%}
    </article>
  </div>
</section>
