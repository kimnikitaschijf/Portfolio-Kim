<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import ContentBlock from "$lib/components/ui/ContentBlock.svelte";
  import { about, pages } from "$lib/data/site";

  const page = pages.about;
</script>

<PageMeta title={page.meta.title} description={page.meta.description} />

<PageShell>
  <PageHeader title={page.header.title} subtitle={about.hello} />

  <div class="prose content stack-12">
    <p>{about.intro}</p>
    {#each about.paragraphs as paragraph (paragraph)}
      <p>{paragraph}</p>
    {/each}
  </div>

  <ContentBlock id={page.sections.skills.id} title={page.sections.skills.title}>
    <ul class="tag-list" role="list">
      {#each about.skills as skill (skill)}
        <li>{skill}</li>
      {/each}
    </ul>
  </ContentBlock>

  <ContentBlock id={page.sections.timeline.id} title={page.sections.timeline.title}>
    <ol class="timeline" role="list">
      {#each about.timeline as entry (entry.year)}
        <li class="timeline__item">
          <span class="timeline__year mono">{entry.year}</span>
          <div>
            <h3 class="timeline__title">{entry.title}</h3>
            <p class="timeline__detail">{entry.detail}</p>
          </div>
        </li>
      {/each}
    </ol>
  </ContentBlock>

  <ContentBlock id={page.sections.facts.id} title={page.sections.facts.title}>
    <dl class="def-list">
      {#each about.facts as fact (fact.label)}
        <div class="def-list__row">
          <dt>{fact.label}</dt>
          <dd class="mono">{fact.value}</dd>
        </div>
      {/each}
    </dl>
  </ContentBlock>

  <ContentBlock id={page.sections.currently.id} title={page.sections.currently.title}>
    <ul class="bullet-list">
      {#each about.currently as item (item)}
        <li>{item}</li>
      {/each}
    </ul>
    <p class="stack-4">
      <a class="link-arrow" href={page.sections.currently.cta.href}>
        {page.sections.currently.cta.label}
      </a>
    </p>
  </ContentBlock>

  <ContentBlock id={page.sections.fun.id} title={page.sections.fun.title}>
    <ul class="fact-list" role="list">
      {#each about.funFacts as fact (fact)}
        <li>{fact}</li>
      {/each}
    </ul>
  </ContentBlock>

  <blockquote class="display-quote stack-10" cite="/about">
    "{about.aside}"
  </blockquote>

  <p class="page-footer">
    {#each page.footer as link, i (link.href)}
      {#if i > 0}·{/if}
      <a class="link-arrow" href={link.href}>{link.label}</a>
    {/each}
  </p>
</PageShell>
