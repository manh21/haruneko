<script lang="ts">
    import {
        SideNav,
        SideNavItems,
        SideNavMenu,
        SideNavLink,
    } from 'carbon-components-svelte';
    import {
        App,
        Debug,
        Doc,
        Document,
        Events,
        EventsAlt,
        Home,
        Image,
        Information,
        Location,
        LogoDiscord,
        LogoGithub,
        NetworkOverlay,
        PlugFilled,
        Settings,
        SettingsAdjust,
        SettingsView,
        TaskSettings,
    } from 'carbon-icons-svelte';
    import { Locale } from '../stores/Settings';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import SettingsMenu from './settings/SettingsModal.svelte';
    import PluginSelect from './PluginSelect.svelte';

    export let isOpen: boolean;

    //Settings Modal
    let settingsSelectedTabs = 0;
    let isSettingsModalOpen = false;
    let isPluginModalOpen = false;
</script>

{#if isPluginModalOpen}
    <PluginSelect
        bind:isPluginModalOpen
        on:close={() => (isPluginModalOpen = false)}
    />
{/if}
<SettingsMenu
    bind:isModalOpen={isSettingsModalOpen}
    selectedTab={settingsSelectedTabs}
/>
<SideNav bind:isOpen rail expansionBreakpoint={100000}>
    <span class="menuleftpanel">
        <SideNavItems>
            <SideNavLink
                text={$Locale.Frontend_Classic_Sidenav_Home()}
                icon={Home}
                on:click={() => dispatch('home')}
            />
            <SideNavLink
                text={$Locale.Frontend_Plugins()}
                icon={PlugFilled}
                on:click={() => (isPluginModalOpen = true)}
            />
            <SideNavMenu text={$Locale.Frontend_Settings()} icon={Settings}>
                <SideNavLink
                    text={$Locale.Frontend_Classic_Sidenav_Settings_General()}
                    icon={SettingsAdjust}
                    on:click={() => {
                        settingsSelectedTabs = 0;
                        isSettingsModalOpen = true;
                    }}
                />
                <SideNavLink
                    text={$Locale.Frontend_Classic_Sidenav_Settings_Interface()}
                    icon={SettingsView}
                    on:click={() => {
                        settingsSelectedTabs = 1;
                        isSettingsModalOpen = true;
                    }}
                />
                <SideNavLink
                    text={$Locale.Frontend_Classic_Sidenav_Settings_Trackers()}
                    icon={TaskSettings}
                    on:click={() => {
                        settingsSelectedTabs = 2;
                        isSettingsModalOpen = true;
                    }}
                />
                <SideNavLink
                    text={$Locale.Frontend_Classic_Sidenav_Settings_Network()}
                    icon={NetworkOverlay}
                    on:click={() => {
                        settingsSelectedTabs = 3;
                        isSettingsModalOpen = true;
                    }}
                />
            </SideNavMenu>
            <SideNavMenu text={$Locale.Frontend_Help()} icon={Document}>
                <SideNavLink
                    text="Documentation"
                    icon={Doc}
                    class="clik-item"
                    on:click={() =>
                        window.open(
                            'https://hakuneko.download/docs/interface/'
                        )}
                />
                <SideNavLink
                    text="Discord"
                    icon={LogoDiscord}
                    class="clik-item"
                    on:click={() =>
                        window.open('https://discordapp.com/invite/A5d3NDf')}
                />
                <SideNavLink
                    text="Open a ticket"
                    icon={Debug}
                    class="clik-item"
                    on:click={() =>
                        window.open(
                            'https://hakuneko.download/docs/troubleshoot/'
                        )}
                />
                <SideNavLink
                    text="Home page"
                    icon={Home}
                    class="clik-item"
                    on:click={() => window.open('https://hakuneko.download')}
                />
                <SideNavLink
                    text="Show IP and localisation"
                    icon={Location}
                    class="clik-item"
                    on:click={() => window.open('https://ipinfo.io/json')}
                />
            </SideNavMenu>
            <SideNavMenu text={$Locale.Frontend_About()} icon={Information}>
                <SideNavLink
                    text="Code source"
                    icon={LogoGithub}
                    class="clik-item"
                    on:click={() =>
                        window.open(
                            'https://hakuneko.download/docs/interface/'
                        )}
                />
                <SideNavLink
                    text="Using version X.X.X"
                    icon={App}
                    class="clik-item"
                    on:click={() => window.open('https://todo.com')}
                />
                <SideNavLink
                    text="Maintainers"
                    icon={Events}
                    class="clik-item"
                    on:click={() =>
                        window.open('https://discordapp.com/invite/A5d3NDf')}
                />
                <SideNavLink
                    text="Contributors"
                    icon={EventsAlt}
                    class="clik-item"
                    on:click={() =>
                        window.open(
                            'https://hakuneko.download/docs/troubleshoot/'
                        )}
                />
                <SideNavLink
                    text="Artwork"
                    icon={Image}
                    class="clik-item"
                    on:click={() =>
                        window.open('https://www.deviantart.com/hakuneko3kune')}
                />
            </SideNavMenu>
        </SideNavItems>
    </span>
</SideNav>

<style>
    .menuleftpanel :global(a.clik-item) {
        cursor: pointer;
    }
</style>
