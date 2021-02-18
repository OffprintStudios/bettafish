<script lang="ts">
    import LoginForm from './LoginForm.svelte';
    import RegisterForm from './RegisterForm.svelte';
    import { closeModal } from 'yasp-modals';
    import { fly } from 'svelte/transition';
    import { XIcon } from 'svelte-feather-icons';
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
</script>

<div class="auth-modal" transition:fly={{ y: 100, duration: 400 }}>
    <div class="modal-header flex flex-row items-center">
        <h2 class="flex-1">Welcome back!</h2>
        <button class="border-none shadow-none" on:click={closeModal}><XIcon size="18" /></button>
    </div>
    <Tabs>
        <TabList>
            <Tab>Login</Tab>
            <Tab>Register</Tab>
        </TabList>

        <TabPanel>
            <LoginForm />
        </TabPanel>

        <TabPanel>
            <RegisterForm />
        </TabPanel>
    </Tabs>
</div>

<style lang="less">
    div.auth-modal {
        position: relative;
        max-width: 650px;
        max-height: 650px;
        padding: 25px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--background);
        border-radius: 6px;
        overflow: auto;
        div.modal-header {
            border-bottom: 1px solid var(--borders);
            h2 {
                font-size: 2.25rem;
            }
        }
    }
</style>
