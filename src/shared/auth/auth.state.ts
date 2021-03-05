import { persist, localStorage } from "@macfja/svelte-persistent-store";
import { writable } from "svelte/store";
import type { User } from "../../models/user";

export const AuthState = persist(writable<User>(null), localStorage(), 'auth');
