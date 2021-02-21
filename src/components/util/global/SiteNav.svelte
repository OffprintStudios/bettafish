<script lang="ts">
    import { url, isActive } from '@roxi/routify';
    import { HomeIcon, MapIcon, UsersIcon } from 'svelte-feather-icons';
    import { openModal } from 'yasp-modals';
    import AuthModal from '../../auth/AuthModal.svelte';
    import { slogans } from '../../../models/titles';

    let rotatingSlogan = slogans[Math.floor(Math.random() * slogans.length)];

    function openAuthModal() {
        openModal(AuthModal);
    }
</script>

<nav class="w-full">
    <div class="nav-header pt-1 pb-1">
        <div class="header-container flex flex-row items-center mx-auto">
            <div class="text-left w-24">
                <button class="header-button">Search</button>
            </div>
            <div class="flex-1">
                <img class="max-h-80 max-w-xs mx-auto" src="assets/images/logo.png" alt="offprint" />
                <h2>{rotatingSlogan}</h2>
            </div>
            <div class="text-right w-24">
                <button class="header-button" on:click={openAuthModal}>Log in</button>
            </div>
        </div>
    </div>
    <div class="nav-buttons">
        <div class="flex flex-row justify-center">
            <a href={$url('./index')} class="link" class:active={$isActive('./index')}>
                <span class="inline-block relative top-0.5"><HomeIcon size="18" /></span>
                Home
            </a>
            <a href={$url('./browse')} class="link" class:active={$isActive('./browse')}>
                <span class="inline-block relative top-0.5"><MapIcon size="18" /></span>
                Browse
            </a>
            <a href={$url('./social')} class="link" class:active={$isActive('./social')}>
                <span class="inline-block relative top-0.5"><UsersIcon size="18" /></span>
                Social
            </a>
        </div>
    </div>
</nav>

<style lang="less">
    nav {
        box-shadow: var(--dropshadow);
        margin-bottom: 2.5rem;
        div.nav-header {
            background: var(--accent);
            color: whitesmoke;
            div.header-container {
                max-width: 80%;
                h2 {
                    text-align: center;
                    position: relative;
                    color: whitesmoke;
                    font-style: italic;
                    font-size: 20px;
                }
            }
            button.header-button {
                color: whitesmoke;
                border-color: whitesmoke;
                &:hover {
                    background: var(--accent-dark);
                }
            }
        }
        div.nav-buttons {
            background: linear-gradient(180deg, var(--accent-dark), var(--accent));
            a.link {
                color: whitesmoke;
                font-size: 18px;
                padding: 10px 15px;
                &:hover {
                    transition: 0.125s;
                    color: whitesmoke;
                    background: var(--accent-dark);
                    text-decoration: none;
                }
                &.active {
                    background: var(--accent-dark);
                }
            }
        }
    }
</style>
