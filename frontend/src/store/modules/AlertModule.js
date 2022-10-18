const AlertModule={
  state:{
    alert: false,
    addPostOk: false,
    addPostError: false,
    deleteOk: false,
    deleteError: false,
    editPostOk: false,
    editPostError: false,
    usernameIsEmpty: false,
    serverConnectError: false,
    serverNotFound: false
  },
  mutations:{
    setUsernameIsEmpty(state, payload){
      if(payload && !state.usernameIsEmpty) {
        state.usernameIsEmpty = payload
        setTimeout(() => {
          state.usernameIsEmpty = false
        }, 2600)
        return
      }
    },
    setEditPostOk(state,payload){
      if(payload && !state.editPostOk) {
        state.editPostOk = payload
        setTimeout(() => {
          state.editPostOk = false
        }, 2600)
        return
      }
    },
    setEditPostError(state, payload){
      if(payload && !state.editPostError) {
        state.editPostError = payload
        setTimeout(() => {
          state.editPostError = false
        }, 2600)
        return
      }
    },
    setAddPostOk(state, payload){
      if(payload && !state.addPostOk) {
        state.addPostOk = payload
        setTimeout(() => {
          state.addPostOk = false
        }, 2600)
        return
      }
    },
    setAddPostError(state, payload){
      if(payload && !state.addPostError) {
        state.addPostError = payload
        setTimeout(() => {
          state.addPostError = false
        }, 2600)
        return
      }
    },
    setDeleteOk(state, payload){
      if(payload && !state.deleteOk) {
        state.deleteOk = payload
        setTimeout(() => {
          state.deleteOk = false
        }, 2600)
        return
      }
    },
    setDeleteError(state, payload){
      if(payload && !state.deleteError) {
        state.deleteError = payload
        setTimeout(() => {
          state.deleteError = false
        }, 2600)
        return
      }
    },
    setAlert(state, payload){
      if(payload && !state.alert) {
        state.alert = payload
        setTimeout(() => {
          state.alert = false
        }, 2600)
        return
      }
    },
    setServerConnectError(state, payload){
      if(payload && !state.serverConnectError) {
        state.serverConnectError = payload
        setTimeout(() => {
          state.serverConnectError = false
        }, 2600)
        return
      }
    },
    setServerNotFound(state, payload){
      state.serverNotFound = payload
    }
  }
}

export default AlertModule