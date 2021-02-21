<script lang="ts">
    import type { RegisterUser } from '../../models/auth';
    import { AuthService } from '../../shared/auth';
    import Toggle from '../util/inputs/Toggle.svelte';

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
            alert(`success!`);
        });
    }
</script>

<form on:submit={onSubmit}>
    <div class="mb-8">
        <input
            name="email"
            id="email"
            type="email"
            placeholder="Email Address"
            bind:value={registerUser.email}
            required
        />
        <input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            bind:value={registerUser.username}
            required
        />
        <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            bind:value={registerUser.password}
            required
        />
        <input
            name="repeatPassword"
            id="repeatPassword"
            type="password"
            placeholder="Repeat Password"
            bind:value={registerUser.repeatPassword}
            required
        />
        <input
            name="inviteCode"
            id="inviteCode"
            type="text"
            placeholder="Invite Code"
            bind:value={registerUser.inviteCode}
        />
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
