<script lang="ts">
    import { url, isActive } from '@roxi/routify';
    import { HomeIcon, MapIcon, UsersIcon, SearchIcon, LogInIcon, LogOutIcon, MessageCircleIcon, BellIcon, HardDriveIcon } from 'svelte-feather-icons';
    import { openModal } from 'yasp-modals';
    import AuthModal from '../auth/AuthModal.svelte';
    import { AuthService, AuthState } from "../../shared/auth";
    import { UserState } from '../../shared/user';

    function logOut() {
        const auth = new AuthService();
        auth.logout().subscribe();
    }
</script>

<nav class="h-full relative top-auto left-0 flex flex-col shadow-2xl py-2">
    {#if $UserState}
        <a class="link avatar" href={$url('./index')}>
            <img class="avatar" src={$UserState.profile.avatar} alt="Avatar" />
        </a>
    {/if}
    <a href={$url('./index')} class="link" class:active={$isActive('./index')}>
        <span class="link-icon"><HomeIcon size="28" strokeWidth="1" /></span>
    </a>
    <a href={$url('./search')} class="link" class:active={$isActive('./search')}>
        <span class="link-icon"><SearchIcon size="28" strokeWidth="1" /></span>
    </a>
    <a href={$url('./browse')} class="link" class:active={$isActive('./browse')}>
        <span class="link-icon"><MapIcon size="28" strokeWidth="1" /></span>
    </a>
    <a href={$url('./social')} class="link" class:active={$isActive('./social')}>
        <span class="link-icon"><UsersIcon size="28" strokeWidth="1" /></span>
    </a>
    {#if $UserState}
        <a href={$url('./my-stuff')} class="link" class:active={$isActive('./my-stuff')}>
            <span class="link-icon"><HardDriveIcon size="28" strokeWidth="1" /></span>
        </a>
        <a href={$url('./search')} class="link">
            <span class="link-icon"><MessageCircleIcon size="28" strokeWidth="1" /></span>
        </a>
        <a href={$url('./search')} class="link">
            <span class="link-icon"><BellIcon size="28" strokeWidth="1" /></span>
        </a>
    {/if}
    <div class="flex-1"><!--spacer--></div>
    {#if $AuthState}
        <button class="link" on:click={() => logOut()}>
            <span class="link-icon"><LogOutIcon size="28" strokeWidth="1" /></span>
        </button>
    {:else}
        <button class="link" on:click={() => openModal(AuthModal)}>
            <span class="link-icon"><LogInIcon size="28" strokeWidth="1" /></span>
        </button>
    {/if}
</nav>

<style lang="less">
  nav {
    background: var(--accent);
    button.link {
      border: none;
      padding: 20px 20px;
      text-transform: none;
      font-variant: normal;
      color: whitesmoke;
      border-radius: 0;
      box-shadow: none;
      &:hover {
        background: var(--accent-dark);
      }
    }
    a.link {
      color: whitesmoke;
      padding: 20px 20px;
      border-right: 4px solid transparent;
      &:hover {
        transition: 0.125s;
        color: whitesmoke;
        background: var(--accent-dark);
        text-decoration: none;
      }
      &.active {
        border-right-color: var(--accent-dark);
      }
      &.avatar {
        padding: 10px 12px;
      }
      span.link-icon {
        @media (max-width: 640px) {
          //--small
          margin-right: 0.5rem;
        }

        @media (max-width: 481px) {
          //--xsmall
          margin-right: 0.25rem;
        }
      }
      img.avatar {
        position: relative;
        left: 0.15rem;
        max-width: 40px;
        border: 1px solid whitesmoke;
        border-radius: 50%;
      }
    }
  }
</style>
