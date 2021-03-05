<script lang="ts">
    export let value = null;
    export let id: string;
    export let type = 'text';
    export let label: string;
    export let placeholder: string;

    const handleInput = (event) => {
        value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    }
</script>

<div class="text-field">
    <label for="{id}">{label}</label>
    <input id="{id}" type="{type}" value="{value}" placeholder="{placeholder}" on:input={handleInput} on:change={handleInput}>
</div>

<style lang="less">
  div.text-field {
    margin: 0.75rem 0 0.75rem 0;
    font-size: 0;
    input[type='text'],
    input[type='email'],
    input[type='password'] {
      display: block;
      border-radius: 6px;
      border-top-left-radius: 0;
      border: 1px solid var(--borders);
      width: 100%;
      font-size: 16px;

      &:focus {
        --tw-ring-color: var(--accent);
      }
    }
    label {
      position: relative;
      bottom: -0.2rem;
      text-transform: lowercase;
      font-variant: small-caps;
      font-size: 1rem;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      letter-spacing: 2px;
      border-left: 1px solid var(--borders);
    }
  }
</style>