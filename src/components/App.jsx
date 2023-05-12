import Profile from './Profile/Profile';
import user from '../components/user.json';
import data from '../components/data.json';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import friends from '../components/friends.json';
import transactions from '../components/transactions.json';
import TransactionsHistory from '../components/TransactionHistory/TransactionsHistory';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </div>
  );
};
