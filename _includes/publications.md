<div class="panel">

<h2 id="publications" style="margin: 2px 0px -15px;">Research</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li{% if link.venue_color %} style="--venue-color: {{ link.venue_color }};"{% endif %}>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 0;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" alt="{{ link.title }}">
    {% if link.conference_short %}
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.arxiv | default: link.openreview | default: link.page | default: link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>{% if link.notes %} <span class="note">· {{ link.notes }}</span>{% endif %}
      </div>
    <div class="links">
      {% if link.arxiv %} 
      <a href="{{ link.arxiv }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">arXiv</a>
      {% endif %}
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">{{ link.pdf_label | default: 'PDF' }}</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.openreview %} 
      <a href="{{ link.openreview }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">OpenReview</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

{% endfor %}

</ol>
</div>

<div style="text-align: right; font-size: 0.9em; margin-top: 10px;">
*Equal Contribution &nbsp; <sup>†</sup>Co-advisors
</div>

</div>
