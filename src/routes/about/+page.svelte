<script lang="ts">
  import PageShell from "$lib/components/ui/PageShell.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";
  import PageMeta from "$lib/components/ui/PageMeta.svelte";
  import ContentBlock from "$lib/components/ui/ContentBlock.svelte";
  import { about } from "$lib/data/site";
</script>

<PageMeta
  title="About"
  description="More about Kim Nikita Schijf — student, frontend, Amsterdam."
/>

<PageShell>
  <PageHeader title="About me" subtitle={about.hello} />

  <div class="prose content stack-12">
    <p>{about.intro}</p>
    {#each about.paragraphs as paragraph (paragraph)}
      <p>{paragraph}</p>
    {/each}
  </div>

  <ContentBlock id="skills-heading" title="Skills & tools">
    <ul class="tag-list">
      {#each about.skills as skill (skill)}
        <li>{skill}</li>
      {/each}
    </ul>
  </ContentBlock>

  <ContentBlock id="timeline-heading" title="Timeline">
    <ol class="timeline">
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

  <ContentBlock id="now-heading" title="Right now">
    <ul class="bullet-list">
      {#each about.currently as item (item)}
        <li>{item}</li>
      {/each}
    </ul>
    <p style="margin-top: var(--space-4)">
      <a class="link-arrow" href="/now">Full /now page →</a>
    </p>
  </ContentBlock>

  <ContentBlock id="fun-heading" title="Random facts">
    <ul class="fact-list">
      {#each about.funFacts as fact (fact)}
        <li>{fact}</li>
      {/each}
    </ul>
  </ContentBlock>

  <blockquote class="display-quote stack-10">"{about.aside}"</blockquote>

  <p class="page-footer">
    <a class="link-arrow" href="/work">See my work →</a>
    ·
    <a class="link-arrow" href="/contact">Say hi →</a>
  </p>
</PageShell>
