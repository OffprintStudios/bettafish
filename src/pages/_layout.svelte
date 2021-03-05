<script lang="ts">
    import { Modals } from 'yasp-modals';
    import Stylesheet from '../components/site/Stylesheet.svelte';
    import SiteNav from '../components/site/SiteNav.svelte';

    const modalOptions = {
        close: {
            showBtn: false,
        },
    };
</script>

<Stylesheet />

<main class="content flex flex-row">
    <SiteNav />
    <div class="flex-auto overflow-y-auto">
        <slot />
    </div>
</main>

<Modals options={modalOptions} />

<style lang="less">
    main {
        height: 100vh;
        color: var(--text-color);
        font-family: var(--body-text);
        background-color: var(--background);
    }
</style>
