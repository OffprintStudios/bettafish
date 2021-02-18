<script lang="ts">
    import { Modals } from 'yasp-modals';
    import Stylesheet from '../components/util/Stylesheet.svelte';
    import SiteNav from '../components/util/global/SiteNav.svelte';
    import Footer from '../components/util/global/Footer.svelte';

    const modalOptions = {
        close: {
            showBtn: false,
        },
    };
</script>

<Stylesheet />

<main class="flex flex-col">
    <SiteNav />
    <div class="container mx-auto flex-1">
        <slot />
    </div>
    <Footer />
</main>

<Modals options={modalOptions} />
