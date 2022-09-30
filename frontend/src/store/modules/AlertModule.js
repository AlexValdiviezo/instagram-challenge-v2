const AlertModule={
    state:{
      alert: false,
      deleteOk: false,
      deleteError: false
    },
    mutations:{
      setDeleteOk(state, payload){
        state.deleteOk = payload
      },
      setDeleteError(state, payload){
        state.deleteError = payload
      },
      setAlert(state, payload){
        state.alert = payload
      }
    }
}

export default AlertModule