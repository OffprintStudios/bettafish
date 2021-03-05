import { persist, localStorage } from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";

export const AuthState = persist(writable<string>(null), localStorage(), 'auth');
