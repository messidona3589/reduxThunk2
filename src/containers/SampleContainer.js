import React from 'react';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const SampleContainer = (
  {getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers}) => {

  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers(1);
      } catch (e) {
        console.log(e); // 에러 조회
      }
    };
    fn();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({loading, sample}) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading['sample/GET_POST'],
    loadingUsers: loading['sample/GET_USERS']
  }),
  {
    getPost,
    getUsers
  }
)(SampleContainer);