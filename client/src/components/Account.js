import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";


const Account = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        const { user } = session;

        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, avatar_url`)
          .eq("id", user.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          setUsername(data.username);
          setAvatarUrl(data.avatar_url);
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    getProfile();
  }, [session]);

  

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user } = session;

      const updates = {
        id: user.id,
        username,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div aria-live="polite">
      {loading ? (
        "Saving ..."
      ) : (
        <form onSubmit={updateProfile} className="form-widget">
          <div>Email: {session.user.email}</div>
          <div>
            <label htmlFor="username">Name</label>
            <input
              id="username"
              type="text"
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div>
            <button className="button primary block" disabled={loading}>
              Update profile
            </button>
          </div>
        </form>
      )}
      <button
        type="button"
        className="button block"
        onClick={() => supabase.auth.signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Account;
