<script lang="ts">
    // @ts-ignore
	import { Router } from '@roxi/routify';
    import { routes } from '../.routify/routes';
</script>

<Router {routes} />

<style global lang="postcss">
    /* purgecss start ignore */
    @tailwind base;
    @tailwind components;
    /* purgecss end ignore */
    @tailwind utilities;
</style>
