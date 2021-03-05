<script lang="ts">
    import {AuthState} from '../../shared/auth';
    import Toolbar from "../../components/ui/my-stuff/Toolbar.svelte";
</script>

{#if $AuthState}
    <div class="container mx-auto">
        <Toolbar />
        <slot />
    </div>
{:else}
    ...how did you get here?
{/if}
