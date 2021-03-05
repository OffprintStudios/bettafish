<script lang="ts">
    // @ts-ignore
    import { closeModal } from 'yasp-modals';
    import type { LoginUser } from '../../models/auth';
    import { AuthService } from "../../shared/auth";
    import Toggle from '../ui/inputs/Toggle.svelte';
    import TextInput from '../ui/inputs/TextInput.svelte';

    const auth = new AuthService();

    const loginUser: LoginUser = {
        email: '',
        password: '',
        rememberMe: false,
    };

    function onSubmit() {
        auth.login(loginUser).subscribe(() => {
            closeModal();
        });
    }
</script>

<form on:submit|preventDefault={onSubmit}>
    <div class="mb-8">
        <TextInput bind:value={loginUser.email} id="email" type="email" label="Email Address" placeholder="someone@example.com" />
        <TextInput bind:value={loginUser.password} id="password" type="password" label="Password" placeholder="••••••••••"/>
    </div>

    <div class="flex flex-row items-center">
        <div class="flex-1">
            <Toggle bind:value={loginUser.rememberMe} label="Remember Me" />
        </div>
        <div>
            <button type="submit" class="text-right">Log In</button>
        </div>
    </div>
</form>
