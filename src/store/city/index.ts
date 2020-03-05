const state = {
    nm: window.localStorage.getItem("nowNm") || '黄冈',
    id: window.localStorage.getItem("nowId") || 258
};

const actions = {

}

const mutations = {
    CITY_INFO(state, payload){
        console.log(payload)
        state.nm = payload.nm
        state.id = payload.id
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}