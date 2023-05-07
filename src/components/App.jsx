import Profile from "./Profile/Profile";
import user from "../components/user.json";
import data from "../components/data.json";
import Statistics from "./Statistics/Statistics";

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
    </div>
  );
};
