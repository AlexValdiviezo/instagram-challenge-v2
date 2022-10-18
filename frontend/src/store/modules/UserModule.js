const userModule = {
    state:{
        username: '',
        avatar: ''
    },
    mutations: {
        setUsername(state, value){
          state.username = value
        },
        setAvatar(state, value){
          state.avatar = value
        }
    }
}

export default userModule