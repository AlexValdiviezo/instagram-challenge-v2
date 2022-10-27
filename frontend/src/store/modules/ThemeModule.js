const themeModule = {
    state:{
        darkMode: true
    },
    mutations: {
        setDarkMode(state, payload){
            state.darkMode = payload
        }
    },
    actions: {
        changeDarkMode({commit}, payload){
            commit('setDarkMode', payload)
        }
    }   
}

export default themeModule