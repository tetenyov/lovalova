import { connect } from 'react-redux';

import { RootState } from '../types/root-state';
import { TUsersReducerInitialState } from '../types/reducers/users-reducer';

import UserList from '../components/user-list/UserList';

const mapStateToProps = (state: RootState, { pathname }: { pathname: string }) => {
  const { users, age, hairColors, heights }: TUsersReducerInitialState = state.users;

  const isColor = (allColors: string[], color: string) => {
    return allColors.length ? allColors.find(el => el.includes(color)) : true
  };

  const isHeight = (allHeights: string[], height: string) => {
    return allHeights.length 
      ? allHeights.find(el => el.includes(height)) 
      : true;
  };
  
  const filteredUsers = users.filter(user => pathname.slice(1) === user.gender 
    && (Number(user.age) >= Number(age.from) || age.from === '')
    && (Number(user.age) <= Number(age.to) || age.to === '')
    && isColor(hairColors, user.hairColor)
    && isHeight(heights, user.height));

  return {
    filteredUsers
  };
};

export default connect(mapStateToProps)(UserList);
