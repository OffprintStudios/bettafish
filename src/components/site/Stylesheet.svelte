<style global lang="less">
    @import (css) url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700');
    @import (css) url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,700');

    :global(:root) {
        /* Colors */
        --accent: #dd4c4f;
        --accent-light: #ea7c7c;
        --accent-dark: #933235;
        --background: #fbfbfb;
        --dropshadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        --text-color: black;
        --borders: grey;
        --code-background: lightgrey;
        /* Widths */
        --max-width: 90%;
        --max-width-mobile: 97.5%;
        --title-spacing: 5px;
        /* Text */
        --body-text: 'Raleway', sans-serif;
        --header-text: 'Josefin Sans', sans-serif;
    }

    :global(html),
    :global(body) {
        position: relative;
        width: 100%;
        height: 100%;
    }

    :global(body) {
        color: var(--text-color);
        margin: 0;
        box-sizing: border-box;
        font-family: var(--body-text);
        background-color: var(--background);
    }

    :global(a) {
        color: var(--accent);
        text-decoration: none;

        &:hover {
            color: var(--accent-dark);
            text-decoration: underline;
        }
    }

    :global(button),
    :global(a.button) {
        margin: 0;
        padding: 10px 15px;
        font-size: 16px;
        text-transform: lowercase;
        font-variant: small-caps;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 18px;
        border: 1px solid var(--borders);
        border-radius: 6px;
        box-shadow: var(--dropshadow);
        &:hover {
            color: whitesmoke;
            background: var(--accent);
            text-decoration: none;
        }
    }

    :global(h1),
    :global(h2),
    :global(h3),
    :global(h4),
    :global(h5) {
        color: var(--accent);
        font-weight: 300;
        font-family: var(--header-text);
    }

    :global(p) {
        margin: 1rem 0 1rem 0;
    }

    :global(hr) {
        border-bottom: 1px solid var(--borders);
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
    }

    /* Tabs styles */
    :global(.svelte-tabs__tab-list) {
        text-align: center;
        border-bottom: 1px solid var(--borders) !important;
    }

    :global(li.svelte-tabs__tab) {
        width: auto;
    }

    :global(li.svelte-tabs__selected) {
        color: var(--accent) !important;
        border-bottom: 2px solid var(--accent) !important;
    }
</style>
