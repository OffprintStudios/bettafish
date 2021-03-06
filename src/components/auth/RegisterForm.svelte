<script lang="ts">
    // @ts-ignore
    import { closeModal } from 'yasp-modals';
    import type { RegisterUser } from '../../models/auth';
    import Toggle from '../ui/inputs/Toggle.svelte';
    import TextInput from '../ui/inputs/TextInput.svelte';
    import { AuthService } from "../../shared/auth";

    const auth = new AuthService();

    const registerUser: RegisterUser = {
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
        agreedToPolicies: false,
        isMinAge: false,
        inviteCode: ''
    };

    function onSubmit() {
        auth.register(registerUser).subscribe(() => {
            closeModal();
        });
    }
</script>

<form on:submit|preventDefault={onSubmit}>
    <div class="mb-8">
        <TextInput bind:value={registerUser.email} id="email" type="email" label="Email Address" placeholder="someone@example.com" />
        <TextInput bind:value={registerUser.username} id="username" label="Username" placeholder="Beatriz Ex Machina" />
        <TextInput bind:value={registerUser.password} id="password" type="password" label="Password" placeholder="••••••••••"/>
        <TextInput bind:value={registerUser.repeatPassword} id="repeatPassword" type="password" label="Repeat Password" placeholder="••••••••••"/>
        <TextInput bind:value={registerUser.inviteCode} id="inviteCode" label="Invite Code" placeholder="myInviteCode" />
    </div>

    <div class="block">
        <Toggle
            bind:value={registerUser.agreedToPolicies}
            label="I agree to the Terms of Service, Privacy Policy, and Code of Conduct."
        />
    </div>

    <div class="block">
        <Toggle bind:value={registerUser.isMinAge} label="I am 13 years of age or older." />
    </div>

    <div class="mt-5 text-right">
        <button type="submit">Register</button>
    </div>
</form>
