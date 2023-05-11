import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request){
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return params => async dispatch => {
    dispatch({type}); //요청 시작
    dispatch(startLoading(type)); //로딩 시작
    try {
     const response = await request(params);
     dispatch({type : SUCCESS, payload : response.data}); //요청 성공
     dispatch(finishLoading(type)); //로딩 끝
    } catch(e) {
      dispatch({type : FAILURE, payload : e, error : true}); //요청 실패
      throw e;
    }
  }
};

//사용법 createRequestThunk('GET_POST', api.getPost);