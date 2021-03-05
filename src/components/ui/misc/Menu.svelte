<script lang="ts">
    export let id: string;
    export let show = false;
</script>

{#if show}
    <div id="{id}" class="absolute z-10 py-2 top-16">
        <slot></slot>
    </div>
{/if}

<style lang="less">
    div {
      background: var(--background);
      border: 1px solid var(--borders);
      button.menu-item {
        display: block;
        text-transform: none;
        font-variant: none;
        border: none;
        box-shadow: none;
        width: 100%;
        border-radius: 0;
      }
    }
</style>