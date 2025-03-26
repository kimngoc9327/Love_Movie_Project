import { SET_PARAMS } from "../types";

const setParams = (params) => ({
    type: SET_PARAMS,
    payload: params
}
)

export default setParams