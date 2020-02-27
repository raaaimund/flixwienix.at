export const state = () => ({
    isNavigationDrawerVisible: false
})

export const mutations = {
    toggleNavigationDrawerVisibility(state) {
        state.isNavigationDrawerVisible = !state.isNavigationDrawerVisible
    },
    setNavigationDrawerVisibility(state, visibility) {
        state.isNavigationDrawerVisible = visibility
    }
}