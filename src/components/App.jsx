import { Profile } from 'components/Profile/Profile';
import user from 'components/data/user.json'
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/data/data.json'
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/data/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 100,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '100px',
          marginRight: '100px',
        }}
      >
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />
    </div>
  );
};
