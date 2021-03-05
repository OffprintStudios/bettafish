<script lang="ts">
    import { LoaderIcon, CircleIcon, Edit3Icon, XIcon, ShareIcon, TrashIcon, ListIcon, GridIcon, FilterIcon } from 'svelte-feather-icons';
    import Menu from '../misc/Menu.svelte';

    let showCreateMenu = false;
    const toggleCreateMenu = () => showCreateMenu = !showCreateMenu;
</script>

<div class="tools flex flex-row rounded-md p-2 m-8 shadow-lg">
    <!--Creation-->
    <div class="relative">
        <button class="shadow-none relative" on:click={toggleCreateMenu}>
            <span class="inline-block relative top-0.5 leading-3"><LoaderIcon size="18" /></span>
            <span class="leading-3 relative -top-0.5">Create</span>
        </button>
    </div>
    <div class="mx-1"></div>

    <!--Publishing-->
    <button class="shadow-none">
        <span class="inline-block relative top-0.5 leading-3"><CircleIcon size="18" /></span>
        <span class="leading-3 relative -top-0.5">Unpublished</span>
    </button>
    <div class="mx-1"></div>

    <!--Editing-->
    <button class="shadow-none">
        <span class="inline-block relative top-0.5 leading-3"><Edit3Icon size="18" /></span>
        <span class="leading-3 relative -top-0.5">Edit</span>
    </button>
    <div class="mx-1"></div>

    <!--Content Tools-->
    <button class="shadow-none rounded-r-none mr-0">
        <span class="inline-block relative top-0.5 leading-3"><XIcon size="18" /></span>
    </button>
    <button class="shadow-none rounded-none border-l-0 border-r-0 mx-0">
        <span class="inline-block relative top-0.5 leading-3"><ShareIcon size="18" /></span>
    </button>
    <button class="shadow-none rounded-l-none ml-0">
        <span class="inline-block relative top-0.5 leading-3"><TrashIcon size="18" /></span>
    </button>
    <div class="mx-1"></div>

    <!--My Stuff Tools-->
    <button class="shadow-none rounded-r-none mr-0">
        <span class="inline-block relative top-0.5 leading-3"><ListIcon size="18" /></span>
    </button>
    <button class="shadow-none rounded-none border-l-0 border-r-0 mx-0">
        <span class="inline-block relative top-0.5 leading-3"><GridIcon size="18" /></span>
    </button>
    <button class="shadow-none rounded-l-none ml-0">
        <span class="inline-block relative top-0.5 leading-3"><FilterIcon size="18" /></span>
    </button>
</div>

<Menu id="create" bind:show={showCreateMenu}>
    <button class="menu-item">Add Prose</button>
    <button class="menu-item">Add Poetry</button>
    <button class="menu-item">Add Blog</button>
</Menu>

<style lang="less">
    div.tools {
      background: var(--code-background);
      border: 1px solid var(--borders);
      button {
        background: var(--background);
        &:hover {
          background: var(--accent);
          transition: 0.125s;
        }
      }
    }
</style>