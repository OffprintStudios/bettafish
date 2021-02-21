<script lang="ts">
    export let value: boolean = false;
    export let label: string;

    function switchValue() {
        value = !value;
    }
</script>

<div class="flex flex-row items-center mt-3 mb-3">
    <div class="switch-container w-12 h-6 flex items-center rounded-full" on:click={switchValue}>
        <div
            class="switch w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
            class:switch-activated={value}
        />
    </div>
    <label class="ml-3" for="toggle">{label}</label>
</div>

<style lang="less">
    div.switch-container {
        border: 1px solid var(--borders);
        background: transparent;
        padding: 0.2rem;
        cursor: pointer;

        div.switch {
            background: gray;
        }

        div.switch-activated {
            background: var(--accent);
            --tw-translate-x: 1.5rem/* 24px */;
        }
    }
</style>
